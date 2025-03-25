import { Link } from "react-router"
import ItemCard from "./ItemCard"
function ItemListRenderer ({itemList,onItemClick,buttonOnClick}){
    return( 
        <>
            {itemList.map((prod)=>{
            return(
                <Link to={`products/${prod.id}`} key={prod.id}>
                    <ItemCard item={prod} onClick={onItemClick} buttonOnclick={buttonOnClick}></ItemCard>
                </Link>            
            )
             })}
        </>

    )
};
export default ItemListRenderer