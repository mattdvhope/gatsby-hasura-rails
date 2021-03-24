import * as React from "react"
import { gql, useMutation } from '@apollo/client';
import UserProfile from "./UserProfile"



const Dashboard = () => (
	<div>
    <div style={{ margin: `2rem auto`, width: `550px` }}>
      <UserProfile/>
    </div>
    
  </div>
)

export default Dashboard;

