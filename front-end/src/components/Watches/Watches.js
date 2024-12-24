import React from "react";
import { useEffect, useState } from "react";
import Watch from "./Watch";
import LoadingData from "../LoadingData/LoadingData";
import axios from "axios";

const API = process.env.REACT_APP_API;

function Watches() {
  const [watch, setWatch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/watches`)
      .then((res) => {
        setWatch(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="cards-container">
      {isLoading ? (
        <LoadingData />
      ) : (
        watch.map((watch, id) => (
          <Watch key={watch.id} watch={watch} index={id} />
        ))
      )}
    </div>
  );
}

export default Watches;
