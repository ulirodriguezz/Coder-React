import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import styles from '../styles/ItemListContainer.module.css'
import ItemListRenderer from "./ItemListRenderer";
import LoadingRenderProps from "./common/LoadingRenderProps";
function ItemListcontainer(){
    const [productArray,setProductArray] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProductArray(data.products))
            .then();
        },1000 * 3)
    },[]);

    return(
        <LoadingRenderProps data={productArray}>
            <div className={styles.itemListContainer}>
                <ItemListRenderer itemList={productArray}></ItemListRenderer>
            </div>
        </LoadingRenderProps>
      
    )
}
export default ItemListcontainer