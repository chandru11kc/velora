import React, { useState } from "react";
import "./dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

 

  // 📦 PRODUCT STATE
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    quantity: "",
    type: "primary" // for filter system
  });

   // 🔐 ACCESS CONTROL
  if (!user || user.role !== "farmer") {
    return <h2 style={{ textAlign: "center" }}>🚫 Access Denied</h2>;
  }

  // ✏️ HANDLE INPUT
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // 🧠 AUTO UNIT LOGIC
  const getUnitByCategory = (category, name) => {
    const text = (category + " " + name).toLowerCase();

    if (text.includes("milk") || text.includes("oil")) {
      return "litre";
    }

    if (text.includes("egg")) {
      return "piece";
    }

    if (
      text.includes("powder") ||
      text.includes("masala") ||
      text.includes("turmeric") ||
      text.includes("chilli")
    ) {
      return "gram";
    }

    if (
      text.includes("biscuit") ||
      text.includes("jam") ||
      text.includes("snack")
    ) {
      return "packet";
    }

    return "kg"; // default
  };

  // ➕ ADD PRODUCT
  const handleAddProduct = () => {
    if (!product.name || !product.price || !product.quantity) {
      alert("Please fill all fields");
      return;
    }

    const unit = getUnitByCategory(product.category, product.name);

    const newProduct = {
      id: Date.now(),
      name: product.name,
      price: Number(product.price),
      image: product.image,
      category: product.category,
      quantity: Number(product.quantity),
      unit: unit, // ✅ AUTO
      farmerId: user.farmerId,
      type: product.type
    };

    const existing =
      JSON.parse(localStorage.getItem("products")) || [];

    localStorage.setItem(
      "products",
      JSON.stringify([...existing, newProduct])
    );

    alert(`✅ Product Added (${unit})`);

    // RESET FORM
    setProduct({
      name: "",
      price: "",
      image: "",
      category: "",
      quantity: "",
      type: "primary"
    });
  };

  // 📦 LOAD ORDERS
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  const farmerOrders = orders.filter((order) =>
    order.items.some(
      (item) => item.farmerId === user.farmerId
    )
  );

  return (
    <div className="dashboard">

      <h2>👨‍🌾 Farmer Dashboard</h2>

      {/* 🧾 ADD PRODUCT */}
      <div className="form-card">

        <h3>➕ Add Product</h3>

        <input
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category (Vegetables, Dairy...)"
          value={product.category}
          onChange={handleChange}
        />

        {/* 🔥 TYPE SELECT (for filter system) */}
        <select
          name="type"
          value={product.type}
          onChange={handleChange}
        >
          <option value="primary">Primary (Fresh)</option>
          <option value="secondary">Secondary (Processed)</option>
          <option value="tertiary">Tertiary (Value Added)</option>
        </select>

        <input
          name="quantity"
          type="number"
          min="1"
          placeholder="Quantity"
          value={product.quantity}
          onChange={handleChange}
        />

        <button onClick={handleAddProduct}>
          ➕ Add Product
        </button>

      </div>

      {/* 📦 ORDERS */}
      <div className="orders-section">

        <h3>📦 Orders Received</h3>

        {farmerOrders.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          farmerOrders.map((order) => (
            <div key={order.id} className="order-card">

              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>User:</strong> {order.user}</p>
              <p><strong>Date:</strong> {order.date}</p>

              <div className="order-items">
                {order.items
                  .filter(
                    (i) => i.farmerId === user.farmerId
                  )
                  .map((item) => (
                    <div key={item.id} className="order-item">
                      <p>{item.name}</p>
                      <p>
                        {item.qty} {item.unit}
                      </p>
                    </div>
                  ))}
              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Dashboard;