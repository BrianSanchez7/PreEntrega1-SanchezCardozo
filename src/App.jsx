import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import '@fontsource-variable/league-spartan';

function App() {
  
  return (
    <div>
        <NavBar />
        <ItemListContainer saludo={"Bienvenidos a MapaTech"} />
    </div>
    
  )
}

export default App
