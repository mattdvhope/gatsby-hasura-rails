import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { getUser } from "../utils/auth";


const JoinableUser = ({ user }) => {

  const JoinUsers = () => {
    console.log(getUser().first_name + " clicked " + user.name);
  }

  return(
    <li
      onClick={() => JoinUsers(user)}
      key={user.id}
    >
      {user.name} - {user.login_time}
    </li>
  )

}

export default JoinableUser;
