import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UserStuff from "../components/UserStuff"
import { getAccessToken, getAppAccessToken, inspectAccessToken, getUserProfile } from "../utils/FBLoginValidations"

const SecondPage = () => {

  useEffect(async () => {
    const url_with_code = window.location.search.match(/(code=)(.*)(?=&state)/)
    const code = url_with_code ? url_with_code[2] : null
    const token = await getAccessToken(code)
    const appToken = await getAppAccessToken()
    const objectFromDebug = await inspectAccessToken(token, appToken)
    const profile_of_person = await getUserProfile(objectFromDebug.data.user_id, token)

    console.log(token);
    console.log(appToken);
    console.log(profile_of_person)
  }); // useEffect

	return (
  <Layout>
    <SEO title="Page two" />
    <UserStuff/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}

export default SecondPage
