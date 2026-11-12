// src/App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import initialData from "./data";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import AddMeal from "./pages/AddMeal";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";
import MealDetails from "./pages/MealDetails";

function App() {
  const [meals, setMeals] = useState(initialData);
  const [cart, setCart] = useState([]);

  const handleDeleteMeal = (id) => {
    setMeals((prev) => prev.filter((meal) => meal.id !== id));
  };

  const handleAddMeal = (newMeal) => {
    setMeals((prev) => [newMeal, ...prev]);
  };

  const handleAddToCart = (meal) => {
    setCart((prev) => [...prev, meal]);
    alert(`${meal.title} added to cart!`);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <div className="container py-4">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                meals={meals} 
                onDeleteMeal={handleDeleteMeal} 
                onAddToCart={handleAddToCart} 
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route 
            path="/add-meal" 
            element={<AddMeal onAddMeal={handleAddMeal} />} 
          />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/details" 
            element={<MealDetails onAddToCart={handleAddToCart} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;