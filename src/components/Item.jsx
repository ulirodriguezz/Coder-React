import { useContext, useEffect } from 'react'
import styles from '../styles/ItemCard.module.css'
import DiscountedPrice from './DiscountedPrice'
import CartContext from './context/CartContext'
function ItemCard ({item,onClick =()=>{},buttonOnclick=(e)=>{e.stopPropagation()}}){
    const {addProductToCart} = useContext(CartContext);
    const createTagsString = () =>{
        //Esta funcion crea un string para los tags del producto
        // Por ejemplo: 'beauty • fashion'
        let tagArray = ''
        for(let i = 0; i< item.tags.length; i++){
            tagArray = tagArray + item.tags[i]+' • ';
        }
        tagArray = tagArray.slice(0,tagArray.length-2);
        return tagArray
    }
    const handleAdd=(e)=>{
        e.preventDefault();
        addProductToCart(item,1);
    }
    return( 
        <article className={styles.itemCard} onClick={onClick}>
            <img src={item.thumbnail} alt="Foto de producto" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className={styles.purchaseDiv}>
                <button onClick={handleAdd}>Agregar</button>
                <DiscountedPrice originalPrice={item.price} discountedPrice={(item.price*(100-item.discountPercentage)/100).toFixed(2)}></DiscountedPrice>
            </div>
            <div className={styles.tagsDiv}>
                <p>{createTagsString()}</p>
            </div>
        </article>
    );
};
export default ItemCard