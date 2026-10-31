import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const users = [
  {
    email: "user@gmail.com",
    password: "1111",
    role: "user"
  },
  {
    email: "farmer@gmail.com",
    password: "1234",
    role: "farmer",
    farmerId: "V-AURA-001"
  }
];

function Login() {
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const user = users.find(
      (u) =>
        u.email === email.trim() &&
        u.password === password.trim() &&
        u.role === role
    );

    if (!user) {
      alert("Invalid Email / Password / Role");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    navigate(user.role === "farmer" ? "/dashboard" : "/");
  };

  return (
    <div className="login-page">
      
      <div className="login-left">
        <h1>VELORA</h1>
        <p>Fresh from Farm to Your Door 🌿</p>
      </div>

      <div className="login-box">
        <h2>Welcome Back</h2>
        <p className="login-subtitle">Login to continue</p>

        <div className="login-role-switch">
          <button
            className={role === "user" ? "active" : ""}
            onClick={() => setRole("user")}
          >
            👤 User
          </button>
          <button
            className={role === "farmer" ? "active" : ""}
            onClick={() => setRole("farmer")}
          >
            👨‍🌾 Farmer
          </button>
        </div>

        <div className="login-input">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-input password">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "🙈" : "👁"}
          </span>
        </div>

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>

        <p className="login-hint">
          Demo: user@gmail.com / 1111
        </p>
      </div>
    </div>
  );
}

export default Login;