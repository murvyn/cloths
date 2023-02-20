import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productsToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productsToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productsToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState([]);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])
  
  const addItemToCart = (productsToAdd) => {
      setCartItems(addCartItem(cartItems, productsToAdd));
    };
    const value = { isCartOpen, cartCount, setIsCartOpen, addItemToCart, cartItems };
    
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
