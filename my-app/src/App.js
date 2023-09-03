import logo from'./components/NavBar/Logo/logo.png'
import './App.css';
import NavBar from './components/NavBar/NavBar.css'
import Categorias from './components/Categorias/Categorias.css'
import ItemListContainer from './components/ItemListContainer.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
      </header>
      <main>
        <Categorias />
        <ItemListContainer greeting='Rafael'/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
