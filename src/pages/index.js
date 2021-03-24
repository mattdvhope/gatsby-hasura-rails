import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { isLoggedIn, getUser, handleLogin } from "../utils/auth"
import { FbLoginURL } from "../utils/FbLoginURL"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <p>Click this link to log into this website using your Facebook account.</p>
      <a
        href={FbLoginURL()}
      >
        Login with Facebook
      </a>
    </Layout>
  )

}

export default IndexPage
