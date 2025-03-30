import { useState } from "react"
import styles from '../styles/ItemCount.module.css'

function ItemCount ({text}){
    const[count,setCount] = useState(0);
    function handleClick(e){
        //Dependiendo de como haga la implementacion de agregar al carrito
        //probablemente tenga que mover esta logica al componente padre del ItemCount
        setCount(count + 1);
        //Por ahora solo hago un console.log
        console.log(count)     
    }
    return( 
        <button className={styles.purchaseButton} onClick={handleClick}>{text}</button>
    )
};
export default ItemCount