import React from "react";
import "./LoadingData.css"

function LoadingData() {
  return (
    <div className="data-container">
      <h3 className="data-heading">Just a moment, please...</h3>
      <p>HKI data is hosted on a free cloud web-service. This may cause a response delay of up to 30 seconds for the first request.</p>
    </div>
  );
}

export default LoadingData;