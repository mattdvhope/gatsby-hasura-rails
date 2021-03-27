import React, { useEffect } from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UserRegistration from "../components/UserRegistration";
import { isLoggedIn, getUser, handleLogin } from "../utils/auth";
import UserInRails from "../utils/UserInRails";
import { GetFbUserProfile } from "../utils/GetFbUserProfile";

const SecondPage = () => {

  useEffect(async () => {
    if (!isLoggedIn()) {
	    handleLogin(await GetFbUserProfile());
    }
  });

  const days_passed = (dt) => {
	  const current = new Date(dt.getTime());
	  const previous = new Date(2021, 0, 1);
	  return Math.ceil((current - previous + 1) / 86400000);
	}

	const d = new Date();

	const timeNow = days_passed(new Date(d.getFullYear(), d.getUTCMonth(), d.getUTCDate()));

	if (getUser().id) {
		return (
		  <Layout>
		    <SEO title="Page two" />
		    <h3>Hi {getUser().name}!!</h3>
		    <UserInRails fb_id={getUser().id}/>
		    <UserRegistration timeNow={timeNow}/>
		    <Link to="/">Go back to the homepage</Link>
		  </Layout>
		)
	} else {
		return <span/>
	}
}

export default SecondPage
