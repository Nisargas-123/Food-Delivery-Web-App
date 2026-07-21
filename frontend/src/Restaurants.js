import React from "react";
import {
  useParams,
  useNavigate,
  useLocation
} from "react-router-dom";

// ✅ CHICKEN IMAGES
import meatFlame from "./assets/meat.jpg";
import redGrill from "./assets/red.jpg";
import grillRepublic from "./assets/republic.jpg";
import urbanTandoor from "./assets/Urban.jpg";
import kebabJunction from "./assets/kebab_junction.jpg";
import dumDrumsticks from "./assets/drumsticks.jpg";
import spiceSultan from "./assets/sultan.jpg";
import biryaniBazaar from "./assets/biryani.jpg";
import sizzleLab from "./assets/lab.jpg";
import flameSocial from "./assets/flame.jpg";

import pizza1 from "./assets/pizza1.jpg";
import pizza2 from "./assets/pizza2.jpg";
import pizza3 from "./assets/pizza3.jpg";
import pizza4 from "./assets/pizza4.jpg";
import pizza5 from "./assets/pizza5.jpg";
import pizza6 from "./assets/pizza6.jpg";
import pizza7 from "./assets/pizza7.jpg";
import pizza8 from "./assets/pizza8.jpg";
import pizza9 from "./assets/pizza9.jpg";
import pizza10 from "./assets/pizza10.jpg";

import burger1 from "./assets/burger1.jpg";
import burger2 from "./assets/burger2.jpg";
import burger3 from "./assets/burger3.jpg";
import burger4 from "./assets/burger4.jpg";
import burger5 from "./assets/burger5.jpg";
import burger6 from "./assets/burger6.jpg";
import burger7 from "./assets/burger7.jpg";
import burger8 from "./assets/burger8.jpg";
import burger9 from "./assets/burger9.jpg";
import burger10 from "./assets/burger10.jpg";

// ✅ CAKE IMAGES (RENAME FILES FIRST)
import cake1 from "./assets/cake1.jpg";
import cake2 from "./assets/cake2.jpg";
import cake3 from "./assets/cake3.jpg";
import cake4 from "./assets/cake4.jpg";
import cake5 from "./assets/cake5.jpg";
import cake6 from "./assets/cake6.jpg";
import cake7 from "./assets/cake7.jpg";
import cake8 from "./assets/cake8.jpg";
import cake9 from "./assets/cake9.jpg";
import cake10 from "./assets/cake10.jpg";

import roll1 from "./assets/rolls1.jpg";
import roll2 from "./assets/wrap-roll.jpg";
import roll3 from "./assets/rolls3.jpg";
import roll4 from "./assets/rolls4.jpg";
import roll5 from "./assets/rolls5.jpg";
import roll6 from "./assets/rolls6.jpg";
import roll7 from "./assets/rolls7.jpg";
import roll8 from "./assets/rolls8.jpg";
import roll9 from "./assets/rolls9.jpg";
import roll10 from "./assets/rolls10.jpg";

function Restaurants() {
  const { category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

const filter = location.state?.filter;

  // ✅ CHICKEN IMAGE MAP
  const chickenImages = {
    "Meat & Flame": meatFlame,
    "Red Grill House": redGrill,
    "Grill Republic": grillRepublic,
    "Urban Tandoor": urbanTandoor,
    "The Kebab Junction": kebabJunction,
    "Dum & Drumsticks": dumDrumsticks,
    "Spice Sultan": spiceSultan,
    "The Biryani Bazaar": biryaniBazaar,
    "Sizzle Lab": sizzleLab,
    "Flame Social": flameSocial
  };

  // ✅ PIZZA IMAGE ARRAY
  const pizzaImages = [
    pizza1, pizza2, pizza3, pizza4, pizza5,
    pizza6, pizza7, pizza8, pizza9, pizza10
  ];

  // ✅ BURGER IMAGE ARRAY
  const burgerImages = [
    burger1, burger2, burger3, burger4, burger5,
    burger6, burger7, burger8, burger9, burger10
  ];

  // ✅ CAKE IMAGE ARRAY
  const cakeImages = [
    cake1, cake2, cake3, cake4, cake5,
    cake6, cake7, cake8, cake9, cake10
  ];

  // ✅ ROLLS IMAGE ARRAY
  const rollImages = [
    roll1, roll2, roll3, roll4, roll5,
    roll6, roll7, roll8, roll9, roll10
  ];

  // 🖼️ IMAGE SELECTOR
  const getImage = (type, name, index) => {

    if (type === "Chicken") {
      return chickenImages[name] || meatFlame;
    }

    if (type === "Cake") {
      return cakeImages[index % cakeImages.length]; // 🔥 rotating images
    }

    if (type === "Pizza") {
  return pizzaImages[index % pizzaImages.length];
}

if (type === "Burger") {
  return burgerImages[index % burgerImages.length];
}

if (type === "Rolls") {
  return rollImages[index % rollImages.length];
}

  };

  // 🍽️ GENERATE RESTAURANTS
  const generateRestaurants = (type) => {
    let names = [];

    if (type === "Chicken") {
      names = [
        "Meat & Flame",
        "Red Grill House",
        "Grill Republic",
        "Urban Tandoor",
        "The Kebab Junction",
        "Dum & Drumsticks",
        "Spice Sultan",
        "The Biryani Bazaar",
        "Sizzle Lab",
        "Flame Social"
      ];
    }

    else if (type === "Pizza") {
      names = [
        "Pizza Hub",
        "Slice Factory",
        "Cheesy Crust",
        "Fire Oven Pizza",
        "Urban Slice",
        "Pizza Point",
        "The Pizza Kitchen",
        "Stone Oven Co.",
        "Pizza Express",
        "Crust & Cheese"
      ];
    }

    else if (type === "Burger") {
      names = [
        "Burger Hub",
        "Grill & Bun",
        "Stack House",
        "Burger Factory",
        "Smash Burgers",
        "The Bun Club",
        "Urban Burgers",
        "Burger Bros",
        "Patty Palace",
        "The Burger Joint"
      ];
    }

    else if (type === "Cake") {
      names = [
        "Sweet Cravings",
        "Cake Palace",
        "Bake Studio",
        "Sugar Rush",
        "The Cake Corner",
        "Dream Bakes",
        "Frost & Flour",
        "Heavenly Cakes",
        "Bake Bliss",
        "The Dessert Room"
      ];
    }

    else if (type === "Rolls") {
      names = [
        "Rolls King",
        "Wrap & Roll",
        "Street Rolls",
        "The Roll Factory",
        "Kathi Junction",
        "Roll Express",
        "Spicy Wraps",
        "Roll Nation",
        "Quick Bites",
        "Urban Rolls"
      ];
    }

    else if (type === "Veg") {
  names = [
    "South Indian Hub",
    "Veg Delight",
    "Green Leaf",
    "Pure Veg Palace",
    "Udupi Bhavan"
  ];
}

else if (type === "Beverage") {
  names = [
    "Cafe Brew",
    "Cool Drinks Corner",
    "Juice Junction",
    "Beverage Bar",
    "Drink Hub"
  ];
}

else if (type === "Dessert") {
  names = [
    "Sweet Tooth",
    "Dessert Hub",
    "Cake World",
    "Sugar Treats",
    "Heavenly Desserts"
  ];
}

    else {
      names = [`${type} Place`];
    }

    return names.map((name, index) => ({
      name,
      image: getImage(type, name, index), // 🔥 PASS INDEX
      rating: (4 + Math.random()).toFixed(1),
      place: "Bangalore",
      time: `${20 + Math.floor(Math.random() * 20)} mins`
    }));
  };

  const restaurants = generateRestaurants(category);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{category} Restaurants</h2>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {restaurants.map((res, index) => (
          <div
            key={index}
            onClick={() =>
  navigate(
  `/menu/${category}/${encodeURIComponent(res.name)}`,
  {
    state: { filter }
  }
)
}
            style={{
              width: "250px",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              cursor: "pointer"
            }}
          >
            <img
              src={res.image}
              alt={res.name}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "12px" }}>
              <h3>{res.name}</h3>
              <p>{res.rating} • {res.time}</p>
              <p style={{ color: "gray" }}>
                {category} • {res.place}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/home")}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Back
      </button>
    </div>
  );
}

export default Restaurants;