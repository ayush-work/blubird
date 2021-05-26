import React from "react";
import Logo from "../Logo";
import { auth, provider } from "../../firebase";
import "./login.css";
const loginUser = () => {
  setTimeout(() => {
    auth.signInWithPopup(provider).catch(alert);
  }, 1000);
};
const Login = () => {
  return (
    <div className="login">
      <Logo></Logo>
      <button className="login__btn" onClick={loginUser}>
        Sing in With Google
      </button>
    </div>
  );
};

export default Login;
