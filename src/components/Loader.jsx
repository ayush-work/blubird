import React from "react";
import Logo from "./Logo";
import { WindMillLoading } from "react-loadingg";
import "./loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <Logo></Logo>
      <WindMillLoading></WindMillLoading>
    </div>
  );
};

export default Loader;
