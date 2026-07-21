import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");

  let parsedUser = null;
  try {
    parsedUser = storedUser ? JSON.parse(storedUser) : null;
  } catch {
    parsedUser = null;
  }

  const [user, setUser] = useState(parsedUser);
  const [activeSection, setActiveSection] = useState("menu");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setActiveSection("menu");
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const firstLetter = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <div style={styles.container}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.avatar}>{firstLetter}</div>
        <div>
          <h3 style={{ margin: 0 }}>{user?.name}</h3>
          <p style={{ margin: 0, color: "#ccc" }}>{user?.email}</p>
        </div>
      </div>

      {/* CARD */}
      <div style={styles.card}>

        {/* MENU */}
        {activeSection === "menu" && (
          <>
            <Option text="Edit Profile" onClick={() => setActiveSection("edit")} />
            <Option text="Your Orders" onClick={() => navigate("/orders")} />
            <Option text="Settings" onClick={() => setActiveSection("settings")} />
            <Option text="Accessibility" onClick={() => setActiveSection("access")} />
            <Option text="Contact Support" onClick={() => alert("support@foodrush.com")} />
            <Option text="About" onClick={() => alert("Food Rush v1.0")} />
            <Option text="Logout" onClick={logout} danger />
          </>
        )}

        {/* EDIT PROFILE */}
        {activeSection === "edit" && (
          <>
            <h3>Edit Profile</h3>

            <input
              name="name"
              value={user?.name || ""}
              onChange={handleChange}
              placeholder="Name"
              style={styles.input}
            />

            <input
              name="mobile"
              value={user?.mobile || ""}
              onChange={handleChange}
              placeholder="Mobile"
              style={styles.input}
            />

            <input
              name="dob"
              type="date"
              value={user?.dob || ""}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              name="address"
              value={user?.address || ""}
              onChange={handleChange}
              placeholder="Address"
              style={styles.input}
            />

            <button style={styles.primaryBtn} onClick={saveChanges}>
              Save
            </button>

            <button
              style={styles.secondaryBtn}
              onClick={() => setActiveSection("menu")}
            >
              Cancel
            </button>
          </>
        )}

        {/* SETTINGS */}
        {activeSection === "settings" && (
          <>
            <h3>Settings</h3>
            <Option text="Account Settings" onClick={() => setActiveSection("account")} />
            <button
              style={styles.secondaryBtn}
              onClick={() => setActiveSection("menu")}
            >
              Back
            </button>
          </>
        )}

        {/* ACCOUNT */}
        {activeSection === "account" && (
          <>
            <h3>Account Settings</h3>
            <Option text="Edit Profile" onClick={() => setActiveSection("edit")} />
            <Option text="Delete Account" onClick={() => alert("Account deleted")} danger />
            <button
              style={styles.secondaryBtn}
              onClick={() => setActiveSection("settings")}
            >
              Back
            </button>
          </>
        )}

        {/* ACCESSIBILITY */}
        {activeSection === "access" && (
          <>
            <h3>Accessibility</h3>

            <label style={styles.checkbox}>
              <input type="checkbox" /> Vision Assistance
            </label>

            <label style={styles.checkbox}>
              <input type="checkbox" /> Hearing Assistance
            </label>

            <label style={styles.checkbox}>
              <input type="checkbox" /> Mobility Assistance
            </label>

            <button
              style={styles.secondaryBtn}
              onClick={() => setActiveSection("menu")}
            >
              Back
            </button>
          </>
        )}

      </div>
    </div>
  );
}

// OPTION COMPONENT
function Option({ text, onClick, danger }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "14px",
        borderBottom: "1px solid #eee",
        cursor: "pointer",
        color: danger ? "#d32f2f" : "#333",
        fontWeight: "500"
      }}
    >
      {text}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f4f6f8",
    padding: "20px"
  },

  header: {
    background: "#6f42c1",
    color: "white",
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },

  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "white",
    color: "#6f42c1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: "bold"
  },

  card: {
    background: "white",
    marginTop: "20px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd"
  },

  primaryBtn: {
    width: "100%",
    padding: "12px",
    background: "#6f42c1",
    color: "white",
    border: "none",
    borderRadius: "8px",
    marginTop: "10px",
    cursor: "pointer"
  },

  secondaryBtn: {
    width: "100%",
    padding: "12px",
    background: "#eee",
    border: "none",
    borderRadius: "8px",
    marginTop: "10px",
    cursor: "pointer"
  },

  checkbox: {
    display: "block",
    margin: "10px 0"
  }
};

export default Profile;