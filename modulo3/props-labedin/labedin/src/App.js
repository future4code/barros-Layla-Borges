import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import layla from './components/CardGrande/layla.jpg';
import labenu from './components/labenu.png'
import CardPequeno from './components/CardPequeno/CardPequeno';
import email2 from './components/CardPequeno/email2.png'
import gps2 from './components/CardPequeno/gps2.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={layla} 
          nome="Layla Borges" 
          descricao="Oi, eu sou a Layla, estudante do Curso Web Full Stack na Labenu e adoro tecnologia!"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>


      <div className="page-section-container">
        <CardPequeno 
        imagem={email2}
        email="layla***@gmail.com"
        />
      </div>


      <div className="page-section-container">
        <CardPequeno 
        imagem={gps2}
          endereço="Avenida Escola Politécnica...***"
        />
      </div>



      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={labenu} 
          nome="Labenu" 
          descricao="Customer Experience na Labenu" 
        />
      </div>


      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
