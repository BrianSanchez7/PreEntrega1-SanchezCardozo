import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import '@fontsource-variable/league-spartan';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext'; 
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo={"Bienvenidos a MapaTech"} />}/>
          <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Bienvenidos a MapaTech"} />}/>
          <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>}></Route>

          <Route path="*" element={<ItemListContainer saludo={"Bienvenidos a MapaTech"} />}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
    
  )
}

export default App
