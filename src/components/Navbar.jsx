// src/components/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* شعار المطعم */}
        <Link className="navbar-brand fw-bold text-warning fs-4" to="/">
          🍔 Restaurant
        </Link>

        {/* روابط الصفحات - ظاهرة دائماً وبدون زر برجر */}
        <div className="d-flex align-items-center gap-3">
          <Link className="text-white text-decoration-none fw-semibold" to="/">
            Home
          </Link>
          <Link className="text-white text-decoration-none fw-semibold" to="/about">
            About
          </Link>
          <Link className="text-white text-decoration-none fw-semibold" to="/add-meal">
            Add Meal
          </Link>
          <Link className="text-white text-decoration-none fw-semibold" to="/reservations">
            Reservations
          </Link>
          <Link className="text-white text-decoration-none fw-semibold" to="/contact">
            Contact
          </Link>

          {/* زر السلة */}
          <span className="btn btn-outline-warning btn-sm position-relative ms-2">
            🛒 Cart
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;