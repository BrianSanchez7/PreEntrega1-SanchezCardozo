import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import '@fontsource-variable/league-spartan';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Loading from './components/Loading/Loading';

function App() {
  
  return (
    <div>
        <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo={"Bienvenidos a MapaTech"} />}/>
          <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Bienvenidos a MapaTech"} />}/>
          <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
          
          <Route path="*" element={<ItemListContainer saludo={"Bienvenidos a MapaTech"} />}/>
        </Routes>
        

        </BrowserRouter>
    </div>
    
  )
}

export default App
