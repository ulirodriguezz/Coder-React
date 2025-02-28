import "../App.css"
import CartWidget from "./CartWidget.jsx";
function Navbar(){
    return(
        <header className="navbar">
            <div className='named-logo'>
                <img className="logo" src="../src/assets/Logo.png" alt="Logo todo futbol" />
                <h1>Todo fútbol</h1>
            </div>
            <CartWidget/>
        </header>
    );
}
export default Navbar;