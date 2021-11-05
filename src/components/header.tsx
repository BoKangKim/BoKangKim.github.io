import React from "react";
import logo from "../assets/img/logo.png";
export const Header = ({ title }: any) => {
  return (
    <header id="header">
      <img src={logo} className="logo"></img>
      <span className="title">
        <h1>BK's blog</h1>
        <p>Programming & Tech</p>
      </span>
    </header>
  );
};
