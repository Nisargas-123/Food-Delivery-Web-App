const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Menu = require("./models/Menu");

dotenv.config();

// ✅ CONNECT DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected (Seeder) ✅"))
  .catch(err => console.log("DB Error:", err));


// 🍗 CHICKEN ITEMS
const generateChickenItems = (restaurant) => {
  const dishes = [
    { name: "Grilled Chicken", desc: "Juicy grilled chicken with smoky flavor" },
    { name: "Chicken Tikka", desc: "Spicy marinated chicken cooked in tandoor" },
    { name: "Butter Chicken", desc: "Creamy tomato-based chicken curry" },
    { name: "Chicken Biryani", desc: "Aromatic rice with tender chicken pieces" },
    { name: "Chicken Curry", desc: "Traditional spicy chicken curry" },
    { name: "Chicken Kebab", desc: "Skewered and grilled chicken chunks" },
    { name: "Chilli Chicken", desc: "Indo-Chinese spicy chicken dish" },
    { name: "Chicken Fry", desc: "Crispy fried chicken with spices" },
    { name: "Garlic Chicken", desc: "Chicken tossed in garlic sauce" },
    { name: "Chicken Masala", desc: "Rich and flavorful masala chicken" }
  ];

  return dishes.map(dish => ({
    name: dish.name,
    price: 180 + Math.floor(Math.random() * 150),

    image:
      dish.name === "Chicken Biryani"
        ? "Chicken Biryani"
        : dish.name === "Butter Chicken"
        ? "Butter Chicken"
        : dish.name === "Chicken Curry"
        ? "Chicken Curry"
        : dish.name === "Chicken Tikka"
        ? "Chicken Tikka"
        : dish.name === "Grilled Chicken"
        ? "Grilled Chicken"
        : dish.name === "Chicken Kebab"
        ? "Chicken Kebab"
        : dish.name === "Chilli Chicken"
        ? "Chilli Chicken"
        : dish.name === "Chicken Fry"
        ? "Chicken Fry"
        : dish.name === "Garlic Chicken"
        ? "Garlic Chicken"
        : "Chicken Masala",

    category: "Chicken",
    restaurant,
    description: dish.desc
  }));
};


// 🍕 PIZZA ITEMS
const generatePizzaItems = (restaurant) => {
  const dishes = [
    "Margherita Pizza",
    "Farmhouse Pizza",
    "Paneer Pizza",
    "Veg Supreme Pizza",
    "BBQ Chicken Pizza",
    "Pepperoni Pizza",
    "Cheese Burst Pizza",
    "Garlic Bread",
    "French Fries",
    "Pizza Combo"
  ];

  return dishes.map(dish => ({
    name: dish,
    price: 200 + Math.floor(Math.random() * 200),
    image: dish,
    category: "Pizza",
    restaurant,
    description: `Delicious ${dish} served hot`,
    isVeg: dish.toLowerCase().includes("veg") || dish.toLowerCase().includes("paneer"),
    spiceLevel: ["Mild", "Medium", "Spicy"][Math.floor(Math.random() * 3)],
    rating: (3.8 + Math.random() * 1.2).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50
  }));
};


// 🍔 BURGER ITEMS (FIXED)
const generateBurgerItems = (restaurant) => {
  const dishes = [
    { name: "Chicken Burger", desc: "Crispy chicken patty with mayo" },
    { name: "Veg Burger", desc: "Veg patty with fresh veggies" },
    { name: "Cheese Burger", desc: "Loaded with melted cheese" },
    { name: "Double Patty Burger", desc: "Double meat double fun" },
    { name: "Paneer Burger", desc: "Grilled paneer patty burger" },
    { name: "Spicy Burger", desc: "Hot and spicy flavors" },
    { name: "BBQ Burger", desc: "Smoky BBQ sauce burger" },
    { name: "Classic Burger", desc: "Simple and tasty burger" },
    { name: "Loaded Burger", desc: "Extra toppings and cheese" },
    { name: "Crunchy Burger", desc: "Crispy crunchy patty" },
    { name: "Burger Combo", desc: "Burger + Fries + Drink" },
    { name: "French Fries", desc: "Crispy fries" },
    { name: "Cheese Fries", desc: "Loaded fries with cheese" },
    { name: "Milkshake", desc: "Cold creamy shake" },
    { name: "Cold Coffee", desc: "Chilled coffee drink" }
  ];

  return dishes.map(dish => ({
    name: dish.name,
    price: 120 + Math.floor(Math.random() * 150),
    image: dish.name,
    category: "Burger",
    restaurant,
    description: dish.desc,
    isVeg: dish.name.toLowerCase().includes("veg") || dish.name.toLowerCase().includes("paneer"),
    spiceLevel: ["Mild","Medium","Spicy"][Math.floor(Math.random()*3)],
    rating: (3.8 + Math.random() * 1.2).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50
  }));
};


// 🎂 CAKE ITEMS (FIXED)
const generateCakeItems = (restaurant) => {
  const dishes = [
    { name: "Chocolate Cake", desc: "Rich chocolate layered cake" },
    { name: "Black Forest Cake", desc: "Chocolate cake with cherries" },
    { name: "Red Velvet Cake", desc: "Soft cake with cream cheese frosting" },
    { name: "Vanilla Cake", desc: "Classic vanilla delight" },
    { name: "Strawberry Cake", desc: "Fresh strawberry flavored cake" },
    { name: "Chocolate Cupcake", desc: "Mini chocolate cupcake" },
    { name: "Vanilla Cupcake", desc: "Soft vanilla cupcake" },
    { name: "Cheesecake", desc: "Creamy baked cheesecake" },
    { name: "Brownie", desc: "Dense chocolate brownie" },
    { name: "Cake Slice", desc: "Single slice of premium cake" }
  ];

  return dishes.map(dish => ({
    name: dish.name,
    price: 100 + Math.floor(Math.random() * 150),
    image: dish.name,
    category: "Cake", // 🔥 FIXED
    restaurant,
    description: dish.desc,
    isVeg: true,
    spiceLevel: "None",
    rating: (3.8 + Math.random() * 1.2).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50
  }));
};


// 🌯 ROLLS ITEMS (FIXED)
const generateRollItems = (restaurant) => {
  const dishes = [
    { name: "Chicken Roll", desc: "Spicy chicken wrapped in roti" },
    { name: "Veg Roll", desc: "Mixed veggies in wrap" },
    { name: "Paneer Roll", desc: "Paneer stuffed wrap" },
    { name: "Egg Roll", desc: "Egg layered roll" },
    { name: "Chicken Kathi Roll", desc: "Kolkata style roll" },
    { name: "Double Chicken Roll", desc: "Extra loaded chicken roll" },
    { name: "Cheese Roll", desc: "Cheesy stuffed wrap" },
    { name: "Spicy Roll", desc: "Hot and spicy wrap" },
    { name: "Roll Combo", desc: "Roll with fries and drink" },
    { name: "Mini Rolls Pack", desc: "Assorted mini rolls" }
  ];

  return dishes.map(dish => ({
    name: dish.name,
    price: 100 + Math.floor(Math.random() * 150),
    image: dish.name,
    category: "Rolls",
    restaurant,
    description: dish.desc,
    isVeg: dish.name.toLowerCase().includes("veg") || dish.name.toLowerCase().includes("paneer"),
    spiceLevel: ["Mild","Medium","Spicy"][Math.floor(Math.random()*3)],
    rating: (3.8 + Math.random() * 1.2).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 50
  }));
};

const generateGenericItems = (dishes, category, restaurant) => {
  return dishes.map((dish) => ({
    name: dish,
    price: 100 + Math.floor(Math.random() * 150),
    image: dish,
    category,
    restaurant,
    description: `${dish} - fresh and delicious`, // ✅ ADD THIS LINE
    isVeg: !dish.toLowerCase().includes("chicken")
  }));
};

const vegDishes = [
  "Masala Dosa",
  "Plain Dosa",
  "Neer Dosa",
  "Rava Dosa",
  "Set Dosa",
  "Paper Dosa",
  "Butter Dosa",
  "Idli Sambar",
  "Vada",
  "Paneer Butter Masala",
  "Veg Biryani",
  "Chole Bhature",
  "Palak Paneer",
  "Idli Sambar",
  "Paneer Butter Masala",
  "Veg Biryani",
  "Chole Bhature",
  "Palak Paneer",
  "Veg Fried Rice",
  "Paneer Tikka"
];

const beverages = [
  "Cold Coffee",
  "Lassi",
  "Fresh Lime Soda",
  "Milkshake",
  "Tea",
  "Mango Juice",
  "Orange Juice"
];

const desserts = [
  "Chocolate Cake",
  "Gulab Jamun",
  "Ice Cream",
  "Brownie",
  "Cupcake",
  "Cheesecake",
  "Rasgulla"
];




// 🏪 RESTAURANTS
const chickenRestaurants = ["Meat & Flame","Red Grill House","Grill Republic","Urban Tandoor","The Kebab Junction","Dum & Drumsticks","Spice Sultan","The Biryani Bazaar","Sizzle Lab","Flame Social"];

const pizzaRestaurants = ["Pizza Hub","Slice Factory","Cheesy Crust","Fire Oven Pizza","Urban Slice","Pizza Point","The Pizza Kitchen","Stone Oven Co.","Pizza Express","Crust & Cheese"];

const burgerRestaurants = ["Burger Hub","Grill & Bun","Stack House","Burger Factory","Smash Burgers","The Bun Club","Urban Burgers","Burger Bros","Patty Palace","The Burger Joint"];

const cakeRestaurants = ["Sweet Cravings","Cake Palace","Bake Studio","Sugar Rush","The Cake Corner","Dream Bakes","Frost & Flour","Heavenly Cakes","Bake Bliss","The Dessert Room"];

const rollRestaurants = ["Rolls King","Wrap & Roll","Street Rolls","The Roll Factory","Kathi Junction","Roll Express","Spicy Wraps","Roll Nation","Quick Bites","Urban Rolls"];

const vegRestaurants = [
  "South Indian Hub",
  "Veg Delight",
  "Green Leaf",
  "Pure Veg Palace",
  "Udupi Bhavan"
];

const beverageShops = [
  "Cafe Brew",
  "Cool Drinks Corner",
  "Juice Junction",
  "Beverage Bar",
  "Drink Hub"
];

const dessertShops = [
  "Sweet Tooth",
  "Dessert Hub",
  "Cake World",
  "Sugar Treats",
  "Heavenly Desserts"
];

// 🔁 COMBINE DATA
let menuData = [];

chickenRestaurants.forEach(r => menuData.push(...generateChickenItems(r)));
pizzaRestaurants.forEach(r => menuData.push(...generatePizzaItems(r)));
burgerRestaurants.forEach(r => menuData.push(...generateBurgerItems(r)));
cakeRestaurants.forEach(r => menuData.push(...generateCakeItems(r)));
rollRestaurants.forEach(r => menuData.push(...generateRollItems(r)));
// 🥗 VEG
vegRestaurants.forEach(r =>
  menuData.push(...generateGenericItems(vegDishes, "Veg", r))
);

// 🥤 BEVERAGES
beverageShops.forEach(r =>
  menuData.push(...generateGenericItems(beverages, "Beverage", r))
);

// 🍰 DESSERTS
dessertShops.forEach(r =>
  menuData.push(...generateGenericItems(desserts, "Dessert", r))
);

// ✅ INSERT
const importData = async () => {
  try {
    await Menu.deleteMany();
    await Menu.insertMany(menuData);

    console.log(`Menu inserted ✅ (${menuData.length} items)`);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();