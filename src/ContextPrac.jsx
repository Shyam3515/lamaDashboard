import "./contextprac.scss";

import React, { useState } from "react";
import Practice from "./components/contextPrac/Practice";
import Profile from "./components/contextPrac/Profile";

import { Logcontext } from "./components/contextPrac/context";

const ContextPrac = () => {
  const [username, setUsername] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="prac">
      <Logcontext.Provider value={{ username, setUsername, setShowProfile }}>
        {showProfile ? <Profile /> : <Practice />}
      </Logcontext.Provider>
    </div>
  );
};

export default ContextPrac;
