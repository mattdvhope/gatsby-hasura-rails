import * as React from "react"

const UserProfile = ({ FbUser }) => {

  const user = JSON.parse(FbUser)

  return (
  <div>
    <p>This is who you are according to Facebook...</p>
    <p>Full Name: {user.name}</p>
    <p>First Name: {user.first_name}</p>
    <p>Last Name: {user.last_name}</p>
  </div>

)}

export default UserProfile;

