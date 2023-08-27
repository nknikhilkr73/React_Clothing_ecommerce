import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../components/context/cart.context";
import { UserContext } from "../../components/context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";
const Navigation =()=>{
    const {currentUser }=useContext(UserContext);
    const {isCartOpen}=useContext(CartContext)
    
    // console.log(currentUser);

//     const signOutHandler=async()=>{
// await signOutUser();
// setcurrentUser(null)
//     }

    return (
        <Fragment>
            <div className="navigation">
            <Link className="logo-container" to='/'>
            <CrownLogo className="logo" />
            </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>{' '}Sign Out{' '}</span>
                        ):<Link className="nav-link" to='/auth'>Sign In</Link>
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;