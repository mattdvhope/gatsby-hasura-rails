import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { getAccessToken, getAppAccessToken, inspectAccessToken, getUserProfile } from "../utils/FBLoginValidations"

const SecondPage = () => {

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
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}

export default SecondPage
