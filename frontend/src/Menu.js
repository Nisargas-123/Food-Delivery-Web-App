import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  useParams,
  useNavigate,
  useLocation
} from "react-router-dom";
import { CartContext } from "./CartContext";
import biryaniImg from "./assets/chicken-biryani.jpg";
import butterChickenImg from "./assets/butter-chicken.jpg";
import chickenCurryImg from "./assets/chicken-curry.jpg";
import chickenTikkaImg from "./assets/chicken-tikka.jpg";
import grilledChickenImg from "./assets/grilled-chicken.jpg";
import chickenKebabImg from "./assets/chicken-kebab.jpg";
import chilliChickenImg from "./assets/chilli-chicken.jpg";
import chickenFryImg from "./assets/chicken-fry.jpg";
import garlicChickenImg from "./assets/garlic-chicken.jpg";
import chickenMasalaImg from "./assets/chicken-masala.jpg";

import margheritaPizzaImg from "./assets/margherita-pizza.jpg";
import farmhousePizzaImg from "./assets/farmhouse-pizza.jpg";
import paneerPizzaImg from "./assets/paneer-pizza.jpg";
import vegSupremePizzaImg from "./assets/veggie-pizza.jpg";
import bbqChickenPizzaImg from "./assets/bbq-chicken-pizza.jpg";
import pepperoniPizzaImg from "./assets/pepperoni-pizza.jpg";
import cheeseBurstPizzaImg from "./assets/cheese-burst-pizza.jpg";
import garlicBreadImg from "./assets/garlic-bread.jpg";
import frenchFriesImg from "./assets/french-fries.jpg";
import pizzaComboImg from "./assets/pizza-combo.jpg";

import chickenBurgerImg from "./assets/chicken-burger.jpg";
import vegBurgerImg from "./assets/veg-burger.jpg";
import cheeseBurgerImg from "./assets/cheese-burger.jpg";
import doublePattyBurgerImg from "./assets/double-patty-burger.jpg";
import paneerBurgerImg from "./assets/paneer-burger.jpg";
import spicyBurgerImg from "./assets/spicy-burger.jpg";
import bbqBurgerImg from "./assets/bbq-burger.jpg";
import classicBurgerImg from "./assets/classic-burger.jpg";
import loadedBurgerImg from "./assets/loaded-burger.jpg";
import crunchyBurgerImg from "./assets/crunchy-burger.jpg";
import burgerComboImg from "./assets/burger-combo.jpg";
import cheeseFriesImg from "./assets/cheese-fries.jpg";
import milkshakeImg from "./assets/milkshakes.jpg";
import coldCoffeeImg from "./assets/cold-coffee.jpg";

import chocolateCakeImg from "./assets/chocolate-cake.jpg";
import blackForestCakeImg from "./assets/black-forest-cake.jpg";
import redVelvetCakeImg from "./assets/red-velvet-cake.jpg";
import vanillaCakeImg from "./assets/vanilla-cake.jpg";
import strawberryCakeImg from "./assets/strawberry-cake.jpg";
import chocolateCupcakeImg from "./assets/chocolate-cupcake.jpg";
import vanillaCupcakeImg from "./assets/vanilla-cupcake.jpg";
import cheesecakeImg from "./assets/cheesecake.jpg";
import brownieImg from "./assets/brownie.jpg";
import cakeSliceImg from "./assets/cake-slice.jpg";

import chickenRollImg from "./assets/chicken-roll.jpg";
import vegRollImg from "./assets/veg-roll.jpg";
import paneerRollImg from "./assets/paneer-roll.jpg";
import eggRollImg from "./assets/egg-roll.jpg";
import chickenKathiRollImg from "./assets/chicken-kathi-roll.jpg";
import doubleChickenRollImg from "./assets/double-chicken-roll.jpg";
import cheeseRollImg from "./assets/cheese-roll.jpg";
import spicyRollImg from "./assets/spicy-roll.jpg";
import rollComboImg from "./assets/rolls-combo.jpg";
import miniRollsPackImg from "./assets/mini-roll-pack.jpg";

import masalaDosaImg from "./assets/masala-dosa.jpg";
import plainDosaImg from "./assets/plain-dosa.jpg";
import neerDosaImg from "./assets/neer-dosa.jpg";
import ravaDosaImg from "./assets/rava-dosa.jpg";
import setDosaImg from "./assets/set-dosa.jpg";
import paperDosaImg from "./assets/paper-dosa.jpg";
import butterDosaImg from "./assets/butter-dosa.jpg";
import idliSambarImg from "./assets/idli-sambar.jpg";
import vadaImg from "./assets/vada.jpg";
import paneerButterMasalaImg from "./assets/paneer-butter-masala.jpg";
import vegBiryaniImg from "./assets/veg-biryani.jpg";
import choleBhatureImg from "./assets/chole-bhature.jpg";
import palakPaneerImg from "./assets/palak-paneer.jpg";
import vegFriedRiceImg from "./assets/veg-fried-rice.jpg";
import paneerTikkaImg from "./assets/paneer-tikka.jpg";


import lassiImg from "./assets/lassi.jpg";
import freshLimeSodaImg from "./assets/fresh-lime-soda.jpg";

import teaImg from "./assets/tea.jpg";
import mangoJuiceImg from "./assets/mango-juice.jpg";
import orangeJuiceImg from "./assets/orange-juice.jpg";


import gulabJamunImg from "./assets/gulab-jamun.jpg";
import iceCreamImg from "./assets/ice-cream.jpg";

import cupcakeImg from "./assets/cupcake.jpg";
import rasgullaImg from "./assets/rasgulla.jpg";
function Menu() {
  const { category, name } = useParams();
  const decodedName = decodeURIComponent(name || "");

  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [toast, setToast] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const filter =
  location.state?.filter?.toLowerCase();


  const imageMap = {
  "Chicken Biryani": biryaniImg,
  "Butter Chicken": butterChickenImg,
  "Chicken Curry": chickenCurryImg,
  "Chicken Tikka": chickenTikkaImg,
  "Grilled Chicken": grilledChickenImg,
  "Chicken Kebab": chickenKebabImg,
  "Chilli Chicken": chilliChickenImg,
  "Chicken Fry": chickenFryImg,
  "Garlic Chicken": garlicChickenImg,
  "Chicken Masala": chickenMasalaImg,

  "Margherita Pizza": margheritaPizzaImg,
  "Farmhouse Pizza": farmhousePizzaImg,
  "Paneer Pizza": paneerPizzaImg,
  "Veg Supreme Pizza": vegSupremePizzaImg,
  "BBQ Chicken Pizza": bbqChickenPizzaImg,
  "Pepperoni Pizza": pepperoniPizzaImg,
  "Cheese Burst Pizza": cheeseBurstPizzaImg,
  "Garlic Bread": garlicBreadImg,
  "French Fries": frenchFriesImg,
  "Pizza Combo": pizzaComboImg,

  "Chicken Burger": chickenBurgerImg,
  "Veg Burger": vegBurgerImg,
  "Cheese Burger": cheeseBurgerImg,
  "Double Patty Burger": doublePattyBurgerImg,
  "Paneer Burger": paneerBurgerImg,
  "Spicy Burger": spicyBurgerImg,
  "BBQ Burger": bbqBurgerImg,
  "Classic Burger": classicBurgerImg,
  "Loaded Burger": loadedBurgerImg,
  "Crunchy Burger": crunchyBurgerImg,
  "Burger Combo": burgerComboImg,
  "Cheese Fries": cheeseFriesImg,
  "Milkshake": milkshakeImg,
  "Cold Coffee": coldCoffeeImg,

  "Chocolate Cake": chocolateCakeImg,
  "Black Forest Cake": blackForestCakeImg,
  "Red Velvet Cake": redVelvetCakeImg,
  "Vanilla Cake": vanillaCakeImg,
  "Strawberry Cake": strawberryCakeImg,
  "Chocolate Cupcake": chocolateCupcakeImg,
  "Vanilla Cupcake": vanillaCupcakeImg,
  "Cheesecake": cheesecakeImg,
  "Brownie": brownieImg,
  "Cake Slice": cakeSliceImg,

  "Chicken Roll": chickenRollImg,
  "Veg Roll": vegRollImg,
  "Paneer Roll": paneerRollImg,
  "Egg Roll": eggRollImg,
  "Chicken Kathi Roll": chickenKathiRollImg,
  "Double Chicken Roll": doubleChickenRollImg,
  "Cheese Roll": cheeseRollImg,
  "Spicy Roll": spicyRollImg,
  "Roll Combo": rollComboImg,
  "Mini Rolls Pack": miniRollsPackImg,

  "Masala Dosa": masalaDosaImg,
  "Plain Dosa": plainDosaImg,
  "Neer Dosa": neerDosaImg,
  "Rava Dosa": ravaDosaImg,
  "Set Dosa": setDosaImg,
  "Paper Dosa": paperDosaImg,
  "Butter Dosa": butterDosaImg,
  "Idli Sambar": idliSambarImg,
  "Vada": vadaImg,
  "Paneer Butter Masala": paneerButterMasalaImg,
  "Veg Biryani": vegBiryaniImg,
  "Chole Bhature": choleBhatureImg,
  "Palak Paneer": palakPaneerImg,
  "Veg Fried Rice": vegFriedRiceImg,
  "Paneer Tikka": paneerTikkaImg,

 
  "Lassi": lassiImg,
  "Fresh Lime Soda": freshLimeSodaImg,
  
  "Tea": teaImg,
  "Mango Juice": mangoJuiceImg,
  "Orange Juice": orangeJuiceImg,

  
  "Gulab Jamun": gulabJamunImg,
  "Ice Cream": iceCreamImg,
  
  "Cupcake": cupcakeImg,
  
  "Rasgulla": rasgullaImg,
};

  // ✅ USE CONTEXT
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("http://localhost:5000/menu", {
      params: {
        category: category,
        restaurant: decodedName
      }
    })
    .then(res => {
      let filteredData = res.data;

if (filter === "veg") {

  filteredData = res.data.filter(item => {

    const name = item.name.toLowerCase();

    return (
      !name.includes("chicken") &&
      !name.includes("egg") &&
      !name.includes("pepperoni") &&
      !name.includes("bbq")
    );
  });
}

if (filter === "non-veg") {

  filteredData = res.data.filter(item => {

    const name = item.name.toLowerCase();

    return (
      name.includes("chicken") ||
      name.includes("pepperoni") ||
      name.includes("bbq")
    );
  });
}

if (filter === "egg") {

  filteredData = res.data.filter(item => {

    const name = item.name.toLowerCase();

    return name.includes("egg");

  });
}
setMenuItems(filteredData);
    })
    .catch(err => console.error(err));
  }, [category, decodedName, filter]);

  // 🛒 ADD TO CART (FIXED)
  const handleAddToCart = (item) => {
    addToCart(item);
    setToast(`${item.name} added 🛒`);
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>
  {decodedName} - {category} Menu 🍽️
</h2>

{filter && filter !== "all" && (
  <p style={{
    textAlign: "center",
    color: "#6f42c1",
    fontWeight: "bold",
    marginBottom: "20px"
  }}>
    Showing: {filter.toUpperCase()} Items
  </p>
)}

      {menuItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>No items found ❌</p>
      ) : (
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center"
        }}>
          {menuItems.map(item => (
            <div
              key={item._id}
              onClick={() => setSelectedItem(item)}
              style={{
                width: "220px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                cursor: "pointer"
              }}
            >
              <img
                src={imageMap[item.image] || item.image}
                alt={item.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />

              <div style={{ padding: "10px", textAlign: "center" }}>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* POPUP */}
      {selectedItem && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            width: "350px",
            textAlign: "center"
          }}>
            <img src={imageMap[selectedItem.image] || selectedItem.image} alt={selectedItem.name} style={{ width: "100%", height: "180px" }} />

            <h2>{selectedItem.name}</h2>
            <p>{selectedItem.description}</p>
            <h3>₹{selectedItem.price}</h3>

            <button onClick={() => handleAddToCart(selectedItem)}>
              Add to Cart
            </button>

            <br />

            <button onClick={() => setSelectedItem(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {toast && (
        <div style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#6f42c1",
          color: "white",
          padding: "10px 20px",
          borderRadius: "10px"
        }}>
          {toast}
        </div>
      )}

      <button onClick={() => navigate(-1)}>
        ⬅ Back
      </button>
    </div>
  );
}

export default Menu;