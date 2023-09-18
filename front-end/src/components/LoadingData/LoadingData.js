import React from "react";
import "./LoadingData.css"

function LoadingData() {
  return (
    <div className="data-container">
      <h3 className="data-heading">Hang tight...</h3>
      <p>
        Data from Hell's Kitchen Ice is hosted on a free cloud web service,
        which may result in an initial response delay of up to 30 seconds.
      </p>
    </div>
  );
}

export default LoadingData;