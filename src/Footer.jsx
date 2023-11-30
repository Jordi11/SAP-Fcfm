import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "./scss/Footer.scss";

const Footeer = () => {
  const email = "sap@uanl.edu.mx";

  return (
    <footer className="bg-dark" id="tempaltemo_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-success border-bottom border-light">
              <a href="" style={{ margin: "none" }}>
                <img src="logo.png" className="footer-logo" alt="Logo" />
              </a>
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <a className="text-decoration-none" href="https://www.uanl.mx/">
                  UANL
                </a>
              </li>
              <li className="Direccion">
                Av. Universidad s/n. Ciudad Universitaria San Nicolás de los
                Garza, C.P. 66451 Nuevo León, México
              </li>
              <li>
                <i className="fa fa-phone fa-fw"></i>
                <a className="text-decoration-none" href="tel:010-020-0340">
                  010-020-0340
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none"
                  href="https://www.fcfm.uanl.mx/"
                >
                  FCFM
                </a>
              </li>
              <li>
                <i className="fa fa-envelope fa-fw"></i>
                <a className="text-decoration-none" href={`mailto:${email}`}>
                  {email}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">
              Utilidades
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <a className="text-decoration-none" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Acerca de nosotros
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Miembros
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Eventos
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Proyectos
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="#">
                  Preguntas Frecuentes
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
                Copyright &copy; 2023 SAP | Designed by{" "}
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
  );
};

export default Footeer;
