import { useContext } from "react"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { CartContext } from "../context/cart.context"
import "./cart-icon.styles.scss"

const CartIcon=()=>{
    const {isCartOpen, setIsCartOpen, cartItems, cartCount}=useContext(CartContext)
const toggleIsCartOpen=()=> setIsCartOpen(!isCartOpen)
// const array=cartItems.map((c)=>{
//    return c.quantity;
// })
// const quantity=array.reduce((accumulator, current)=>current+accumulator, 0 );

    return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
        <ShoppingIcon  className="shopping-icon"/>
        <span className="item-count">{cartCount}</span>
    </div>
)
}

export default CartIcon