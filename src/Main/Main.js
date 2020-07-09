import React from "react";
import "./Bot.css";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <div>
        <h1>We</h1>
        <h1>Are</h1>
        <h1 className="comp-name">Bot-Hive</h1>
      </div>
      <div className="robo">
        <input type="checkbox" id="switch-button" />
        <label htmlFor="switch-button">
          <div className="switch"></div>
        </label>
        <div className="face"></div>
        <div className="head"></div>
        <input type="checkbox" id="fly-button" />
        <label htmlFor="fly-button">
          <div className="body"></div>
        </label>
        <div className="left"></div>
        <div className="right"></div>
        <div className="eye1"></div>
        <div className="eye2"></div>
        <div className="fly-wave">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div className="background"></div>
      </div>
    </div>
  );
}
