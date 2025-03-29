import { useEffect } from 'react'
import styles from '../styles/itemCard.module.css'
import DiscountedPrice from './DiscountedPrice'
function ItemCard ({item,onClick =()=>{},buttonOnclick=()=>{}}){
    const createTagsString = () =>{
        let tagArray = ''
        for(let i = 0; i< item.tags.length; i++){
            tagArray = tagArray + item.tags[i]+' • ';
        }
        tagArray = tagArray.slice(0,tagArray.length-2);
        return tagArray
    }
    return( 
        <article className={styles.itemCard} onClick={onClick}>
            <img src={item.thumbnail} alt="Foto de producto" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className={styles.purchaseDiv}>
                <button onClick={buttonOnclick}>Agregar</button>
                <DiscountedPrice originalPrice={item.price} discountedPrice={(item.price*(100-item.discountPercentage)/100).toFixed(2)}></DiscountedPrice>
            </div>
            <div className={styles.categoryDiv}>
                <p>{createTagsString()}</p>
            </div>
        </article>
    );
};
export default ItemCard