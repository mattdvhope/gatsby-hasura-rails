import * as React from "react"
import UserRegistration from "./UserRegistration"
import UserProfile from "./UserProfile"

const Dashboard = () => (
	<div>
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <UserRegistration/>
    </div>
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <UserProfile/>
    </div>
  </div>
)

export default Dashboard;

