import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Top-Header">
          <a href="#Nosotros">
            <img src="logo.png"></img>
          </a>
          <div className="section">
            <a href="#Nosotros">Nosotros</a>
            <a href="#Mision">Misión</a>
            <a href="#Vision">Visión</a>
            <a href="#Contacto">Contacto</a>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Sobre nosotros</h1>
        <section id="Nosotros">
          <p>
            Somos un grupo estudiantil que busca impulsar la innovación y el
            desarrollo tecnológico en nuestra comunidad.
          </p>
        </section>
        <section id="Mision">
          <h2>Misión</h2>
          <p>
            Nuestra misión es fomentar la educación y el intercambio de
            conocimientos entre los estudiantes de la región.
          </p>
        </section>
        <section id="Vision">
          <h2>Visión</h2>
          <p>
            En el futuro, queremos ser una plataforma de referencia para la
            formación y el desarrollo de profesionales en tecnología.
          </p>
        </section>
        <section id="Contacto">
          <h2>Contacto</h2>
          <p>
            Si tienes alguna pregunta o sugerencia, no dudes en ponerte en
            contacto con nosotros.
          </p>
          <a
            className="App-link"
            href="mailto:info@grupoestudiantil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@grupoestudiantil.com
          </a>
        </section>
      </header>
    </div>
  );
}

export default App;
