import React from 'react';
import { getUser, getRailsUser, setRailsUser } from "../utils/auth"
import { gql, useQuery, useMutation } from '@apollo/client';
import UserProfile from "./UserProfile";

const ADD_FB_USER = gql`
	mutation addUser(
	  $fb_id: String!
	  $first_name: String!
	  $last_name: String!
	  $name: String!
	  $picture_url: String!
	  $login_time: Int!
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

const GET_USER = gql`
	query getUsers($fb_id: String_comparison_exp!) {
		users(where: { fb_id: $fb_id }) {
			id
			name
			fb_id
		}
	}
`

console.log(getRailsUser());

const UserRegistration = ({ timeNow, fb_id }) => {
  const fbUser = getUser();

	const { loading, error, data } = useQuery(
		GET_USER,
    { variables: {fb_id: { _eq: fb_id }}}
	);
  
  const [addFbUser] = useMutation(ADD_FB_USER);

	console.log(data);
	if (!data) {
		const railsUser = document.getElementById('add-fb-rails-user');
		console.log(data);

		// railsUser.click();
	}

  return (
		<div id="mainDiv">
	    <div style={{ margin: `2rem auto`, width: `550px` }}>
	      <span
	      	id="add-fb-rails-user"
	      	style={{ display: `none` }} 
	      	onClick={e => {
	      		e.preventDefault();
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
				  	setRailsUser(fbUser);
	      }}/>
	      <p>Time: {timeNow}</p>
	      <UserProfile />
	    </div>
	  </div>
  )
}

export default UserRegistration;

