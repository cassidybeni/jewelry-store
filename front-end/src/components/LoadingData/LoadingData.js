import React from "react";
import "./LoadingData.css"

function LoadingData() {
  return (
    <div className="data-container">
      <h3 className="data-heading">One moment, please...</h3>
      <p>HKI data is stored on a free cloud service which may lead to a 30-second response delay for the first request.</p>
    </div>
  );
}

export default LoadingData;