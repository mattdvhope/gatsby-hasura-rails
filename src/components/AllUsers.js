import React from 'react';
import { gql, useSubscription } from '@apollo/client';
import { getUser } from "../utils/auth";
import JoinableUsers from "./JoinableUsers";

const SOME_USERS_SUBSCRIPTION = gql`
  subscription findUser($login_time: Int_comparison_exp) {
    users(where: { login_time: $login_time } ) {
      id
      name
      first_name
      login_time
      fb_id
    }
  }
`

const AllUsers = ({ UserloginTime }) => {

  const { loading, error, data } = useSubscription(
    SOME_USERS_SUBSCRIPTION,
    { variables: {login_time: { _eq: UserloginTime }}, suspend: false }
  );

  if (loading) {
    return <p>Loading users...</p>
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  return(
    <>
  		<p>Users with same login time...</p>
      <ul>
        {data.users.map(user => (
          <JoinableUsers user={user}/>
        ))}
      </ul>
    </>
  )

}

export default AllUsers;
