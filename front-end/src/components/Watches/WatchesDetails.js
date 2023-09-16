import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Details.css";

const API = process.env.REACT_APP_API;

function WatchDetails({ addToCart }) {
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

  const notify = () => {
    toast.success("Added to bag!", {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
      hideProgressBar: "true",
    });
  };

  const handleAddToCart = () => {
    addToCart(watch);
    notify()
  };

  return (
    <div className="product-container">
      <div className="image-container">
        <img src={watch.image} alt={watch.name}></img>
      </div>
      <div className="details-container">
        <h2>{watch.name}</h2>
        <hr></hr>
        <h3>Description & Details</h3>
        <p className="description">{watch.description}</p>
        {watch.details && (
          <ul>
            {watch.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        )}
        <button className="addToCart-btn" onClick={handleAddToCart}>
          {" "}
          <span>{watch.price}</span>
        </button>
      </div>
    </div>
  );
}

export default WatchDetails;
