import React from "react";
import "./scss/App.scss";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const email = "sap@uanl.edu.mx";

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
      {/* footer */}
      <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-5">
              <h2 className="h2 text-success border-bottom pb-3 border-light ">
                <img src="logo.png" className="footer-logo" />
              </h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <i className="fas fa-map-marker-alt fa-fw"></i>
                  UANL{" "}
                </li>
                <li>
                  <i className="fa fa-phone fa-fw"></i>
                  <a className="text-decoration-none" href="tel:010-020-0340">
                    010-020-0340
                  </a>
                </li>
                <li>
                  <i className="fa fa-envelope fa-fw"></i>
                  <a className="text-decoration-none" href="${email}">
                    {email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 pt-5">
              <h2 className="h2 text-light border-bottom pb-3 border-light">
                Products
              </h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <a className="text-decoration-none" href="#">
                    Luxury
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Sport Wear
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Men's Shoes
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Women's Shoes
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Popular Dress
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Gym Accessories
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Sport Shoes
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 pt-5">
              <h2 className="h2 text-light border-bottom pb-3 border-light">
                Further Info
              </h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <a className="text-decoration-none" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Shop Locations
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row text-light mb-4">
            <div className="col-12 mb-3">
              <div className="w-100 my-3 border-top border-light"></div>
            </div>
            <div className="">
              <div className="footer-icons">
                <span>
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="http://facebook.com/"
                  >
                    <FaFacebookF />
                  </a>
                </span>
                <span>
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <FaInstagram />
                  </a>
                </span>
                <span>
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="https://twitter.com/"
                  >
                    <BsTwitterX />
                  </a>
                </span>

                <span>
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="https://www.linkedin.com/"
                  >
                    <FaLinkedinIn />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 bg-black py-3">
          <div className="container">
            <div className="row pt-2">
              <div className="col-12">
                <p className="text-left text-light">
                  Copyright &copy; 2023 SAP | Designed by
                  <a
                    rel="sponsored"
                    href=""
                    target="_blank"
                    style={{ marginLeft: "5px" }}
                  >
                    JorD
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
