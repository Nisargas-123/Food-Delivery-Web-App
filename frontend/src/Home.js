import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import logo from "./assets/shishi.png";
import bg from "./assets/background.png";
import pizzaImg from "./assets/pizza.jpg";
import burgerImg from "./assets/burger.jpg";
import chickenImg from "./assets/chicken.jpg";
import cakeImg from "./assets/cake.jpg";
import rollsImg from "./assets/rolls.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [filter, setFilter] = useState("all");
  const [showFilter, setShowFilter] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const searchRef = useRef();
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const firstLetter = storedUser?.name?.charAt(0)?.toUpperCase() || "U";

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");
  }, [navigate]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  // 🔥 SEARCH API
  useEffect(() => {
    const delay = setTimeout(() => {
      if (!search.trim()) {
        setSuggestions([]);
        return;
      }

      axios.get("http://localhost:5000/search", {
        params: { q: search }
      })
      .then(res => setSuggestions(res.data))
      .catch(err => console.log(err));

    }, 300);

    return () => clearTimeout(delay);
  }, [search]);

  // ❌ CLOSE DROPDOWN
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const categories = [
    { name: "Pizza", image: pizzaImg, type: ["veg", "non-veg"] },
    { name: "Burger", image: burgerImg, type: ["veg", "non-veg"] },
    { name: "Chicken", image: chickenImg, type: ["non-veg"] },
    { name: "Cake", image: cakeImg, type: ["veg", "egg"] },
    { name: "Rolls", image: rollsImg, type: ["veg", "non-veg", "egg"] }
  ];

  return (
    <div style={{ background: "#f4f6f8", minHeight: "100vh" }}>

      {/* NAVBAR */}
      <div style={styles.navbar}>

        <div style={styles.left}>
          <div style={styles.avatar} onClick={() => navigate("/profile")}>
            {firstLetter}
          </div>
        </div>

        {/* SEARCH */}
        <div ref={searchRef} style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search food"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.search}
          />

          {/* DROPDOWN */}
          {suggestions.length > 0 && (
            <div style={styles.searchDropdown}>
              {suggestions.map((item, index) => (
                <div
                  key={index}
                  style={styles.dropdownItem}
                  onClick={() => {
                    navigate(`/menu/${item.category}/${encodeURIComponent(item.restaurant)}`);
                    setSearch("");
                    setSuggestions([]);
                  }}
                >
                  {item.name} — {item.restaurant}
                </div>
              ))}
            </div>
          )}

          {/* NO RESULT */}
          {search && suggestions.length === 0 && (
            <div style={styles.searchDropdown}>
              <div style={styles.dropdownItem}>No results found</div>
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <span onClick={() => navigate("/cart")}>
            Cart ({cartCount})
          </span>

          <div style={{ position: "relative" }}>
            <button onClick={() => setShowFilter(!showFilter)}>
              Filter
            </button>

            {showFilter && (
              <div style={styles.dropdown}>
                <div onClick={() => setFilter("all")}>All</div>
                <div onClick={() => setFilter("veg")}>Veg</div>
                <div onClick={() => setFilter("non-veg")}>Non-Veg</div>
                <div onClick={() => setFilter("egg")}>Egg</div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* HERO */}
      <div style={{ backgroundImage: `url(${bg})`, ...styles.hero }}>
        <img src={logo} alt="logo" style={styles.heroLogo} />
        <h2 style={styles.heroText}>Discover food you love</h2>
      </div>

      {/* CATEGORIES */}
      <h2 style={styles.title}>Categories</h2>

      <div style={styles.grid}>
        {categories
          .filter(item =>
            (filter === "all" || item.type.includes(filter)) // ✅ FIXED HERE
          )
          .map((item, index) => (
            <div
              key={index}
              style={styles.card}
              onClick={() =>
  navigate(
  `/restaurants/${item.name}`,
  {
    state: { filter }
  }
)
}
            >
              <img src={item.image} alt={item.name} style={styles.circle} />
              <p>{item.name}</p>
            </div>
          ))}
      </div>

    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
  },

  left: { display: "flex", alignItems: "center" },

  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#6f42c1",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    cursor: "pointer"
  },

  search: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    width: "250px"
  },

  searchDropdown: {
    position: "absolute",
    top: "40px",
    width: "100%",
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    zIndex: 1000
  },

  dropdownItem: {
    padding: "10px",
    borderBottom: "1px solid #eee",
    cursor: "pointer"
  },

  right: {
    display: "flex",
    gap: "15px",
    alignItems: "center"
  },

  dropdown: {
    position: "absolute",
    top: "35px",
    right: 0,
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    padding: "10px"
  },

  hero: {
    height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  heroLogo: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "white",
    padding: "10px",
    marginBottom: "10px"
  },

  heroText: {
    color: "white",
    fontSize: "32px",
    fontWeight: "600"
  },

  title: {
    textAlign: "center",
    margin: "30px 0"
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap"
  },

  card: { textAlign: "center", cursor: "pointer" },

  circle: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  }
};

export default Home;