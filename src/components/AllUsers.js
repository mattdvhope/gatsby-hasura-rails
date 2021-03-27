import React from 'react';
import { gql, useSubscription } from '@apollo/client';

const SOME_USERS_SUBSCRIPTION = gql`
  subscription findUser($login_time: Int_comparison_exp) {
    users(where: { login_time: $login_time } ) {
      id
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
    <ul>
  		<p>Users with same login time...</p>
      {data.users.map(user => (
        <li key={user.id}>{user.name} - {user.login_time}</li>
      ))}
    </ul>
  )

}

export default AllUsers;
