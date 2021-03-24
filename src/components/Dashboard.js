import * as React from "react"
import UserRegistration from "./UserRegistration"
import UserProfile from "./UserProfile"

const Dashboard = ({ fb_id }) => (
	<div>
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <UserRegistration/>
    </div>
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <UserProfile fb_id={fb_id}/>
    </div>
  </div>
)

export default Dashboard;

