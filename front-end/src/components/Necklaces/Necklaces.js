import React from "react";
import { useEffect, useState } from "react";
import Necklace from "./Necklace";
import LoadingData from "../LoadingData/LoadingData";
import axios from "axios";

const API = process.env.REACT_APP_API;

function Necklaces() {
  const [necklace, setNecklace] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/necklaces`)
      .then((res) => {
        setNecklace(res.data);
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
        necklace.map((necklace, id) => (
          <Necklace key={necklace.id} necklace={necklace} index={id} />
        ))
      )}
    </div>
  );
}

export default Necklaces;
