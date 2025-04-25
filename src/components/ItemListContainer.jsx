import { useEffect, useState } from "react";
import styles from '../styles/ItemListContainer.module.css'
import ItemList from "./ItemList";
import LoadingRenderProps from "./common/LoadingRenderProps";
import { useParams } from "react-router";
import { getItems, getItemsByCategory } from "../firebase/db";
function ItemListcontainer() {
    const [productArray, setProductArray] = useState([])
    const { categName } = useParams()
    useEffect(() => {
        if (categName != undefined) {
            getItemsByCategory(categName)
                .then(data => setProductArray(data))
        } else {
            getItems()
                .then(data => setProductArray(data))
        }

    }, [categName]);


    return (
        <LoadingRenderProps data={productArray}>
            <div className={styles.itemListContainer}>
                <ItemList itemList={productArray}></ItemList>
            </div>
        </LoadingRenderProps>
    )



}
export default ItemListcontainer