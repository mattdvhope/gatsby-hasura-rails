import React from 'react';
import { gql, useSubscription } from '@apollo/client';
import { getUser } from "../utils/auth";

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

  const JoinUsers = user => {
    console.log("clicked " + user.first_name);
  }

  return(
    <ul>
  		<p>Users with same login time...</p>
      {data.users.map(user => (
        <li
          onClick={() => JoinUsers(user)}
          key={user.id}
        >
          {user.name} - {user.login_time}
        </li>
      ))}
    </ul>
  )

}

export default AllUsers;
