import React from 'react';
import { gql, useSubscription } from '@apollo/client';
import { getUser } from "../utils/auth";
import AllPosts from "./AllPosts"

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
console.log(data.users)
console.log(user)

  return(
    <div>
  {/* <div>{user.first_name} {user.last_name} - {user.fb_id}</div>
      <ul>
        <p>Posts by {user.first_name}</p>
        {user.posts.map(post => (
          <li key={post.id}>{post.content} ..by {post.user.first_name}</li>
        ))}
      </ul>
      <AllPosts/>  */}    
    </div>
  )
}

export default UserProfile
