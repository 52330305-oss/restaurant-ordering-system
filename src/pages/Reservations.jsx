// src/pages/Reservations.jsx

import React, { useState } from "react";

function Reservations() {
  const [submitted, setSubmitted] = useState(false);

  const handleReserve = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 bg-white p-4 rounded shadow-sm">
        <h2 className="fw-bold text-center mb-4 text-warning">Table Reservation</h2>
        {submitted ? (
          <div className="alert alert-success text-center">
            Your table reservation has been submitted successfully!
          </div>
        ) : (
          <form onSubmit={handleReserve}>
            <div className="mb-3">
              <label className="form-label fw-bold">Your Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Date & Time</label>
              <input type="datetime-local" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Number of Guests</label>
              <input type="number" min="1" max="20" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-warning w-100 fw-bold">
              Reserve Table
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Reservations;