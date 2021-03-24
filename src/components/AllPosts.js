import React from 'react';
import { gql, useSubscription } from '@apollo/client';

const ALL_POSTS_SUBSCRIPTION = gql`
  subscription {
    posts {
      content
    }
  }
`

const AllPosts = () => {

  const { loading, error, data } = useSubscription(
    ALL_POSTS_SUBSCRIPTION,
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
      <p>All Posts</p>
      {data.posts.map(post => (
        <li key={post.id}>{post.content} ..by {post.user.first_name}</li>
      ))}
    </ul>
  )

}

export default AllPosts;
