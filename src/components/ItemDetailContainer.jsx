import { useParams } from "react-router"
import LoadingRenderProps from "./common/LoadingRenderProps"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
function ItemDetailContainer (){
    const {id} =useParams()
    const [item,setItem] = useState(null)
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(response => response.json())
        .then(data => setItem(data))
    },[]);
    return( 
        <LoadingRenderProps data={item}>
            <ItemDetail item={item}/>
        </LoadingRenderProps>
    )
};
export default ItemDetailContainer