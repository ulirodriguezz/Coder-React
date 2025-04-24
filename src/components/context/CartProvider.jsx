import { useState } from "react"
import CartContext from "./CartContext"
function CartProvider ({children}){
    const[cart,setCart] = useState([])
    const [cartSize,setCartSize] = useState(0)
    const addProductToCart = (product,quantity)=>{
        console.log('adding...')
        console.log(product)
        //Si el producto ya estaba en el carrito aumento su cantidad
        if(cart.some(prod => prod.id == product.id)){
            let updatedCart = cart;
            let existingPoructIndex = updatedCart.findIndex(prod => prod.id == product.id);
            updatedCart[existingPoructIndex].quantity += quantity;
            setCart(updatedCart);
            setCartSize(prevSize => prevSize + quantity)
            console.log(cart)
        }else{
            console.log('Estoy tratando de cargar')
            product.quantity = quantity;
            console.log(product)
            setCart([...cart,product]);
            setCartSize(prevSize => prevSize + quantity)
        }
    }
    const removeProduct = (product) =>{
        setCart(prevCart => (prevCart.filter(p=>p.id != product.id)))
        setCartSize(prevSize => prevSize - product.quantity)
    }
    const substractProductQuantityBy1 = (product)=>{
    
        let updatedCart = cart;
        let existingPoructIndex = updatedCart.findIndex(prod => prod.id == product.id);
        if( updatedCart[existingPoructIndex].quantity != 1){
            updatedCart[existingPoructIndex].quantity -= 1;
            setCart(updatedCart);
            setCartSize(prevSize => prevSize - 1)
        }     
    }
    return( 
        <CartContext.Provider value={{cart,setCart,addProductToCart,cartSize,removeProduct,substractProductQuantityBy1}}>
            {children}
        </CartContext.Provider>
    )
};
export default CartProvider