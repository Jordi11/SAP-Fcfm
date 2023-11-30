// Gallery.jsx

import React, { useState } from "react";
import "./scss/Gallery.scss";

const Gallery = () => {
  // Ejemplo de datos de imágenes con texto asociado
  const images = [
    { path: "./img/imagen1.jpg", text: "AWS Community Day 2023" },
    { path: "./img/imagen2.jpg", text: "Texto de la imagen 2" },
    { path: "./img/imagen3.jpg", text: "CISI 2023" },
    { path: "./img/imagen4.jpg", text: "Texto de la imagen 4" },
    { path: "./img/imagen5.jpg", text: "Texto de la imagen 5" },
    // Agrega más imágenes según sea necesario
  ];

  // Estado para controlar la visibilidad del texto
  const [activeIndex, setActiveIndex] = useState(null);

  // Función para manejar el evento onMouseEnter
  const handleActive = (index) => {
    setActiveIndex(index);
  };

  // Función para manejar el evento onMouseLeave
  const handleInactive = () => {
    setActiveIndex(null);
  };

  return (
    <div className="gallery-container">
      <h2>Galeria </h2>
      <div className="row">
        {images.map((image, index) => (
          <div
            key={index}
            className="col-md-3"
            onMouseEnter={() => handleActive(index)}
            onMouseLeave={handleInactive}
          >
            <div className="imag">
              <img
                src={image.path}
                alt={`Imagen ${index + 1}`}
                className="img-fluid"
              />
              <div
                className={`image-text ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                {image.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
