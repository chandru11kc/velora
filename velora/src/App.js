import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Farmer from "./pages/Farmer";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FarmerProfile from "./pages/FarmerProfile";
import FarmerSetup from "./pages/FarmerSetup";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  // ✅ Load user on app start
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/farmer" element={<Farmer />} />

        {/* 🔥 Pass setUser to Login */}
        <Route path="/login" element={<Login setUser={setUser} />} />

        {/* ✅ Protected Cart */}
        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate to="/login" />}
        />

        <Route path="/farmer/:id" element={<FarmerProfile />} />
        <Route path="/farmer-setup" element={<FarmerSetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;