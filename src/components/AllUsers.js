import React from 'react';
import { gql, useSubscription } from '@apollo/client';

const ALL_USERS_SUBSCRIPTION = gql`
  subscription {
    users {
      id
      first_name
      last_name
      name
    }
  }
`

const AllPosts = () => {

  const { loading, error, data } = useSubscription(
    ALL_USERS_SUBSCRIPTION,
    { suspend: false }
  );

  if (loading) {
    return <p>Loading posts...</p>
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  return(
    <ul>
  		<p>All Users</p>
      {data.users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )

}

export default AllPosts;
