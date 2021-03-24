import React, { useEffect } from 'react';
import { gql, useQuery, useSubscription } from '@apollo/client';
import { getUser } from "../utils/auth";

const USER_SUBSCRIPTION = gql`
  subscription($fb_id: String_comparison_exp!) {
    users(where: { fb_id: $fb_id }) {
      id
      first_name
      last_name
      fb_id
    }
  }
`;

const UsersProfile = ({ fb_id }) => {

  const { loading, error, data } = useSubscription(
    USER_SUBSCRIPTION,
    { variables: fb_id, suspend: false }
  );

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  const { users } = data;

  return(
    <ul>
      {data.users.map(user => (
        <li key={user.id}>{user.first_name} {user.last_name} - {user.fb_id}</li>
      ))}
    </ul>
  )
}

export default UsersProfile
