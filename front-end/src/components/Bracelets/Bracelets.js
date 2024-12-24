import React from "react";
import { useEffect, useState } from "react";
import Bracelet from "./Bracelet";
import LoadingData from "../LoadingData/LoadingData";
import axios from "axios";

const API = process.env.REACT_APP_API;

function Bracelets() {
  const [bracelets, setBracelets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/bracelets`)
      .then((res) => {
        setBracelets(res.data);
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
        bracelets.map((bracelet, id) => (
          <Bracelet key={bracelet.id} bracelet={bracelet} index={id} />
        ))
      )}
    </div>
  );
}

export default Bracelets;
