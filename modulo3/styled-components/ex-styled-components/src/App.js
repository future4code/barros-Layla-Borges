import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { Titulo } from './style';
import {Rodape} from './style';
import {Lateral1} from './style';
import {Lateral2} from './style';
import {Remetente} from './style';

function App() {
  return (
    <div>
      <Titulo>LabZap</Titulo>
      <Rodape>2022 Labenu All rights reserved. R. Pais Lemes, 215, Conjunto 820 Pinheiros. CEP 05424150 </Rodape>
    <aside>
      <Lateral1>aaa</Lateral1>
      <Lateral2>bbbbbbbbbbbbbbbb</Lateral2>
    </aside>

      
      <Remetente>
        <label for='remetente'>Remetente:</label>
        <input type = 'text'></input>  
      </Remetente>
    </div>
    

  );
}

export default App;
