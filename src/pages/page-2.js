import React, { useEffect } from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UserRegistration from "../components/UserRegistration";
import { isLoggedIn, getUser, handleLogin } from "../utils/auth";
import { TimeNow } from "../utils/TimeNow";
import { GetFbUserProfile } from "../utils/GetFbUserProfile";

const SecondPage = () => {

  useEffect(async () => {
    if (!isLoggedIn()) {
	    handleLogin(await GetFbUserProfile());
    }
  });

	if (getUser().id) {
		return (
		  <Layout>
		    <SEO title="Page two" />
		    <h3>Hi {getUser().name}!!</h3>
		    <h3>Do you want to do a Bible Study with someone?</h3>
		    <UserRegistration timeNow={TimeNow()} />
		    <Link
		    	to="/"
		    	onClick={e => {
	      		localStorage.clear();
		      }}>
	    		Go back to the homepage
	    	</Link>
		  </Layout>
		)
	} else {
		return <span/>
	}
}

export default SecondPage
