import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite <code>src/App.js</code> e salve para recarregar.
        </p>
        <a
          className="App-link"
          href="https://portal.unit.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portal Unit
        </a>
      </header>
    </div>
  );
}

export default App;
