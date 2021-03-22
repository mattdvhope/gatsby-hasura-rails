import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UserStuff from "../components/UserStuff"
import { isLoggedIn, getUser, handleLogin } from "../utils/auth"
import { getAccessToken, getAppAccessToken, inspectAccessToken, getUserProfile } from "../utils/FBLoginValidations"

const SecondPage = () => {

	const [name, setName] = useState(null);

  useEffect(async () => {
    const url_with_code = window.location.search.match(/(code=)(.*)(?=&state)/)
    const code = url_with_code ? url_with_code[2] : null

    if (!isLoggedIn()) {
	    const token = await getAccessToken(code)
	    const appToken = await getAppAccessToken()
	    const objectFromDebug = await inspectAccessToken(token, appToken)
	    const profile_of_person = await getUserProfile(objectFromDebug.data.user_id, token)
	    handleLogin(profile_of_person);
    	setName(getUser().name)
    }

  }); // useEffect

	return (
	  <Layout>
	    <SEO title="Page two" />
	    <h3>Hi {name}, Here is some interesting content for a two or more people to chat about while interacting on this web page.  They won't have to switch back and forth between this page and Facebook Messenger or LINE.  They can have all of their interaction, discipleship, relationship-development, content-sharing, etc, etc, right here on this page!!</h3>
	    <UserStuff/>
	    <Link to="/">Go back to the homepage</Link>
	  </Layout>)

}

export default SecondPage
