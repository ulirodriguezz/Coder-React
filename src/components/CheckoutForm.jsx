import { useContext } from "react"
import CartContext from "./context/CartContext"
import styles from '../styles/CheckoutForm.module.css'
import { savePurchase } from "../firebase/db";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useEffect } from "react";
function CheckoutForm() {
    const { cart, emptyCart } = useContext(CartContext);
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        const errorAlet = (errorMsj) => {
            Swal.fire({
                title: errorMsj,
                icon: 'error',
                confirmButtonText: 'Entendido'
            })
        }
        e.preventDefault()
        let swalMsj = '';
        //Si el campo de nombre esta vacio, no permito completar la compra
        // -- El campo de email ya esta validado por la etiqueta HTML --
        if (e.target[0].value == '') {
            errorAlet('Debes ingresar tu nombre');
            return
        }
        //Esto permite solo numeros como: 541130150582, 1130150582, 30150582
        // dependiendo si se incluye o no los codigos de area
        if (e.target[2].value.length != 8 && e.target[2].value.length != 12 && e.target[2].value.length != 10) {
            errorAlet('Telefono Invalido');
            return
        }

        const purchase = {
            userName: e.target[0].value,
            email: e.target[1].value,
            telefono: e.target[2].value,
            products: cart
        }
        savePurchase(purchase);
        emptyCart();
    }

    useEffect(() => {
        //No permite que el se acceda a este componente si el carrito esta vacio
        //En caso que se intente acceder directamnte a la URL (/checkout)
        if (cart.length == 0) {
            navigate('/')
        }
    }, [cart]);

    return (
        //Podria poder esto en otro componente para separarlo de la logica 
        // pero no esta contemplado en la entrega, por lo tanto no lo hago.
        <form className={styles.checkoutForm} action="submit" onSubmit={handleSubmit}>
            <label className={styles.checkoutLabel} htmlFor="name">Nombre:</label>
            <input className={styles.checkoutInput} type="text" name="name" id="nameInput" placeholder="Ingresá tu nombre" defaultValue={'Ulises'} />
            <label className={styles.checkoutLabel} htmlFor="email">Email:</label>
            <input className={styles.checkoutInput} type="email" name="email" id="emailInput" placeholder="Ingresá tu email" defaultValue={'ulirodrigueze@gmail.com'} />
            <label className={styles.checkoutLabel} htmlFor="phone">Telefono:</label>
            <input className={styles.checkoutInput} type="number" name="phone" id="phoneInput" placeholder="Ingresá tu numero de telefono" defaultValue={1130150582} />
            <button className={styles.submitButton} type="submit">Confirmar Compra</button>
        </form>
    )
}
export default CheckoutForm