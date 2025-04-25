import "../App.css"
import { getAllCategoryNames } from "../firebase/db.js";
import CartWidget from "./CartWidget.jsx";
import Dropdown from "./common/Dropdown.jsx";
import DropdwonItem from "./common/DropdownItem.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

function Navbar() {
    const [categoryList, setCategoryList] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        getAllCategoryNames()
            .then(data => setCategoryList(data))
    }, []);

    function navigateToCategory(e) {
        const URL = `products/category/${e.currentTarget.value}`
        console.log(URL)
        navigate(URL)
    }
    return (
        <header className="navbar">
            <Link to={'/'}>
                <div className='named-logo'>
                    <img className="logo" src="../src/assets/Logo.png" alt="Logo todo futbol" />
                    <h1>URcommerce</h1>
                </div>
            </Link>
            <Dropdown name={'Categorías'} onChange={navigateToCategory} label={'Categorías'}>
                {categoryList.map((categName) => (

                    <DropdwonItem value={categName} key={categName}>
                        {categName}
                    </DropdwonItem>
                ))}
            </Dropdown>
            <CartWidget />
        </header>
    );
}
export default Navbar;