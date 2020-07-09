import React from "react";
import Logo from "../assets/Logo.png";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <img src={Logo} alt="logo" />
    </div>
  );
}
