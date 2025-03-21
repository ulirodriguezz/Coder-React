function CartWidget(){
    return(
        <div id="cart-widget">
            <h4 id="cart-icon">🛒</h4>
            {/* Poría incluir el numero como una prop */}
            <span id="cart-bubble">1</span>
        </div>
    );
}
export default CartWidget