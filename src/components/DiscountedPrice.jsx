import styles from '../styles/DiscountedPrice.module.css'
export default function DiscountedPrice({price,discountedPrice}){
    return(
        <div className={styles.discuountedPriceDiv}>
            <h5>Sale!! <span>${price}</span></h5>
            <h4>${discountedPrice}</h4>
        </div>
    )
}