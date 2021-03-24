import * as React from "react";
import { gql, useSubscription } from '@apollo/client';
import { getUser } from "../utils/auth";

const USERS_SUBSCRIPTION = gql`
  subscription($fb_id: String_comparison_exp!) {
    users(where: { fb_id: $fb_id }) {
      id
      first_name
      last_name
      fb_id
    }
  }
`;

const UsersList = () => {

  const fbUser = getUser()

  const { loading, error, data } = useSubscription(
    USERS_SUBSCRIPTION,
    { variables: { fbUser } }
  );

  // const { loading, error, data } = useSubscription(USERS_SUBSCRIPTION, {
  //   variables: { getUser().id },
  //   suspend: false,
  // })

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  return(
    <ul>
      {data.users.map(user => (
        <li key={user.id}>{user.first_name} {user.last_name} - {user.fb_id}</li>
      ))}
    </ul>
  )
}

export default UsersList
