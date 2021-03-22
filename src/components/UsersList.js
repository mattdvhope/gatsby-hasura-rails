import * as React from "react"
import { gql, useSubscription } from '@apollo/client';


const USERS_SUBSCRIPTION = gql`
  subscription {
    users {
      id
      username
      email
    }
  }
`;

const UsersList = () => {
  const { loading, error, data } = useSubscription(USERS_SUBSCRIPTION, {
    suspend: false,
  })

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  return(
    <ul>
      {data.users.map(user => (
        <li key={user.id}>{user.username}</li>
      ))}
    </ul>
  )
}

export default UsersList
