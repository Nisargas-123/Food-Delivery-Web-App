import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

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

function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart ❌</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "15px",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                background: "white"
              }}
            >
              {/* IMAGE */}
              <img
                src={imageMap[item.name] || item.image}
                alt={item.name}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />

              {/* DETAILS */}
              <div style={{ flex: 1 }}>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                {/* QUANTITY */}
                <div>
                  <button onClick={() => decreaseQty(item._id)}>-</button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button onClick={() => increaseQty(item._id)}>+</button>
                </div>
              </div>

              {/* REMOVE */}
              <button onClick={() => removeItem(item._id)}>❌</button>
            </div>
          ))}

          {/* TOTAL */}
          <h3>Total: ₹{total}</h3>

          {/* CHECKOUT */}
          <button
            onClick={() => navigate("/checkout")}
            style={{
              padding: "10px 20px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;