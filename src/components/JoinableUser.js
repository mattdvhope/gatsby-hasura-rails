import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { getUser } from "../utils/auth";


const JoinableUser = ({ user }) => {

  const JoinUsers = () => {
    console.log(getUser().name + " clicked " + user.name);
  }

  return(
    <li
      onClick={() => JoinUsers()}
      key={user.id}
    >
      {user.name} - {user.login_time}
    </li>
  )

}

export default JoinableUser;
