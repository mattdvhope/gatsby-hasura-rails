import * as React from "react"
import AddUser from "./AddUser"
import UserDashboard from "./UserDashboard"

const UserStuff = ({ FbName }) => (
	<div>
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <AddUser/>
    </div>
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <UserDashboard FbName={FbName} />
    </div>
  </div>
)

export default UserStuff;

