import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import {Titulo} from './style'
import {Remetente} from './style'
import {Mensagem} from './style'
import {Enviar} from './style'
import {Formulario} from './style'


function App() {
  return (
    <div className="App">


      <header>
        <Titulo>WhatsLab</Titulo>
      </header>



      <main>

      </main>

        
          <Formulario>
            <Remetente>
              <input type = 'text'></input>
            </Remetente>
            <Mensagem>
              <input type = 'text'></input>
            </Mensagem>
            <Enviar>
              <button>Enviar</button>
            </Enviar>
          </Formulario>



    </div>
    
  );
}

export default App;
