import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Dashboard from "../components/Dashboard"
import { isLoggedIn, getUser, handleLogin } from "../utils/auth"
import { GetFbUserProfile } from "../utils/GetFbUserProfile";

const SecondPage = () => {

	const [fbId, setFbId] = useState(null);

  useEffect(async () => {
    if (!isLoggedIn()) {
	    handleLogin(await GetFbUserProfile());
    	setFbId(getUser().id)
    }
  }); // useEffect

  if (!fbId) {
  	return <span/>
  } else {
		return (
		  <Layout>
		    <SEO title="Page two" />
		    <h3>Hi {fbId || getUser().id}!!</h3>
		    <Dashboard/>
		    <Link to="/">Go back to the homepage</Link>
		  </Layout>
		)
	}
}

export default SecondPage
