import { Link } from "react-router"
import ItemCard from "./Item"
function ItemListRenderer({ itemList}) {
    return (
        <>
            {itemList.map((prod) => {
                return (
                    <Link to={`/products/${prod.id}`} key={prod.id}>
                        <ItemCard item={prod}></ItemCard>
                    </Link>
                )
            })}
        </>

    )
};
export default ItemListRenderer