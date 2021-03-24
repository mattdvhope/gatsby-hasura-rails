import * as React from "react"
import { gql, useSubscription } from '@apollo/client';


const USERS_SUBSCRIPTION = gql`
  subscription {
    users {
      id
    }
  }
`;

const UsersList = ({ FbUser }) => {

  console.log(JSON.parse(FbUser))

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
        <li key={user.id}>Text <span style={{ color: `#c7b7b7`, fontSize: `60%` }}>...by {JSON.parse(FbUser).first_name}</span></li>
      ))}
    </ul>
  )
}

export default UsersList
