import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../Details.css";

const API = process.env.REACT_APP_API;

function RingsDetails({ addToCart }) {
  const [ring, setRing] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/rings/${id}`)
      .then((res) => {
        setRing(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [id]);

  const notify = () => {
    toast.success("Added to bag!", {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
      hideProgressBar: "true",
    });
  };

  const handleAddToCart = () => {
    addToCart(ring);
    notify();
  };

  return (
    <div className="product-container">
      <div className="image-container">
        <img src={ring.image} alt={ring.name}></img>
      </div>
      <div className="details-container">
        <h2>{ring.name}</h2>
        <hr></hr>
        <h3>Description & Details</h3>
        <p className="description">{ring.description}</p>
        {ring.details && (
          <ul>
            {ring.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        )}
        <button className="addToCart-btn" onClick={handleAddToCart}>
          {" "}
          <span>{ring.price}</span>
        </button>
      </div>
    </div>
  );
}

export default RingsDetails;
