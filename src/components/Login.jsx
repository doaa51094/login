import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import logo from "../assets/logo.svg";

const Login = () => {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("12345678");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const uid = params.get("uid") || "defaultUID";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          email,
          password,
          uid,
        },
        {
          headers: {
            "X-secret-key": "OH2024",
          },
        }
      );

      const token = "one-hand1234";
      Cookies.set("token", token);

      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <h2>Log In</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="button-form">
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Log In"}
          </button>
        </div>
        {loading && (
          <div className="loader">
            <div className="spinner"></div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
