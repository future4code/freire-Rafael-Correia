import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import fotoUsuario from './img/perfil-img.jfif';
import vejaMaisIcon from './img/view_icon.svg';
import aluraLogo from './img/alura-logo.png';
import emailIcon from './img/email_icon.svg';
import adressIcon from './img/adress_icon.svg';
import reactIcon from './img/react_icon.webp';
import cssIcon from './img/css_icon.svg';
import jsIcon from './img/js_icon.svg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoUsuario}
          nome="Rafael Chagas Correia" 
          descricao="Oi, eu sou o Rafael. Sou estudante da Labenu. Estou aprendendo desenvolvimento Web Fullstack, gosto de ler, de games e assistir séries."
        />
        
        <ImagemButton 
          imagem={vejaMaisIcon} 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={emailIcon}
          nome="Email: "
          dado="rafaelFake@gmail.com.br"
        />
        <CardPequeno
          imagem={adressIcon}
          nome="Endereço: "
          dado="Rua Labenu 99, Cep: 12345-678"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante do curso Web Full Stack Integral" 
        />
        
        <CardGrande 
          imagem={aluraLogo} 
          nome="Alura Cursos" 
          descricao="Participante do Programa ONE e Imersão DEV" 
        />
      </div>

      <div className="page-section-container">
        <h2>Competências</h2>
        <CardGrande 
          imagem={reactIcon} 
          nome="React" 
          descricao="Iniciante em React, aprendendo a as estruturas básicas" 
        />
        
        <CardGrande 
          imagem={jsIcon} 
          nome="JavaScript" 
          descricao="Bom crontrole e conhecimento em JavaScript e seus elementos" 
        />

        <CardGrande 
          imagem={cssIcon} 
          nome="CSS3" 
          descricao="Familiaridade com estilização de sites em CSS3" 
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
