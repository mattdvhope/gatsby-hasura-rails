import React, { useState, useEffect } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import UserStuff from "../components/UserStuff"
import { isLoggedIn, getUser, handleLogin } from "../utils/auth"
import { FbLoginURL } from "../utils/FbLoginURL"
import { getAccessToken, getAppAccessToken, inspectAccessToken, getUserProfile } from "../utils/FBLoginValidations"



const IndexPage = () => {

  useEffect(async () => {
    const url_with_code = window.location.search.match(/(code=)(.*)(?=&state)/);
    const code = url_with_code ? url_with_code[2] : null;

    const token = await getAccessToken(code)
    // const appToken = await getAppAccessToken()
    // const objectFromDebug = await inspectAccessToken(token, appToken)
    // const profile_of_person = await getUserProfile(objectFromDebug.data.user_id, token)

    console.log(token);

    // handleLogin(profile_of_person)
  });



  return (
  <Layout>
    <SEO title="Home" />
    { isLoggedIn() ? UserStuff() : <h2>Not yet logged in!!</h2> }
    <a
      href={FbLoginURL()}
    >
      Facebook Login Link
    </a>



  </Layout>
)}

export default IndexPage
