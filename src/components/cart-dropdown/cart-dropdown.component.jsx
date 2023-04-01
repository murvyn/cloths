import { useNavigate } from "react-router-dom";


import Button from "../button/button.component.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.jsx";
import { useSelector } from "react-redux";
import { SelectCartItems } from "../../store/cart/cart.selector.js";

const CartDropdown = () => {
  const  cartItems  = useSelector(SelectCartItems)
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
