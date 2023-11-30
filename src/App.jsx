import React from "react";
import "./scss/App.scss";

import Gallery from "./Gallery"; // Asegúrate de tener la ruta correcta
import Footeer from "./Footer";
function App() {
  return (
    <div className="App">
      <div className="Nav-Header">
        <a href="#">
          <img src="logo.png"></img>
        </a>
        <div className="section">
          <a href="#Nosotros">Nosotros</a>
          <a href="#Mision">Misión</a>
          <a href="#Vision">Visión</a>
          <a href="#Contacto">Contacto</a>
        </div>
      </div>
      <div className="Body">
        <h2>Sobre nosotros</h2>
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
        <section id="Contacto" className="pb-3">
          <Gallery title="Mi Galería" />
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
      <Footeer />
    </div>
  );
}

export default App;
