import React from "react";
import logo from "./logo.svg";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <div className="Nav-Header">
        <a href="#Nosotros">
          <img src="logo.png"></img>
        </a>
        <div className="section">
          <a href="#Nosotros">Nosotros</a>
          <a href="#Mision">Misión</a>
          <a href="#Vision">Visión</a>
          <a href="#Contacto">Contacto</a>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="">
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
        <section id="Proyectos">
          <h2>Proyectos</h2>
          <p>
            Aquí puedes ver algunos de los proyectos en los que hemos estado
            trabajando:
          </p>
          {/* Aquí puedes agregar imágenes o descripciones de tus proyectos */}
        </section>
        <section id="Colaboradores">
          <h2>Colaboradores</h2>
          <p>
            Nuestro grupo estudiantil cuenta con la colaboración de varios
            profesionales y expertos en el campo de la tecnología.
          </p>
          {/* Aquí puedes agregar imágenes o descripciones de tus colaboradores */}
        </section>
      </div>
      <div className="Bottom-Bar">
        <a href="#">Inicio</a>
        <a href="#">Sobre nosotros</a>
        <a href="#">Contacto</a>
      </div>
    </div>
  );
}

export default App;
