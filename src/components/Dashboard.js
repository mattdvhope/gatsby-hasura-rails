import * as React from "react"
import UserProfile from "./UserProfile"
import AddUser from "./AddUser"
import ListOfUserPosts from "./ListOfUserPosts"

const Dashboard = () => (
	<div>
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <UserProfile/>
    </div>
    
  </div>
)

export default Dashboard;

