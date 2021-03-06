import React from 'react';
import { gql, useSubscription } from '@apollo/client';
import { getUser } from "../utils/auth";
import AllUsers from "./AllUsers"

// This graphql data comes from Rails via Hasura...
const USER_SUBSCRIPTION = gql`
  subscription($fb_id: String_comparison_exp!) {
    users(where: { fb_id: $fb_id }) {
      id
      first_name
      last_name
      name
      fb_id
      posts {
        id
        content
        user {
          first_name
        }
      }
      login_time
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

  let user = data.users[0];
console.log(user);
  if (user) {
console.log(user);
console.log(user.name);
    return (
      <div>
        <br/>
        <div>Posts by {user.name} - {user.login_time}</div>
        <ul>
          {user.posts.map(post => (
            <li key={post.id}>{post.content} ..by {post.user.first_name}</li>
          ))}
        </ul>
        <AllUsers UserloginTime={user.login_time}/>    
      </div>
    )
  } else {
    return null;
  }

}

export default UserProfile
