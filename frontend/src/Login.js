import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import logo from "./assets/shishi.png";
import bg from "./assets/login-background.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    axios.post("http://localhost:5000/api/login", { email, password })
      .then(res => {
        if (res.data.user && res.data.token) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("token", res.data.token);
          navigate("/splash");
        } else {
          alert(res.data.message || "Login failed");
        }
      })
      .catch(err => {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert("Server error");
        }
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <img src={logo} alt="App Logo" style={styles.logo} />

        <h2 style={styles.title}>Sign In</h2>
        <p style={styles.subtitle}>Access your account</p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={loginUser} style={styles.button}>
          Login
        </button>

        <p
          onClick={() => navigate("/signup")}
          style={styles.signup}
        >
          Don’t have an account? <span style={styles.link}>Create one</span>
        </p>

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${bg})`, // ✅ background image applied
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },

  card: {
    width: "360px",
    padding: "40px",
    background: "rgba(255, 255, 255, 0.9)", // 🔥 glass effect
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    textAlign: "center"
  },

  logo: {
    width: "80px",
    marginBottom: "15px"
  },

  title: {
    marginBottom: "5px",
    fontWeight: "600"
  },

  subtitle: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "25px"
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    outline: "none"
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#6f42c1",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer"
  },

  signup: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#666",
    cursor: "pointer"
  },

  link: {
    color: "#6f42c1",
    fontWeight: "500"
  }
};

export default Login;