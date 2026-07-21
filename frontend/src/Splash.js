import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/shishi.png";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>

      <img src={logo} alt="logo" style={styles.logo} />

      <h1 style={styles.title}>Food Rush</h1>

      {/* ✅ NEW WELCOME LINE */}
      <p style={styles.welcome}>
        Welcome back. Your next meal is just moments away.
      </p>

      <p style={styles.subtitle}>
        Discover quality food from trusted restaurants
      </p>

      <div style={styles.loader}></div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #6f42c1, #9c27b0)",
    color: "white",
    textAlign: "center"
  },

  logo: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    background: "white",
    padding: "12px",
    marginBottom: "15px"
  },

  title: {
    margin: "5px 0",
    fontWeight: "600"
  },

  welcome: {
    fontSize: "14px",
    opacity: 0.9,
    marginTop: "5px",
    fontWeight: "400"
  },

  subtitle: {
    fontSize: "13px",
    marginBottom: "25px",
    color: "#e0e0e0"
  },

  loader: {
    width: "40px",
    height: "40px",
    border: "4px solid rgba(255,255,255,0.3)",
    borderTop: "4px solid white",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  }
};

export default Splash;