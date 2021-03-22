import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UserStuff from "../components/UserStuff"
import { getAccessToken, getAppAccessToken, inspectAccessToken, getUserProfile } from "../utils/FBLoginValidations"

const SecondPage = () => {

	const [first_name, setName] = useState(null);

  useEffect(async () => {
    const url_with_code = window.location.search.match(/(code=)(.*)(?=&state)/)
    const code = url_with_code ? url_with_code[2] : null
    const token = await getAccessToken(code)
    const appToken = await getAppAccessToken()
    const objectFromDebug = await inspectAccessToken(token, appToken)
    const profile_of_person = await getUserProfile(objectFromDebug.data.user_id, token)
    console.log(profile_of_person)

    setName(profile_of_person.first_name)
  }); // useEffect



	return (
  <Layout>
    <SEO title="Page two" />
    <h3>Hi {first_name}, Here is some interesting content for a two or more people to chat about while interacting on this web page.  They won't have to switch back and forth between this page and Facebook Messenger or LINE.  They can have all of their interaction, discipleship, relationship-development, content-sharing, etc, etc, right here on this page!!</h3>
    <UserStuff/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>)

}

export default SecondPage
