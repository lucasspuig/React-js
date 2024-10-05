import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  

  return (
    <div>
      <Navbar />
      <ItemListContainer saludo= {"Pagina dedicada a zapatillas nike"}/>
    </div>
  )
}

export default App
