import { useContext, useState } from "react"
import styles from '../styles/ItemCount.module.css'
import CartContext from "./context/CartContext";

function ItemCount ({text,item}){
    const {addProductToCart} = useContext(CartContext)
    const[count,setCount] = useState(0);
    function handleClick(e){
        addProductToCart(item,1);
    }
    return( 
        <button className={styles.purchaseButton} onClick={handleClick}>{text}</button>
    )
};
export default ItemCount