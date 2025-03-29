import styles from '../../styles/Dropdown.module.css'
function Dropdown ({name,children,onChange,label}){
    function handleChange(e){
        //No quiero que cambie el label del Dropdwon por lo que
        //despues de ejecutar la logica del onChage, lo vuelvo a setear
        onChange(e);
        e.currentTarget.value = label;
    }
    return( 
        <select name={name} defaultValue={label} className={styles.dropdwon} onChange={handleChange}>
            <option value={label}  hidden>{label}</option>
            {children}
        </select>
       
    )
};
export default Dropdown