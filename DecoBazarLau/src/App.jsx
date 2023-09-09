import logo from'./components/NavBar/Logo/logo.png'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Categorias from './components/Categorias/Categorias'
import ItemListContainer from './components/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <>

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <NavBar />
          </header>
          <main>
            <Categorias />
            <ItemListContainer greeting=''/>
          </main>
          <footer></footer>
        </div>

    </>
  )
}

export default App
