import imagem from './foto_layla.jpg';
import './App.css';

function App() {
  const valor = "Olá, eu sou a Layla! Seja bem-vindo, bem-vinda!"
  function mensagem(){
    alert("Boa noite!")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{valor}</h1>
        <img src={imagem} className="Imagem_layla" alt="fotografia da Layla"/>
        <a href="https://labenu.com.br"
          target="_blank">
          Learn React
        </a>
        <p> </p>
        <button onClick={mensagem}>Clique Aqui</button>
       
      </header>
    </div>
  );
}

export default App;
