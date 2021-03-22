import * as React from "react"
import { gql, useMutation } from '@apollo/client';


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
          // addUser({ variables: { username: inputUser.value, email: inputEmail.value } });
          addUser({ variables: { username: inputUser.value } });
          inputUser.value = '';
          // inputEmail.value = '';
        }}
      >
        <input
          name="Username"
          ref={node => {
            inputUser = node;
          }}
        />
    {/* <input
          name="Email"
          ref={node => {
            inputEmail = node;
          }}
        /> */}
        <button type="submit">Share some thoughts</button>
      </form>
    </div>
  );
}

export default AddUser
