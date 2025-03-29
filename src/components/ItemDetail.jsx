import { useParams } from "react-router"
import ItemCard from "./Item"
import LoadingRenderProps from "./common/LoadingRenderProps"
import { useEffect, useState } from "react"
import styles from '../styles/ItemDetail.module.css'
function ItemDetail ({item}){
    return( 
        <section className={styles.itemDetailSection}>
            <h2>{item.title}</h2>
            <div className={styles.imageAndButtonDiv}>
                <img className={styles.itemImage}src={item.thumbnail} alt="Imagen del producto" />
                <div className={styles.purchaseDiv}>
                    <span>Rating: {item.rating}</span>
                    <h1>${(item.price *((1-item.discountPercentage/100))).toFixed(2)}</h1>
                    <p>Agrega este producto a tu carrito</p>
                    <button className={styles.purchaseButton}>Agregar al carrito</button>
                </div>
            </div>
            <h3 className={styles.contentTitle}>Informacion del producto</h3>
            <h3 className={styles.contentTitle}>Descripcion</h3>
            <p className={styles.infoText}>{item.description}</p>

        </section>
    )
};
export default ItemDetail