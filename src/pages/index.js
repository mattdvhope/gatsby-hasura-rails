import * as React from "react"
import { graphql, Link } from "gatsby"
import { gql, useQuery, useMutation, useSubscription } from '@apollo/client';

import Layout from "../components/layout"
import SEO from "../components/seo"
import UsersList from "../components/UsersList"

const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!){
    registerUser(username: $username, email: $email) {
      id
      username
      email
      created_at
      updated_at
    }
  }
`;

const AddUser = () => {
  let inputUser;
  let inputEmail;
  const [addUser, { data }] = useMutation(ADD_USER);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addUser({ variables: { username: inputUser.value, email: inputEmail.value } });
          inputUser.value = '';
          inputEmail.value = '';
        }}
      >
        <input
          name="Username"
          ref={node => {
            inputUser = node;
          }}
        />
        <input
          name="Email"
          ref={node => {
            inputEmail = node;
          }}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <AddUser/>
    </div>
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <UsersList/>
    </div>
  </Layout>
)

export default IndexPage
