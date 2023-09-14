import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Details.css";

const API = process.env.REACT_APP_API;

function WatchesDetails() {
  const [watch, setWatch] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/watches/${id}`)
      .then((res) => {
        setWatch(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [id]);

  return (
    <div className="product-container">
      <div className="image-container">
        <img src={watch.image} alt={watch.name}></img>
      </div>
      <div className="details-container">
        <h2>{watch.name}</h2>
        <hr></hr>
        <h3>Description & Details</h3>
        <p>{watch.description}</p>
        {watch.details && (
          <ul>
            {watch.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        )}
        <button className="addToCart-btn">
          {" "}
          <span>{watch.price}</span>
        </button>
      </div>
    </div>
  );
}

export default WatchesDetails;
