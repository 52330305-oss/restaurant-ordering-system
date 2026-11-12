// src/pages/Cart.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Cart({ cart, onRemoveFromCart, onClearCart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price), 0);

  const handleCheckout = () => {
    setOrderPlaced(true);
    onClearCart();
  };

  if (orderPlaced) {
    return (
      <div className="text-center py-5">
        <div className="alert alert-success p-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
          <h3 className="fw-bold mb-3">✅ Order Placed Successfully!</h3>
          <p className="mb-4">Thank you for ordering from our restaurant. Your delicious meal is being prepared!</p>
          <Link to="/" className="btn btn-warning fw-bold">
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-3" style={{ maxWidth: "800px" }}>
      <h2 className="fw-bold mb-4 text-center">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center py-5 bg-light rounded shadow-sm">
          <h5 className="text-muted mb-3">Your cart is currently empty.</h5>
          <Link to="/" className="btn btn-warning fw-bold">
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="card shadow-sm border-0">
          <div className="card-body">
            {cart.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center border-bottom py-3"
              >
                <div className="d-flex align-items-center gap-3">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }}
                    />
                  )}
                  <div>
                    <h6 className="mb-1 fw-bold">{item.title}</h6>
                    <span className="text-success fw-semibold">${Number(item.price).toFixed(2)}</span>
                  </div>
                </div>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onRemoveFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="d-flex justify-content-between align-items-center mt-4 pt-2">
              <h4 className="fw-bold mb-0">Total: ${totalPrice.toFixed(2)}</h4>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary" onClick={onClearCart}>
                  Clear Cart
                </button>
                <button className="btn btn-success fw-bold px-4" onClick={handleCheckout}>
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;