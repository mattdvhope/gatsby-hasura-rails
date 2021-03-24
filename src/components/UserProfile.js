import * as React from "react"
import { getUser } from "../utils/auth"

const UserProfile = () => {

  const user = getUser();

  return (
  <div>
    <p>This is who you are according to Facebook...</p>
    <p>Full Name: {user.name}</p>
    <p>First Name: {user.first_name}</p>
    <p>Last Name: {user.last_name}</p>
  </div>

)}

export default UserProfile;

