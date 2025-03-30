import { IoCartOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import styles from '../styles/CartWidget.module.css'
function CartWidget(){
    return(
        <div id="cart-widget">
            <IconContext.Provider value={{size:'3em',color:"white"}}>
                <IoCartOutline />
            </IconContext.Provider>
            {/* Poría incluir el numero como una prop */}
            <span className={styles.cartBubble}>1</span>
        </div>
    );
}
export default CartWidget