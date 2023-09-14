import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Details.css";

const API = process.env.REACT_APP_API;

function EarringDetails() {
  const [earring, setEarring] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/earrings/${id}`)
      .then((res) => {
        setEarring(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [id]);
  return (
    <div className="product-container">
      <div className="image-container">
        <img src={earring.image} alt={earring.name}></img>
      </div>
      <div className="details-container">
        <h2>{earring.name}</h2>
        <hr></hr>
        <h3>Description & Details</h3>
        <p>{earring.description}</p>
        {earring.details && (
          <ul>
            {earring.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        )}
        <button className="addToCart-btn">
          {" "}
          <span>{earring.price}</span>
        </button>
      </div>
    </div>
  );
}

export default EarringDetails;
