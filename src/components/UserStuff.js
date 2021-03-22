import * as React from "react"
import AddUser from "./AddUser"
import UsersList from "./UsersList"

const UserStuff = () => (
	<div>
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <AddUser/>
    </div>
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <UsersList/>
    </div>
  </div>
)

export default UserStuff;

