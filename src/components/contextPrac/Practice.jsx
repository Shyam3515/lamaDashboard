import "./practice.scss";
import React, { useContext } from "react";
import { Logcontext } from "./context";

const Practice = () => {
  const { setUsername, setShowProfile } = useContext(Logcontext);
  return (
    <div className="practice">
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input type="password" placeholder="password" />
      <button onClick={() => setShowProfile(true)}>Login</button>
    </div>
  );
};

export default Practice;
