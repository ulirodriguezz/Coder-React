import styles from '../styles/DiscountedPrice.module.css'
export default function DiscountedPrice({originalPrice,discountedPrice}){
    if(discountedPrice != 0){
        return(
            <div className={styles.discuountedPriceDiv}>
                <h5>Sale!! <span>${originalPrice}</span></h5>
                <h2>${discountedPrice}</h2>
            </div>
        )
    }
    else{
        return(
            <div className={styles.discuountedPriceDiv}>
                <h2>${discountedPrice}</h2>
            </div>
        )
    }
    
}