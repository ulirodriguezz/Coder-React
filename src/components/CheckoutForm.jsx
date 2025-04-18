import { useContext } from "react"
import CartContext from "./context/CartContext"
import styles from '../styles/CheckoutForm.module.css'
function CheckoutForm(){
    const {cart} = useContext(CartContext);
    const handleSubmit = (e)=>{
        e.preventDefault()
        //Cargar orden de compra a firestore
    }
    return(
        <form className={styles.checkoutForm} action="submit" onSubmit={handleSubmit}>
            <label className={styles.checkoutLabel} htmlFor="name">Nombre:</label>
            <input className={styles.checkoutInput} type="text" name="name" id="nameInput" placeholder="Ingresá tu nombre" defaultValue={'Ulises'}/>
            <label className={styles.checkoutLabel} htmlFor="email">Email:</label>
            <input className={styles.checkoutInput} type="email" name="email" id="emailInput" placeholder="Ingresá tu email" defaultValue={'ulirodrigueze@gmail.com'} />
            <label className={styles.checkoutLabel} htmlFor="phone">Telefono:</label>
            <input className={styles.checkoutInput} type="tel" name="phone" id="phoneInput" placeholder="Ingresá tu numero de telefono" defaultValue={1130150582}/>
            <button type="submit">Confirmar Compra</button>
        </form>
    )
}
export default CheckoutForm