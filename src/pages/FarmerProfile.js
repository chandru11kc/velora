import React from "react";
import { useParams } from "react-router-dom";
import { farmers, products } from "../data";

function FarmerProfile() {
  const { id } = useParams();

  const localFarmers =
    JSON.parse(localStorage.getItem("farmers")) || [];

  const allFarmers = [...farmers, ...localFarmers];

  const farmer = allFarmers.find((f) => f.id === id);

  const localProducts =
    JSON.parse(localStorage.getItem("products")) || [];

  const allProducts = [...products, ...localProducts];

  const farmerProducts = allProducts.filter(
    (p) => p.farmerId === id
  );

  if (!farmer) return <h2>Farmer not found</h2>;

  return (
    <div>
      <h1>{farmer.name}</h1>
      <p>ID: {farmer.id}</p>
      <p>{farmer.location}</p>

      <h2>Products</h2>

      {farmerProducts.map((p) => (
        <div key={p.id}>
          <img src={p.image} width="100" />
          <p>{p.name}</p>
          <p>₹{p.price} / kg</p>
          <p>{p.quantity} kg</p>
        </div>
      ))}
    </div>
  );
}

export default FarmerProfile;