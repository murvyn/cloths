import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.styles.jsx";
import { CartCount, CartIconContainer, ShoppingIconContainer } from "./cart-icon.styles.jsx";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconContainer />
      <CartCount>{cartCount}</CartCount>
    </CartIconContainer>
  );
};

export default CartIcon;
