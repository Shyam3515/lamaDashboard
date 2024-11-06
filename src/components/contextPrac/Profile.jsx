import React, { useContext } from "react";
import { Logcontext } from "./context";

const Profile = () => {
  const { username } = useContext(Logcontext);
  return (
    <div>
      <h1>profile</h1>
      <h2>UserName : {username}</h2>
    </div>
  );
};

export default Profile;
