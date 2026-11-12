// src/pages/Home.jsx

import React, { useState } from "react";
import Card from "../components/Card";

function Home({ meals, onDeleteMeal, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Pizza", "Pasta", "Burgers", "Appetizers", "Salads", "Mains", "Desserts", "Drinks"];

  // تصفية الوجبات بناءً على التصنيف المختار
  const filteredMeals = selectedCategory === "All"
    ? meals
    : meals.filter((meal) => meal.category === selectedCategory);

  return (
    <div>
      <h2 className="text-center fw-bold mb-3">Our Menu</h2>

      {/* أزرار الفئات - Filter Buttons */}
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn btn-sm ${
              selectedCategory === category
                ? "btn-warning fw-bold"
                : "btn-outline-dark"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* عرض الـ Cards المفلترة */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {filteredMeals.map((meal) => (
          <div className="col" key={meal.id}>
            <Card 
              meal={meal} 
              onDeleteMeal={onDeleteMeal} 
              onAddToCart={onAddToCart} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;