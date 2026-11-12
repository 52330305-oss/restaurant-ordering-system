// src/pages/MealDetails.jsx

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MealDetails({ onAddToCart }) {
  const location = useLocation();
  const navigate = useNavigate();
  const meal = location.state?.meal;

  if (!meal) {
    return (
      <div className="container text-center py-5">
        <h4>No meal details available!</h4>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
        &larr; Back to Menu
      </button>
      <div className="row bg-white p-4 rounded shadow-sm align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={meal.image}
            alt={meal.title}
            className="img-fluid rounded"
            style={{ maxHeight: "350px", objectFit: "contain", width: "100%" }}
          />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h2 className="fw-bold mb-3">{meal.title}</h2>
          <h3 className="text-success fw-bold mb-3">${meal.price}</h3>
          <p className="lead text-secondary mb-4">{meal.description}</p>
          <button
            className="btn btn-success btn-lg px-4"
            onClick={() => onAddToCart(meal)}
          >
            🛒 Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MealDetails;