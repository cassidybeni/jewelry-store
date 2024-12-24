import React from "react";
import { useEffect, useState } from "react";
import Earring from "./Earring";
import LoadingData from "../LoadingData/LoadingData";
import axios from "axios";

const API = process.env.REACT_APP_API;

function Earrings() {
  const [earring, setEarring] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/earrings`)
      .then((res) => {
        setEarring(res.data);
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
        earring.map((earring, id) => (
          <Earring key={earring.id} earring={earring} index={id} />
        ))
      )}
    </div>
  );
}

export default Earrings;
