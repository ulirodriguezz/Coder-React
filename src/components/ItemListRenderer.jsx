import ItemCard from "./ItemCard"
function ItemListRenderer ({itemList}){
    return( 
        <>
            {itemList.map((prod)=>{
            return(
                <ItemCard key={prod.id} item={prod}></ItemCard>
            )
             })}
        </>

    )
};
export default ItemListRenderer