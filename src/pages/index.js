import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    blog {
      posts {
        id
        title
      }
      comments_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site...</p>
    <p>Now go build something great.</p>
    <p>...like these graphql post titles:</p>
    <div style={{ margin: `5rem auto`, width: `550px` }}>
      {data.blog.posts.map(post => (
        <article key={post.id}>
          <h2><Link to={`post/${post.id}`}>{post.title}</Link></h2>
        </article>
      ))}
    </div>

    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
