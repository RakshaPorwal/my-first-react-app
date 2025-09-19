import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (email === "admin@rural.com" && password === "admin123") {
      login({ name: "Admin", email, role: "admin" });
      navigate("/upload");
    } else {
      alert("❌ Invalid admin credentials");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Admin Login</h2>
      <form className="col-md-6 mx-auto" onSubmit={handleAdminLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control"
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control"
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-dark w-100">Login as Admin</button>
      </form>
    </div>
  );
}

export default AdminLogin;
