import React from "react";
import { useEffect, useState } from "react";
import Ring from "./Ring";
import LoadingData from "../LoadingData/LoadingData";
import axios from "axios";
import "../List.css"

const API = process.env.REACT_APP_API;

function Rings() {
  const [ring, setRing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/rings`)
      .then((res) => {
        setRing(res.data);
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
        ring.map((ring, id) => <Ring key={ring.id} ring={ring} index={id} />)
      )}
    </div>
  );
}

export default Rings;
