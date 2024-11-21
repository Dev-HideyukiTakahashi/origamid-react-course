import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log("Fazendo login");
    navigate("/sobre");
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
