// src/pages/Contact.jsx

import React, { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 bg-white p-4 rounded shadow-sm">
        <h2 className="fw-bold text-center mb-4 text-warning">Contact Us</h2>
        {sent ? (
          <div className="alert alert-success text-center">
            Thank you for reaching out! We will reply soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Message</label>
              <textarea className="form-control" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-warning w-100 fw-bold">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;