import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // ✅ CREATE STATE (THIS WAS MISSING)
  const [cart, setCart] = useState([]);

  // ✅ LOAD FROM LOCAL STORAGE
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  // ✅ SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ➕ ADD TO CART
  const addToCart = (item) => {
    const existing = cart.find(i => i._id === item._id);

    if (existing) {
      setCart(cart.map(i =>
        i._id === item._id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // ➖ DECREASE
  const decreaseQty = (id) => {
    setCart(
      cart
        .map(item =>
          item._id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // ➕ INCREASE
  const increaseQty = (id) => {
    setCart(
      cart.map(item =>
        item._id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ❌ REMOVE
  const removeItem = (id) => {
    setCart(cart.filter(item => item._id !== id));
  };

  return (
    <CartContext.Provider value={{
      cart,
      setCart, // ✅ IMPORTANT (needed for checkout)
      addToCart,
      increaseQty,
      decreaseQty,
      removeItem
    }}>
      {children}
    </CartContext.Provider>
  );
};