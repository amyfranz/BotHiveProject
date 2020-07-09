import React from "react";
import Main from "./Main/Main";
import Video from "./Video/Video";
import Nav from "./Nav/Nav";
import Info from "./Info/Info";
import AboutUs from "./AboutUs/AboutUs";
import Team from "./Team/Team";
import Newsletter from "./Newsletter/Newsletter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Video />
      <Info />
      <AboutUs />
      <Team />
      <Newsletter />
    </div>
  );
}

export default App;
