import React from 'react';
import { Link, graphql } from 'gatsby';
import { gql, useQuery } from '@apollo/client';

export const query = graphql`
	query ($id: hasura_uuid!) {
		blog {
			post: posts_by_pk( id: $id ) {
				title
				content
	      author {
					first_name
					last_name
	      }
	    }
	  }
	}
`;

const post = ({ data }) => {
	const post = data.blog.post;

	return (
		<div style={{ margin: `5rem auto`, width: `550px` }}>
			<Link to="/">&larr; back to all posts</Link>
			<h1>{post.title}</h1>
			<p>Written by {post.author.first_name} {post.author.last_name}.</p>
			<p>{post.content}</p>
			<div id="comments"></div>
		</div>
	)
}

export default post;