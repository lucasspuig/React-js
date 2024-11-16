import Navbar from './componentes/NavBar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/Checkout'
import './App.css'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <CartProvider>
          <Navbar />

          <Routes>
              <Route path='/' element={<ItemListContainer saludo= {"Pagina dedicada a zapatillas nike"} /> }/>
              <Route path='/category/:idcategory'element={<ItemListContainer saludo= {"Pagina dedicada a zapatillas nike"}  />} />
              <Route path='/detail/:idProducto' element={ <ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path= "/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App