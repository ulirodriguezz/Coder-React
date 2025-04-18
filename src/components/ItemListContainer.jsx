import { useEffect, useState } from "react";
import styles from '../styles/ItemListContainer.module.css'
import ItemList from "./ItemList";
import LoadingRenderProps from "./common/LoadingRenderProps";
import { useParams } from "react-router";
import { getItems, getItemsByCategory } from "../firebase/db";
function ItemListcontainer(){
    const [productArray,setProductArray] = useState([])
    const {categName} = useParams()
    useEffect(()=>{   
        // const allProductsURL = 'https://dummyjson.com/products';
        // const productsByCategoryURL = `https://dummyjson.com/products/category/${categName}`
        // fetch(categName? productsByCategoryURL:allProductsURL)
        // .then(res => res.json())
        // .then(data => setProductArray(data.products))
        // .catch(e => console.log('Hay que manejar este error'));
        if(categName != undefined){
            getItemsByCategory(categName)
            .then(data =>setProductArray(data))
        }else{
            getItems()
            .then(data =>setProductArray(data))
        }
        
    },[categName]);
    function handleClick(){
        //Si no hago nada con esto lo borro
        console.log('Logica al hacer click')
    }



    return(
        <LoadingRenderProps data={productArray}>
            <div className={styles.itemListContainer}>
                <ItemList itemList={productArray} onItemClick={handleClick}></ItemList>
            </div>
        </LoadingRenderProps>
    )
    


}
export default ItemListcontainer