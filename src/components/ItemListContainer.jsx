import { useEffect, useState } from "react";
import styles from '../styles/ItemListContainer.module.css'
import ItemListRenderer from "./ItemListRenderer";
import LoadingRenderProps from "./common/LoadingRenderProps";
import { Link } from "react-router";
function ItemListcontainer(){
    const [productArray,setProductArray] = useState([])
    const [fetchError,setFetchError] = useState(null)
    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://dummyjson.com/products/')
            .then(res => res.json())
            .then(data => setProductArray(data.products))
            .catch(e => console.log('Hay que manejar este error'));
        },1000 * 3)
    },[]);
    function handleClick(){
        console.log('Logica al hacer click')
    }



    return(
        <LoadingRenderProps data={productArray}>
            <div className={styles.itemListContainer}>
                <ItemListRenderer itemList={productArray} onItemClick={handleClick}></ItemListRenderer>
            </div>
        </LoadingRenderProps>
    )
    


}
export default ItemListcontainer