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
	    handleLogin(await GetFbUserProfile());
    	setName(getUser().name)
    }
  }); // useEffect

	return (
	  <Layout>
	    <SEO title="Page two" />
	    <h3>Hi {name || getUser().name}!!</h3>
	    <Dashboard/>
	    <Link to="/">Go back to the homepage</Link>
	  </Layout>
	)

}

export default SecondPage
