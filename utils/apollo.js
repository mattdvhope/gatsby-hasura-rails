import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import fetch from "isomorphic-fetch";
import config from 'gatsby-plugin-config'; // for ENV variables


const cache = new InMemoryCache();

export const client = new ApolloClient({
	cache: cache,
	uri: 'https://hasura-heroku-based.herokuapp.com/v1/graphql',
	headers: {
    'x-hasura-admin-secret': `${config.HASURA_GRAPHQL_ADMIN_SECRET}`,
  },
	fetch,
});

export const wrapRootElement = ({ element }) => (
	<ApolloProvider client={client}>{element}</ApolloProvider>
);
