import React, { useState, useEffect } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

import UserStuff from "../components/UserStuff"
import { isLoggedIn, getUser, handleLogin } from "../utils/auth"
import { FbLoginURL } from "../utils/FbLoginURL"
import { getAccessToken, getAppAccessToken, inspectAccessToken, getUserProfile } from "../utils/FBLoginValidations"

const IndexPage = () => {

  useEffect(async () => {
    const url_with_code = window.location.search.match(/(code=)(.*)(?=&state)/)
    const code = url_with_code ? url_with_code[2] : null
    const token = await getAccessToken(code)
    const appToken = await getAppAccessToken()

    console.log(token);
    console.log(appToken);
  }); // useEffect

  return (
    <Layout>
      <SEO title="Home" />
      <a
        href={FbLoginURL()}
      >
        Login with Facebook
      </a>
    </Layout>
  )

}

export default IndexPage
