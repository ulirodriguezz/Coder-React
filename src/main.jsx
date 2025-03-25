import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import ItemDetail from './components/ItemDetail.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route exact path='/*' element={<h1>No va viejo</h1>}/>
      <Route exact path='/products/:id' element={<ItemDetail/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
