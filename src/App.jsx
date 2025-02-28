import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ItemListcontainer from './components/ItemListContainer.jsx'
function App() {

  
  return (
    <>
      <Navbar/>
      <ItemListcontainer msj="Proximamente podrás ver los productos en esta sección..."/>
    </>
    
  )
};


export default App
