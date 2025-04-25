
import styles from '../styles/ItemDetail.module.css'
import CartProvider from './context/CartProvider'

import ItemCount from './ItemCount'
function ItemDetail({ item }) {
    return (
        <section className={styles.itemDetailSection}>
            <h2 className={styles.title}>{item.title}</h2>
            <span className={styles.categorySpan}>{item.category}</span>
            <div className={styles.mainDiv}>
                <img className={styles.itemImage} src={item.thumbnail} alt="Imagen del producto" />
                <div className={styles.purchaseDiv}>
                    <span className={styles.infoText}>Rating: {item.rating}</span>
                    <h1>${(item.price * ((1 - item.discountPercentage / 100))).toFixed(2)}</h1>
                    <p>Agregá este producto a tu carrito</p>
                    <ItemCount text={'Agregar al carrito'} item={item} />


                </div>
            </div>
            <div className={styles.infoDiv}>
                <h3 className={styles.contentTitle}>Información del producto</h3>
                <span className={styles.infoText}>&bull; Marca: {item.brand}</span>
                <span className={styles.infoText}>&bull; Peso: {item.weight}</span>
                <h3 className={styles.contentTitle}>Descripción</h3>
                <p className={styles.infoText}>{item.description}</p>
            </div>


        </section>
    )
};
export default ItemDetail