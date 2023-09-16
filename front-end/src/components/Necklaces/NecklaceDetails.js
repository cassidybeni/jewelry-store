import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import "../Details.css";

const API = process.env.REACT_APP_API;

function NecklaceDetails({ addToCart }) {
  const [necklace, setNecklace] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/necklaces/${id}`)
      .then((res) => {
        setNecklace(res.data);
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
    addToCart(necklace);
    notify()
  };

  return (
    <div className="product-container">
      <div className="image-container">
        <img src={necklace.image} alt={necklace.name}></img>
      </div>
      <div className="details-container">
        <h2>{necklace.name}</h2>
        <hr></hr>
        <h3>Description & Details</h3>
        <p className="description">{necklace.description}</p>
        {necklace.details && (
          <ul>
            {necklace.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        )}
        <button className="addToCart-btn" onClick={handleAddToCart}>
          {" "}
          <span>{necklace.price}</span>
        </button>
      </div>
    </div>
  );
}

export default NecklaceDetails;
