import { useContext } from "react";
import CartItem from "../cart-items/cart-items.component";
import { CartContext } from "../context/cart.context";
import "./cart-dropdown.styles.scss";
const CartDropdown =()=>{

const {cartItems}=useContext(CartContext)

return (
    <div className="cart-dropdown-container">
<div className="cart-items"> 
{cartItems.map(item=> <CartItem key={item.id} cartItem={item} /> )}
</div>
<button>GO TO CHECKOUT</button>
    </div>
)
}

export default CartDropdown;