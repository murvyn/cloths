import "./cart-item.styles.jsx";
import { CartItemContainer, Image, ItemDetails, Name } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
