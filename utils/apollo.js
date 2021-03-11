import React from 'react';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import fetch from "isomorphic-fetch";
import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

export const client = new ApolloClient({
	uri: 'https://hasura-heroku-based.herokuapp.com/v1/graphql',
	headers: {
    'x-hasura-admin-secret': `oi2mmraOYAPLzTjwQaLYeQyKKITjNoIxrUT3DSm0fPGYK2leWLbbWEiSiwa5O9GN`, // `${process.env.GATSBY_HASURA_GRAPHQL_ADMIN_SECRET}`, 
  },
	fetch,
});

export const wrapRootElement = ({ element }) => (
	<ApolloProvider client={client}>{element}</ApolloProvider>
);
