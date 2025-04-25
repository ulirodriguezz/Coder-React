import { useParams } from "react-router"
import LoadingRenderProps from "./common/LoadingRenderProps"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { getItemByID } from "../firebase/db"
function ItemDetailContainer() {
    const { id } = useParams()
    const [item, setItem] = useState(null)
    useEffect(() => {
        getItemByID(id)
            .then(data => setItem(data))
    }, []);
    return (
        <LoadingRenderProps data={item}>
            <ItemDetail item={item} />
        </LoadingRenderProps>
    )
};
export default ItemDetailContainer