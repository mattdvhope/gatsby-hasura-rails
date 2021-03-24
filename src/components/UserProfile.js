import * as React from "react"
import { getUser } from "../utils/auth"
import { gql, useMutation } from '@apollo/client';

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

const UserProfile = () => {
  const fbUser = getUser();
  const [addFbUser, { data }] = useMutation(ADD_FB_USER);

console.log(fbUser);

  return (
	  <button onClick={e => {
		  addFbUser({
		  	variables: {
		  	 fb_id: fbUser.fb_id,
		  	 first_name: fbUser.first_name,
		  	 last_name: fbUser.last_name,
		  	 name: fbUser.name,
		  	 picture_url: fbUser.picture_url
		  	}
		  })
	  }}>Add FB user to Rails</button>
  )

}

export default UserProfile;

