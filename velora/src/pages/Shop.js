 import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products as staticProducts, farmers } from "../data";
import "./shop.css";

function Shop() {
  const [buyQty, setBuyQty] = useState({});
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const localProducts =
    JSON.parse(localStorage.getItem("products")) || [];

  const allProducts = [...staticProducts, ...localProducts];

  // 🔥 FILTER + SEARCH
  const filteredProducts = allProducts.filter((p) => {
    const matchFilter = filter === "all" || p.type === filter;
    const matchSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  // 🛒 ADD TO CART
  const handleAddToCart = (product) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first!");
      return;
    }

    const qty = Number(buyQty[product.id] || 1);

    if (qty <= 0) return alert("Enter valid quantity!");

    if (qty > product.quantity)
      return alert("Not enough stock!");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ ...product, qty });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart ✅");

    setBuyQty({ ...buyQty, [product.id]: "" });
  };

  return (
    <div className="shop-container">
      <h1>🌿 Fresh from Farm</h1>

      {/* 🔍 SEARCH */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🌿 FILTER */}
      <div className="filter-container">
        {["all", "primary", "secondary", "tertiary"].map((f) => (
          <div
            key={f}
            className={`filter-card ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </div>
        ))}
      </div>

      {/* 🛍 PRODUCTS */}
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <h2 className="no-products">No products 😢</h2>
        ) : (
          filteredProducts.map((product) => {
            const farmer = farmers.find(
              (f) => f.id === product.farmerId
            );

            return (
              <div className="product-card" key={product.id}>
                <div className="image-wrapper">
                  <img src={product.image} alt={product.name} />
                </div>

                <span className={`tag ${product.type}`}>
                  {product.type}
                </span>

                <h3>{product.name}</h3>

                <p className="price">
                  ₹{product.price} / {product.unit || "kg"}
                </p>

                <p className="farmer">
                  By{" "}
                  {farmer ? (
                    <Link
                      to={`/farmer/${farmer.id}`}
                      className="farmer-link"
                    >
                      {farmer.name}
                    </Link>
                  ) : (
                    "Local Farmer"
                  )}
                </p>

                <p className="stock">
                  {product.quantity} {product.unit || "kg"} available
                </p>

                {/* 🔢 QTY INPUT */}
                <input
                  type="number"
                  min="1"
                  step={
                    product.unit === "kg" ||
                    product.unit === "liter"
                      ? "0.5"
                      : "1"
                  }
                  placeholder={`Enter ${product.unit}`}
                  value={buyQty[product.id] || ""}
                  onChange={(e) =>
                    setBuyQty({
                      ...buyQty,
                      [product.id]: e.target.value
                    })
                  }
                />

                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={product.quantity === 0}
                >
                  {product.quantity === 0
                    ? "Out of Stock"
                    : "Add to Cart"}
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Shop; 