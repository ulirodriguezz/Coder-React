import { useContext } from "react"
import CartContext from "./context/CartContext"
import Swal from "sweetalert2";
function CartProductCard ({product,styles}){
    const {addProductToCart,substractProductQuantityBy1,removeProduct} = useContext(CartContext)
    const handleAdd = ()=>{
        addProductToCart(product,1);
    }
    const handleSubstract = () =>{
        substractProductQuantityBy1(product)
    }
    const handleRemove = () =>{
        Swal.fire(
            {
                title:'¿Estás seguro?',
                text:'Se eliminará el producto del carrito',
                icon:'warning',
                confirmButtonText:'Eliminar',
                showCancelButton:true,
                cancelButtonText:'Cancelar'
            }
        ).then(result =>{
            if(result.isConfirmed){
                removeProduct(product)
            }
        })
        
        
    }
    return( 
        <article className={styles.productCard}> 
            <img src={product.thumbnail} alt="img producto" />
            <h3>{product.title}</h3>
            <div className={styles.productInfoDiv}>
                <span>${(product.price * (100-product.discountPercentage)/100).toFixed(2)} c/u</span>
                <span>x{product.quantity}</span>
                <div className={styles.quantityButtonsDiv}>
                    <button className={styles.quantityButton} onClick={handleSubstract}>-</button>
                    <button className={styles.quantityButton} onClick={handleAdd}>+</button>
                </div>
            </div>
            <div className={styles.finalDiv}>
                <span style={{fontWeight:'bold'}}>Total: ${(product.quantity * product.price * (100-product.discountPercentage)/100).toFixed(2)}</span>
                <button className={styles.deleteButton} onClick={handleRemove}>x</button>
            </div>
        </article>
    )
};
export default CartProductCard