import React from "react";
import gif from "../../assets/video.gif";
import NavBar from "../../components/NavBar/NavBar.js";
import "./Home.css";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="header-container">
        <img className="bottom-img" src={gif} alt="ice-box-gif"></img>
      </div>
    </div>
  );
}

export default Home;
