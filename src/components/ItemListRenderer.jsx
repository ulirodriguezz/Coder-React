import ItemCard from "./ItemCard"
function ItemListRenderer ({itemList,onClick,buttonOnClick}){
    return( 
        <>
            {itemList.map((prod)=>{
            return(
                <ItemCard key={prod.id} item={prod} onClick={onClick} buttonOnclick={buttonOnClick}></ItemCard>
            )
             })}
        </>

    )
};
export default ItemListRenderer