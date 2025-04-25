import { useContext, useState } from "react"
import styles from '../styles/ItemCount.module.css'
import CartContext from "./context/CartContext";

function ItemCount({ text, item }) {
    const { addProductToCart } = useContext(CartContext)
    const [count, setCount] = useState(1);
    function handleClick(e) {
        addProductToCart(item, count);
        toast.success('Producto agregado al carrito 😀', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    function handlePlus() {
        setCount(count + 1);
    }
    function handleMinus() {
        if (count == 1) {
            toast.error('No podés bajar más', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
        setCount(count - 1);
    }
    return (
        <>
            <div className={styles.itemCountDiv}>
                <button className={styles.purchaseButton} onClick={handleClick}>{text}</button>
                <div className={styles.quantityButtonsDiv}>
                    <button className={styles.plusButton} onClick={handlePlus}>+</button>
                    <button className={styles.minusButton} onClick={handleMinus}>-</button>
                </div>
            </div>
            <span style={{ color: "white" }}>Cantidad: {count}</span>
        </>

    )
};
export default ItemCount