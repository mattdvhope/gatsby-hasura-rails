import React from 'react';
import { gql, useSubscription } from '@apollo/client';
import { getUser } from "../utils/auth";
import AllUsers from "./AllUsers"

const USER_SUBSCRIPTION = gql`
  subscription($fb_id: String_comparison_exp!) {
    users(where: { fb_id: $fb_id }) {
      id
      first_name
      last_name
      fb_id
      posts {
        id
        content
        user {
          first_name
        }
      }
    }
  }
`;

const UserProfile = () => {

  const fb_id = getUser().id;

  const { loading, error, data } = useSubscription(
    USER_SUBSCRIPTION,
    { variables: {fb_id: { _eq: fb_id }}, suspend: false }
  );

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  const user = data.users.pop();

  if (user) {
    return (
      <div>
        <div>Posts by {user.first_name} {user.last_name}</div>
        <ul>
          {user.posts.map(post => (
            <li key={post.id}>{post.content} ..by {post.user.first_name}</li>
          ))}
        </ul>
        <AllUsers/>    
      </div>
    )
  } else {
    return <span/>
  }

}

export default UserProfile
