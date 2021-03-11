import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import fetch from "isomorphic-fetch";
// import dotenv from "dotenv";


// // This 'dotenv' creates the 'fs' error.  Do whatever it takes to fix dotenv in order to use process.env.... etc... maybe GATSBY_ prefix????
// dotenv.config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

const cache = new InMemoryCache();

export const client = new ApolloClient({
	cache: cache,
	uri: 'https://hasura-heroku-based.herokuapp.com/v1/graphql',
	headers: {
    'x-hasura-admin-secret': `oi2mmraOYAPLzTjwQaLYeQyKKITjNoIxrUT3DSm0fPGYK2leWLbbWEiSiwa5O9GN`, // `${process.env.GATSBY_HASURA_GRAPHQL_ADMIN_SECRET}`,
  },
	fetch,
});

export const wrapRootElement = ({ element }) => (
	<ApolloProvider client={client}>{element}</ApolloProvider>
);
