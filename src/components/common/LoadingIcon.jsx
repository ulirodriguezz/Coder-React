import styles from "../../styles/LoadingIcon.module.css"
function LoadingIcon({ hidden }) {
    if (!hidden) {
        return (
            <div id={styles.loadingIcon}>
                <img src="../src/assets/loading-icon.png" alt="Loadign icon" />
                <h4>Cargando...</h4>
            </div>
        )
    }
    else {
        return <></>
    }

};
export default LoadingIcon