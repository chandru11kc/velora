import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./farmerSetup.css";

function FarmerSetup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    farmName: "",
    location: "",
    productType: "",
    landSize: "",
    quantity: "",
    price: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const newFarmer = {
    id: user.farmerId, // ✅ IMPORTANT LINK
    name: form.farmName,
    location: form.location,
    rating: 0,
    story: `We specialize in ${form.productType} farming.`
  };

  // Get existing farmers
  const existingFarmers =
    JSON.parse(localStorage.getItem("farmers")) || [];

  // Add new farmer
  const updatedFarmers = [...existingFarmers, newFarmer];

  // Save
  localStorage.setItem("farmers", JSON.stringify(updatedFarmers));

  alert("Profile Created!");

  navigate(`/farmer/${user.farmerId}`);
};

  return (
    <div className="setup-container">

      <h2>Farmer Setup</h2>

      <input
        name="farmName"
        placeholder="Farm Name"
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location"
        onChange={handleChange}
      />

      <input
        name="productType"
        placeholder="Product Type (Vegetables, Dairy...)"
        onChange={handleChange}
      />

      <input
        name="landSize"
        placeholder="Land Size (Acres)"
        onChange={handleChange}
      />

      <input
        name="quantity"
        placeholder="Available Quantity"
        onChange={handleChange}
      />

      <input
        name="price"
        placeholder="Expected Price"
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>
        Create Profile
      </button>

    </div>
  );
}

export default FarmerSetup;