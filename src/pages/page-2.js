import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Dashboard from "../components/Dashboard"
import { isLoggedIn, getUser, handleLogin } from "../utils/auth"
import { GetFbUserProfile } from "../utils/GetFbUserProfile";

const SecondPage = () => {

	const [name, setName] = useState(null);

  useEffect(async () => {
    if (!isLoggedIn()) {
	    handleLogin(GetFbUserProfile());
	    console.log(getUser())
    	setName(getUser().name)
    }

  }); // useEffect

	return (
	  <Layout>
	    <SEO title="Page two" />
	    <h3>Hi {name || getUser().name}, Here is some interesting content for a two or more people to chat about while interacting on this web page.  They won't have to switch back and forth between this page and Facebook Messenger or LINE.  They can have all of their interaction, discipleship, relationship-development, content-sharing, etc, etc, right here on this page!!</h3>
	    <Dashboard FbName={name || getUser().name}/>
	    <Link to="/">Go back to the homepage</Link>
	  </Layout>)

}

export default SecondPage
