import { useContext, useState } from "react"
import styles from '../styles/ItemCount.module.css'
import CartContext from "./context/CartContext";

function ItemCount ({text,item}){
    const {addProductToCart} = useContext(CartContext)
    const[count,setCount] = useState(1);
    function handleClick(e){
        addProductToCart(item,count);
    }
    function handlePlus(){
        setCount(count + 1);
    }
    function handleMinus(){
        if(count == 1){
            alert('No se puede')
            return
        }
        setCount(count - 1);
    }
    return( 
        <>
            <div className={styles.itemCountDiv}>
                <button className={styles.purchaseButton} onClick={handleClick}>{text}</button>
                <div className={styles.quantityButtonsDiv}>
                    <button className={styles.plusButton} onClick={handlePlus}>+</button>
                    <button className={styles.minusButton} onClick={handleMinus}>-</button>
                </div>
            </div>        
            <span style={{color:"white"}}>Cantidad: {count}</span>
        </>

    )
};
export default ItemCount