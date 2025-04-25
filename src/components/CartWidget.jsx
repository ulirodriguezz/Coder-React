import { IoCartOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import styles from '../styles/CartWidget.module.css'
import { useContext, useEffect } from "react";
import CartContext from "./context/CartContext";
import { Link } from "react-router";
function CartWidget() {
    const { cart, cartSize } = useContext(CartContext);
    return (
        <div className={styles.cartWidget}>
            <Link to={'/cart'}>
                <IconContext.Provider value={{ size: '3em', color: "white" }}>
                    <IoCartOutline />
                </IconContext.Provider>
            </Link>
            <span className={styles.cartBubble} style={{ visibility: cart.length == 0 ? 'hidden' : 'visible' }}>{cartSize}</span>
        </div>
    );
}
export default CartWidget