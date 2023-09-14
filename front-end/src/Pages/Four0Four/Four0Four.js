import React from "react";
import backgroundImg from "../../assets/404-image.jpg";
import NavBar from "../../components/NavBar/NavBar";
import "./Four0Four.css";

function Four0Four() {
  return (
    <div className="Four0Four-page">
      <NavBar></NavBar>
      <div className="heading-container">
        <h1 className="heading">404 - Page Not Found</h1>
        <img className="Four0Four-img" alt="" src={backgroundImg}></img>
      </div>
    </div>
  );
}

export default Four0Four;
