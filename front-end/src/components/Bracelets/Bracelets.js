import React from "react";
import { useEffect, useState } from "react";
import Bracelet from "./Bracelet";
import axios from 'axios'

const API = process.env.REACT_APP_API;

function Bracelets() {
  const [bracelets, setBracelets] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/bracelets`)
      .then((res) => setBracelets(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      {bracelets.map((bracelet, id) => {
        return <Bracelet key={bracelet.id} bracelet={bracelet} index={id} />;
      })}
    </div>
  );
}

export default Bracelets;
