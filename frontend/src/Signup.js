import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bg from "./assets/login1.jpg";
import logo from "./assets/shishi.png";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    dob: "",
    address: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerUser = () => {
    console.log("Signup clicked", user); // 🔥 DEBUG

    // ✅ FRONTEND VALIDATION
    if (!user.name || !user.email || !user.password || !user.mobile || !user.dob || !user.address) {
      alert("Please fill all fields ❌");
      return;
    }

    axios.post("http://localhost:5000/api/signup", user)
      .then(res => {
        console.log(res.data);
        alert(res.data.message);
        navigate("/");
      })
      .catch(err => {
        console.log(err); // 🔥 DEBUG
        alert(err.response?.data?.message || "Error ❌");
      });
  };

  return (
    <div style={{
      height: "100vh",
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        width: "320px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
        textAlign: "center"
      }}>
        <img src={logo} alt="logo" style={{ width: "80px", marginBottom: "10px" }} />

        <h2>Create Account</h2>

        {/* ✅ CONTROLLED INPUTS */}
        <input name="name" value={user.name} placeholder="Full Name" onChange={handleChange} /><br/>
        <input name="email" value={user.email} placeholder="Email" onChange={handleChange} /><br/>
        <input name="password" value={user.password} type="password" placeholder="Password" onChange={handleChange} /><br/>
        <input name="mobile" value={user.mobile} placeholder="Mobile" onChange={handleChange} /><br/>
        <input name="dob" value={user.dob} type="date" onChange={handleChange} /><br/>
        <input name="address" value={user.address} placeholder="Address" onChange={handleChange} /><br/>

        {/* ✅ FIXED BUTTON */}
        <button
          type="button"
          onClick={registerUser}
          style={{
            marginTop: "10px",
            padding: "10px",
            width: "100%",
            background: "#6f42c1",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Signup
        </button>

        <p
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", color: "blue", marginTop: "10px" }}
        >
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

export default Signup;