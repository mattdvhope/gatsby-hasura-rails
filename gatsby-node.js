// exports.createPages = async ({ actions: {createPage}, graphql }) => {

// 	const result = await graphql(`
// 		{
// 			blog {
// 				posts {
// 					id
// 					title
// 		    }
// 		  }
// 		}
// 	`);

// 	// TODO handle errors
// 	console.log(result)
// 	const posts = result.data.blog.posts;

// 	posts.forEach(post => {
// 		createPage({
// 			path: `/post/${post.id}/`,
// 			component: require.resolve('./src/templates/post.js'),
// 			context: {
// 				id: post.id
// 			}
// 		})

// 	})

// }


exports.createPages = async ({ actions: {createPage}, graphql }) => {

	const result = await graphql(`
		{
		  blog {
		    users {
		    	id
		      email
		    }
		  }
		}
	`);

	// TODO handle errors
	console.log(result)
	// const posts = result.data.blog.posts;

	// posts.forEach(post => {
	// 	createPage({
	// 		path: `/post/${post.id}/`,
	// 		component: require.resolve('./src/templates/post.js'),
	// 		context: {
	// 			id: post.id
	// 		}
	// 	})
	// })

}