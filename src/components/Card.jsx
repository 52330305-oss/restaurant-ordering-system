// src/components/Card.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ meal, onDeleteMeal, onAddToCart }) {
  const navigate = useNavigate();

  const handleOpenDetails = () => {
    navigate("/details", { state: { meal } });
  };

  return (
    <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
      <div 
        style={{ height: "220px", backgroundColor: "#f8f9fa", cursor: "pointer" }}
        onClick={handleOpenDetails}
        className="d-flex align-items-center justify-content-center p-2"
      >
        <img
          src={meal.image}
          alt={meal.title}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            width: "auto",
            height: "auto",
            objectFit: "cover",
            borderRadius: "6px"
          }}
        />
      </div>
      <div className="card-body d-flex flex-column p-3">
        <h5 
          className="card-title fw-bold text-dark text-truncate" 
          style={{ cursor: "pointer" }}
          onClick={handleOpenDetails}
        >
          {meal.title}
        </h5>
        <p className="card-text text-muted small flex-grow-1">
          {meal.description}
        </p>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="h5 fw-bold text-success mb-0">${meal.price}</span>
          <button 
            className="btn btn-sm btn-outline-secondary"
            onClick={handleOpenDetails}
          >
            🔍 View Details
          </button>
        </div>
        <div className="d-flex gap-2 pt-2 border-top">
          <button
            className="btn btn-danger btn-sm w-50"
            onClick={() => onDeleteMeal(meal.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-success btn-sm w-50"
            onClick={() => onAddToCart(meal)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;