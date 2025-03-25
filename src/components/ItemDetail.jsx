import { useParams } from "react-router"
import ItemCard from "./ItemCard"
import LoadingRenderProps from "./common/LoadingRenderProps"
import { useEffect, useState } from "react"
function ItemDetail (){
    const {id} =useParams()
    const [item,setItem] = useState(null)
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(response => response.json())
        .then(data => setItem(data))
    },[]);
    return( 
        <LoadingRenderProps data={item}>
            <ItemCard item={item}/>
        </LoadingRenderProps>
    )
};
export default ItemDetail