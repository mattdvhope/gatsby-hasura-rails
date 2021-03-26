import * as React from "react"
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
	) {
	  registerUser(
	    fb_id: $fb_id,
	    first_name: $first_name,
	    last_name: $last_name,
	    name: $name,
	    picture_url: $picture_url
	  ) {
	    id
	    fb_id
	    first_name
	    last_name
	    name
	    picture_url
	  }
	}
`;

const UserRegistration = () => {
  const fbUser = getUser();
  const [addFbUser, { data }] = useMutation(ADD_FB_USER);

  const TellRegistered = () => {
  	document.getElementById("RegistrationButton").textContent="You're Registered!!";
  }

  return (
		<div id="mainDiv">
	    <div style={{ margin: `2rem auto`, width: `550px` }}>
			  <button 
			  	id="RegistrationButton"
			  	onClick={async e => {
					  await addFbUser({
					  	variables: {
					  	 fb_id: fbUser.id,
					  	 first_name: fbUser.first_name,
					  	 last_name: fbUser.last_name,
					  	 name: fbUser.name,
					  	 picture_url: fbUser.picture.data.url
					  	}
					  });
					  await TellRegistered();
				  }}>Register on this app using your FB profile</button>
	    </div>
	    <div style={{ margin: `2rem auto`, width: `550px` }}>
	      <UserProfile />
	    </div>
	  </div>
  )
}

export default UserRegistration;

