// import React from 'react';
// import { Link, graphql } from 'gatsby';
// import { gql, useQuery, useSubscription } from '@apollo/client';

// export const query = graphql`
// 	query ($id: hasura_uuid!) {
// 		blog {
// 			post: posts_by_pk( id: $id ) {
// 				id
// 				title
// 				content
// 	      author {
// 					first_name
// 					last_name
// 	      }
// 	    }
// 	  }
// 	}
// `;

// // const GET_COMMENTS = gql`
// // 	query($id: uuid!) {
// // 	  comments(where: {post_id: { _eq: $id }}) {
// // 	  	id
// // 	    comment
// // 	  }
// // 	}
// // `;

// const GET_COMMENTS = gql`
// 	subscription($id: uuid!) {
// 	  comments(where: {post_id: { _eq: $id }}) {
// 	  	id
// 	    comment
// 	  }
// 	}
// `;

// const Comments = ({ id }) => {
// 	console.log({id})
// 	// const { loading, error, data } = useQuery(GET_COMMENTS, {
// 	// 	suspend: false,
// 	//   variables: { id },
// 	// })

// 	const { loading, error, data } = useSubscription(GET_COMMENTS, {
// 		suspend: false,
// 	  variables: { id },
// 	})


// 	if (loading) {
// 		return <p>Loading...</p>
// 	}

// 	if (error) {
// 		return <pre>{JSON.stringify(error, null, 2)}</pre>
// 	}

// 	return(
// 		<ul>
// 			{data.comments.map(comment => (
// 				<li key={comment.id}>{comment.comment}</li>
// 			))}
// 		</ul>
// 	)
// }

// const post = ({ data }) => {
// 	const post = data.blog.post;

// 	return (
// 		<div style={{ margin: `5rem auto`, width: `550px` }}>
// 			<Link to="/">&larr; back to all posts</Link>
// 			<h1>{post.title}</h1>
// 			<p>Written by {post.author.first_name} {post.author.last_name}.</p>
// 			<p>{post.content}</p>
// 			<Comments id={post.id} />
// 		</div>
// 	)
// }

// export default post;