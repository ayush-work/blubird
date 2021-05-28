import React from "react";
import Logo from "../Logo";
import { auth, provider } from "../../firebase";
import "./login.css";
const loginUser = () => {
  auth.signInWithPopup(provider).catch(alert);
};
const Login = () => {
  return (
    <div className="login">
      <Logo></Logo>
      <button className="login__btn" onClick={loginUser}>
        Sign in With Google
      </button>
    </div>
  );
};

export default Login;
