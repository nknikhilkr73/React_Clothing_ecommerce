import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-items/cart-items.component";
import { CartContext } from "../context/cart.context";
import "./cart-dropdown.styles.scss";

const CartDropdown =()=>{

const {cartItems}=useContext(CartContext)

const navigate =useNavigate();

const gotoCheckoutHandler=()=>{
navigate('/checkout');
}

return (
    <div className="cart-dropdown-container">
<div className="cart-items"> 
{cartItems.map(item=> <CartItem key={item.id} cartItem={item} /> )}
</div>
<button onClick={gotoCheckoutHandler}>GO TO CHECKOUT</button>
    </div>
)
}

export default CartDropdown;