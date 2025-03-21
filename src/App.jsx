import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ItemListcontainer from './components/ItemListContainer.jsx'
function App() {
  const msg = "Proximamente podrás ver los productos en esta sección...";
  return (
    <>
      <Navbar/>
      <ItemListcontainer/>
    </>
    
  )
};


export default App
