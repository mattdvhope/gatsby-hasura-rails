import React, { useEffect } from 'react';
import { getUser } from "../utils/auth"
import { gql, useMutation } from '@apollo/client';
import UserProfile from "./UserProfile";

const ADD_FB_USER = gql`
	mutation addUser(
	  $fb_id: String!
	  $first_name: String!
	  $last_name: String!
	  $name: String!
	  $picture_url: String!
	  $login_time: timestamptz!
	) {
	  registerUser(
	    fb_id: $fb_id,
	    first_name: $first_name,
	    last_name: $last_name,
	    name: $name,
	    picture_url: $picture_url,
	    login_time: $login_time
	  ) {
	    id
	    fb_id
	    first_name
	    last_name
	    name
	    picture_url
	    login_time
	  }
	}
`;

const UserRegistration = ({ timeNow }) => {
  const fbUser = getUser();
  const [addFbUser, { data }] = useMutation(ADD_FB_USER);

  useEffect(() => {
		return window.onload = function() {
	  	addFbUser({
		  	variables: {
		  	 fb_id: fbUser.id,
		  	 first_name: fbUser.first_name,
		  	 last_name: fbUser.last_name,
		  	 name: fbUser.name,
		  	 picture_url: fbUser.picture.data.url,
		  	 login_time: timeNow
		  	}
		  });
		};
  }); // useEffect


  return (
		<div id="mainDiv">
	    <div style={{ margin: `2rem auto`, width: `550px` }}>
	      <p>Time: {timeNow}</p>
	      <UserProfile />
	    </div>
	  </div>
  )
}

export default UserRegistration;

