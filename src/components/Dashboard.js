import * as React from "react"
import AddUser from "./AddUser"
import ListOfUserPosts from "./ListOfUserPosts"

const UserStuff = ({ FbUser }) => (
	<div>
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <AddUser/>
    </div>
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <ListOfUserPosts FbUser={FbUser} />
    </div>
  </div>
)

export default UserStuff;

