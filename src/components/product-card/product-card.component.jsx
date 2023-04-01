import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './product-card.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { SelectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const dispatch = useDispatch()
    const cartItems = useSelector(SelectCartItems)

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} className='b' onClick = {addProductToCart} >Add to cart</Button>
        </div>
    )
}

export default ProductCard;