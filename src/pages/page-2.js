import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UserRegistration from "../components/UserRegistration";
import { isLoggedIn, getUser, handleLogin } from "../utils/auth";
import { TimeNow } from "../utils/TimeNow";
import { GetFbUserProfile } from "../utils/GetFbUserProfile";

const SecondPage = () => {

  const [FbUser, setFbUser] = useState(false)

  useEffect(async () => {
    if (!isLoggedIn()) {
	    handleLogin(await GetFbUserProfile());
	  	setFbUser(true);
    }
  });

const ProvideGreeting = (FbUser) => {
	if (FbUser) {
		return <h3>Hi {getUser().name}!!</h3>;
	} else {
		return <h3>Waiting for greeting....</h3>;
	}
};

console.log("FbUser: ", FbUser);

	// if (getUser().id) {
		return (
		  <Layout>
		    <SEO title="Page two" />
		    {ProvideGreeting(FbUser)}
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
	// } else {
	// 	return <span/>
	// }
}

export default SecondPage
