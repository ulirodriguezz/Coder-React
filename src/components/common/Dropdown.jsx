import styles from '../../styles/Dropdown.module.css'
function Dropdown ({name,children,onChange}){
    return( 
        <select name={name} defaultValue={'Categorías'} className={styles.dropdwon} onChange={onChange}>
            <option value=""  hidden>Categorías</option>
            {children}
        </select>
       
    )
};
export default Dropdown