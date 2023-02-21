import React from "react";
import "../styles/App.css";

const Welcome = (name) => {
  return (
    <div>
      Hey ! <h1>{name}</h1>
      <h2>Welcome to school</h2>
    </div>
  );
};

export default Welcome;
