import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Details.css";

const API = process.env.REACT_APP_API;

function BraceletDetails({ addToCart }) {
  const [bracelet, setBracelet] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/bracelets/${id}`)
      .then((res) => {
        setBracelet(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [id]);

  const notify = () => {
    toast.success("Added to bag!", {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
      hideProgressBar: "true",
    });
  };

  const handleAddToCart = () => {
    addToCart(bracelet);
    notify()
  };

  return (
    <div className="product-container">
      <div className="image-container">
        <img src={bracelet.image} alt={bracelet.name}></img>
      </div>
      <div className="details-container">
        <h2>{bracelet.name}</h2>
        <hr></hr>
        <h3>Description & Details</h3>
        <p className="description">{bracelet.description}</p>
        {bracelet.details && (
          <ul>
            {bracelet.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        )}
        <button className="addToCart-btn" onClick={handleAddToCart}>
          {" "}
          <span>{bracelet.price}</span>
        </button>
      </div>
    </div>
  );
}

export default BraceletDetails;
