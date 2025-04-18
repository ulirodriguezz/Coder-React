import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ItemListcontainer from './components/ItemListContainer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import CartProvider from './components/context/CartProvider.jsx'
import CartDetail from './components/Cart.jsx'
import CheckoutForm from './components/CheckoutForm.jsx'



function App() {
  const msg = "Proximamente podrás ver los productos en esta sección...";
  return (
    
    <BrowserRouter>
      <CartProvider>
        <Navbar/>    
          <Routes>
            <Route  path='/' element={<ItemListcontainer/>}/>
            <Route  path='/*' element={<h1 style={{textAlign:'center'}}>{'UPS :('}<br/>{'No encontramos la página'}</h1>}/>
            <Route exact path='/products/:id' element={<ItemDetailContainer/>}/>
            <Route  path='/products/category/:categName' element={<ItemListcontainer/>}/>
            <Route exact path='/cart' element={<CartDetail/>}/>
            <Route exact path='/checkout' element={<CheckoutForm/>}/>         
          </Routes>
      </CartProvider>

    </BrowserRouter>
    
    
  )
};


export default App
