import React, { useState } from "react";
import { Link } from "react-router-dom";
import { farmers as staticFarmers } from "../data";
import "./farmer.css";

function Farmer() {
  const [search, setSearch] = useState("");

  // 🔥 Load dynamic farmers (from setup page)
  const localFarmers =
    JSON.parse(localStorage.getItem("farmers")) || [];

  const allFarmers = [...staticFarmers, ...localFarmers];

  // 🔍 SEARCH FILTER
  const filteredFarmers = allFarmers.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="farmer-container">
      <h1>👨‍🌾 Meet Our Farmers</h1>

      {/* 🔍 SEARCH */}
      <div className="farmer-search">
        <input
          type="text"
          placeholder="Search farmers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🧑‍🌾 FARMER GRID */}
      <div className="farmer-grid">
        {filteredFarmers.length === 0 ? (
          <h2>No farmers found 😢</h2>
        ) : (
          filteredFarmers.map((farmer) => (
            <div className="farmer-card" key={farmer.id}>
              
              <h2>{farmer.name}</h2>

              <p>📍 {farmer.location}</p>

              <p>⭐ {farmer.rating || "New"}</p>

              <p className="story">
                {farmer.story || "No story available"}
              </p>

              {/* 🔗 VIEW PROFILE */}
              <Link to={`/farmer/${farmer.id}`}>
                <button className="view-btn">
                  View Profile
                </button>
              </Link>

            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Farmer;