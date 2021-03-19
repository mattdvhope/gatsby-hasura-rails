import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { SubscriptionClient } from 'subscriptions-transport-ws'
import fetch from "isomorphic-fetch";
import ws from "ws"

const cache = new InMemoryCache();

const httpLink = new HttpLink({
	cache: cache,
	uri: 'https://rails-api-hasura.hasura.app/v1/graphql',
	headers: {
    'x-hasura-admin-secret': `${process.env.GATSBY_HASURA_GRAPHQL_ADMIN_SECRET}`,
  },
	fetch,
})

const wsForNode = typeof window === 'undefined' ? ws : null

// const wsClient = new SubscriptionClient("wss://hasura-heroku-based.herokuapp.com/v1/graphql", {
// 	reconnect: true,
// 	headers: {
//     'x-hasura-admin-secret': `${process.env.GATSBY_HASURA_GRAPHQL_ADMIN_SECRET}`,
//   },
// 	webSocketImpl: ws,
// });

const wsLink = new WebSocketLink({
	uri: 'wss://rails-api-hasura.hasura.app/v1/graphql',
	// headers: {
 //    'x-hasura-admin-secret': `${process.env.GATSBY_HASURA_GRAPHQL_ADMIN_SECRET}`,
 //  },
	webSocketImpl: wsForNode,
	options: {
		reconnect: true,
    connectionParams: () => ({
			headers: {
		    'x-hasura-admin-secret': `${process.env.GATSBY_HASURA_GRAPHQL_ADMIN_SECRET}`,
		  }
	  }),
	}
})

const link = split(({ query }) => {
	const { kind, operation } = getMainDefinition(query);

	return kind === "OperationDefinition" && operation === "subscription";
}, wsLink, httpLink)

export const client = new ApolloClient({
	link,
	cache: cache,
});

export const wrapRootElement = ({ element }) => (
	<ApolloProvider client={client}>{element}</ApolloProvider>
);
