import styles from '../styles/itemCard.module.css'
function ItemCard ({item}){
    console.log(item)
    return( 
        <article className={styles.itemCard}>
            <img src={item.thumbnail} alt="Foto de producto" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </article>
    );
};
export default ItemCard