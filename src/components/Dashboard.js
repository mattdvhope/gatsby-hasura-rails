import * as React from "react"
import UserRegistration from "./UserRegistration"
import UserProfile from "./UserProfile"
import { getUser } from "../utils/auth";

const Dashboard = () => {

	const myPromise = new Promise((resolve, reject) => {
	  resolve(getUser())
	});

	myPromise
		.then(console.log(getUser()))

	return (
		<div>
	    <div style={{ margin: `2rem auto`, width: `550px` }}>
	      <UserRegistration/>
	    </div>
{/*   <div style={{ margin: `2rem auto`, width: `550px` }}>
	      <UserProfile/>
	    </div>  */}
	  </div>
	)
}

export default Dashboard;

