import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Details.css";

const API = process.env.REACT_APP_API;

function EarringDetails({ addToCart }) {
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

  const notify = () => {
    toast.success("Added to bag!", {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
    });
  };

  const handleAddToCart = () => {
    addToCart(earring);
    notify()
  };

  return (
    <div className="product-container">
      <div className="image-container">
        <img src={earring.image} alt={earring.name}></img>
      </div>
      <div className="details-container">
        <h2>{earring.name}</h2>
        <hr></hr>
        <h3>Description & Details</h3>
        <p className="description">{earring.description}</p>
        {earring.details && (
          <ul>
            {earring.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        )}
        <button className="addToCart-btn" onClick={handleAddToCart}>
          {" "}
          <span>{earring.price}</span>
        </button>
      </div>
    </div>
  );
}

export default EarringDetails;
