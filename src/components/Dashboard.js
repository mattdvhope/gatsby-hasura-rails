import * as React from "react"
import UserProfile from "./UserProfile"
import AddUser from "./AddUser"
import ListOfUserPosts from "./ListOfUserPosts"

const UserStuff = ({ FbUser }) => (
	<div>
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <UserProfile FbUser={FbUser} />
    </div>
    
  </div>
)

export default UserStuff;

