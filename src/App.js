import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propieades';
import Estado  from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <section>
      {/* <Componente msg="Hola soy un componente desde una prop"/> */}
      <hr/>
      {/* <Propiedades/> */}
      <hr/>
      {/* <RenderizadoCondicional/> */}
      <hr/>
      {/* <RenderizadoCondicional/> */}
      <hr/>
      <RenderizadoElementos/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>

      </section>      
      </header>

    </div>
  );
}

export default App;
