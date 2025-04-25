import { useContext } from 'react'
import styles from '../styles/CartDetail.module.css'
import CarItem from './CartItem'
import CartContext from './context/CartContext'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
function CartDetail() {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const calculateTotalCartPrice = () => {
        let total = 0;
        cart.forEach(prod => {
            total += prod.quantity * prod.price * (100 - prod.discountPercentage) / 100
        });
        return (total.toFixed(2))
    }
    const handleConfirm = (e) => {
        //Valido que el carrito no este vacio para pasar a la compra
        if (cart.length == 0) {
            e.preventDefault();
            Swal.fire({
                title: 'El carrito está vacío',
                text: 'Agregá productos para seguir con tu compra',
                icon: 'warning',
                confirmButtonText: 'Entendido'
            })
        }else{
            navigate('/checkout')
        }
    }
    return (
        <section className={styles.cartDetailSection}>
            <div className={styles.sectionHeaderDiv}>
                <h1>Detalle del carrito</h1>
            </div>
            <div className={styles.cartListingDiv}>

                {cart.length > 0 ? cart.map(prod => (
                    <CarItem key={prod.id} styles={styles} product={prod} />)
                )
                    :
                    <h2 style={{ textAlign: 'center' }}>El carrito esta vacío</h2>

                }
            </div>
            <div className={styles.userInfoDiv}>
                <h2>Información del usuario</h2>
                <span>Nombre: Ulises <br /></span>
                <span>Email: ulirodrigueze@gmail.com <br /></span>
                <span>Telefono: 1130150582 <br /></span>
            </div>
            <div className={styles.confirmCartDiv}>
                <h1>Total: ${calculateTotalCartPrice()}</h1>
                <button className={styles.confirmCartButton} onClick={handleConfirm}>Confirmar Carrito</button>

            </div>
        </section>
    )
};
export default CartDetail