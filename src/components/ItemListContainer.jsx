import { useEffect, useState } from "react";
import styles from '../styles/ItemListContainer.module.css'
import ItemListRenderer from "./ItemListRenderer";
import LoadingRenderProps from "./common/LoadingRenderProps";
function ItemListcontainer(){
    const [productArray,setProductArray] = useState([])
    const [fetchError,setFetchError] = useState(null)
    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProductArray(data.products))
            .catch(e => setDummyProducts(e));
        },1000 * 3)
    },[]);
    function setDummyProducts(e){
        const dummyArray = [
            {
                title:"Ojotas negras",
                thumbnail:"../src/assets/Logo.png",
                description:"Unas ojotas negras re piolas broderr"
            },
            {
                title:"Campera roja",
                thumbnail:"../src/assets/Logo.png",
                description:"Una campera roja negras re piolas broderr Una campera roja negras re piolas broderr Una campera roja negras re piolas broderr Una campera roja negras re piolas broderr"
            },
            {
                title:"Buzo verde",
                thumbnail:"../src/assets/Logo.png",
                description:"Una Buzo vede negras re piolas broderr"
            },
            {
                title:"Remera negra",
                thumbnail:"../src/assets/Logo.png",
                description:"Remera negra vede negras re piolas broderr"
            },
        ]
        setProductArray(dummyArray);
        setFetchError(e);
    }

    function handleClick(){
        console.log("Navego al producto")
    }


    return(
        <LoadingRenderProps data={productArray}>
            <div className={styles.itemListContainer}>
                <ItemListRenderer itemList={productArray} onClick={handleClick}></ItemListRenderer>
            </div>
        </LoadingRenderProps>

    )
    


}
export default ItemListcontainer