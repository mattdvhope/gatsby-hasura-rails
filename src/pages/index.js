import React, { useState, useEffect } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

import { isBrowser } from '../utils/mountedYet'; 
// import UserStuff from "../components/UserStuff"
// import { isLoggedIn, getUser, handleLogin } from "../utils/auth"
// import { FbLoginURL } from "../utils/FbLoginURL"
// import { getAccessToken, getAppAccessToken, inspectAccessToken, getUserProfile } from "../utils/FBLoginValidations"
// import FB from 'fb';

const IndexPage = () => {

  const [handleClickFunction, setHandleClickFunction] = useState(() => null);

  useEffect(() => {

    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '611958516129057',
        cookie     : true,  // enable cookies to allow the server to access
                          // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v10.0' // use version 2.1
      });

      window.FB.getLoginStatus(function(response) {
        this.statusChangeCallback(response);
      });
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/th_TH/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    const handleClick = () => {
      window.FB.login(checkLoginState());
    }

    const checkLoginState = () => {
      window.FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
    }

    const statusChangeCallback = (response) => {
      console.log('statusChangeCallback');
      console.log(response);
      // The response object is returned with a status field that lets the
      // app know the current login status of the person.
      // Full docs on the response object can be found in the documentation
      // for window.FB.getLoginStatus().
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
      }
    }

    const testAPI = () => {
      console.log('Welcome!  Fetching your information.... ');
      window.FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
      });
    }

  }); // useEffect happens AFTER render!!!

  const isBrowser = typeof window !== "undefined"
  console.log(isBrowser)

  return (
    <Layout>
      <SEO title="Home" />

      <h2>
    {/* <a href="#" onClick={handleClick()}>Login</a> */}
        <a href="#" onClick={() => null}>Login</a>
      </h2>
    </Layout>
  )



    // { isLoggedIn() ? UserStuff() : <h2>Not yet logged in!!</h2> }
    // <a
    //   href={FbLoginURL()}
    // >
    //   Facebook Login Link
    // </a>
}

export default IndexPage
