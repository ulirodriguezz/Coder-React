import { useContext } from 'react'
import styles from '../styles/CartDetail.module.css'
import CartProductCard from './CartItem'
import CartContext from './context/CartContext'
import { Link } from 'react-router'
function CartDetail (){
    const {cart} = useContext(CartContext);
    const calculateTotalCartPrice=()=>{
        let total = 0;
        cart.forEach(prod => {
            total += prod.quantity * prod.price * (100-prod.discountPercentage)/100
        });
        return(total.toFixed(2))
    }
    return( 
        <section className={styles.cartDetailSection}>
            <div className={styles.sectionHeaderDiv}>
                <h1>Detalle del carrito</h1>
            </div>
            <div className={styles.cartListingDiv}>
                
                { cart.length >0? cart.map(prod => (
                    <CartProductCard key={prod.id} styles={styles} product={prod}/>)
                )
                :
                <h2 style={{textAlign:'center'}}>El carrito esta vacio</h2>
                
                }
            </div>
            <div className={styles.userInfoDiv}>
                <h2>Informacion de pago</h2>
                <span>Tarjeta nro: 1111222233334444</span>
                <h2>Direccion de envio</h2>
                <span>Miller 3430, Capital federal</span>
            </div>
            <div className={styles.confirmCartDiv}>
                <h1>Total: ${calculateTotalCartPrice()}</h1>
                <button><Link to={'/checkout'}>Confirmar Carrito</Link></button>
            
            </div>
        </section>
    )
};
export default CartDetail