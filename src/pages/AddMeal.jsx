// src/pages/AddMeal.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMeal({ onAddMeal }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !description || !image) {
      alert("Please fill in all fields!");
      return;
    }

    const newMeal = {
      id: Date.now(),
      title,
      price: parseFloat(price),
      description,
      image,
    };

    onAddMeal(newMeal);
    navigate("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 bg-white p-4 rounded shadow-sm">
        <h2 className="fw-bold text-center mb-4">Add New Meal</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Meal Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Chicken Burger"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Price ($)</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              placeholder="e.g. 12.99"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Image URL</label>
            <input
              type="url"
              className="form-control"
              placeholder="https://..."
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Description</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Meal details..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-warning w-100 fw-bold">
            Add Meal
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMeal;