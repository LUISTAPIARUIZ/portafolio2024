import React, { useState } from "react";
import "./styles/proyects.css"
import imgCursosFemulp from "./img/Projects/CursosFemulp.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faPhp, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faEye, faTimes, faPlay } from '@fortawesome/free-solid-svg-icons'

const Proyects = () => {
  const [popupAbierto, setPopupAbierto] = useState(false);
  const [proyectoActual, setProyectoActual] = useState(null);

  const proyectos = [
    {
      imagen: imgCursosFemulp,
      titulo: "Proyecto 1",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      enlace: "https://ejemplo.com/proyecto1",
      tecnologias: [
        { icon: faHtml5, color: "#E34F26" },
        { icon: faCss3Alt, color: "#1572B6" },
        { icon: faJsSquare, color: "#F7DF1E" },
        { icon: faPhp, color: "#777BB4" },
        { icon: faDatabase, color: "#4479A1" },
        { icon: faBootstrap, color: "#7952B3" }
      ]
    },
    {
      imagen: imgCursosFemulp,
      titulo: "Proyecto 1",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      enlace: "https://ejemplo.com/proyecto1",
      tecnologias: [
        { icon: faHtml5, color: "#E34F26" },
        { icon: faCss3Alt, color: "#1572B6" },
        { icon: faJsSquare, color: "#F7DF1E" },
        { icon: faPhp, color: "#777BB4" },
        { icon: faDatabase, color: "#4479A1" },
        { icon: faBootstrap, color: "#7952B3" }
      ]
    },
    {
      imagen: imgCursosFemulp,
      titulo: "Proyecto 1",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      enlace: "https://ejemplo.com/proyecto1",
      tecnologias: [
        { icon: faHtml5, color: "#E34F26" },
        { icon: faCss3Alt, color: "#1572B6" },
        { icon: faJsSquare, color: "#F7DF1E" },
        { icon: faPhp, color: "#777BB4" },
        { icon: faDatabase, color: "#4479A1" },
        { icon: faBootstrap, color: "#7952B3" }
      ]
    },
    {
      imagen: imgCursosFemulp,
      titulo: "Proyecto 1",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      enlace: "https://ejemplo.com/proyecto1",
      tecnologias: [
        { icon: faHtml5, color: "#E34F26" },
        { icon: faCss3Alt, color: "#1572B6" },
        { icon: faJsSquare, color: "#F7DF1E" },
        { icon: faPhp, color: "#777BB4" },
        { icon: faDatabase, color: "#4479A1" },
        { icon: faBootstrap, color: "#7952B3" }
      ]
    },
    {
      imagen: imgCursosFemulp,
      titulo: "Proyecto 1",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      enlace: "https://ejemplo.com/proyecto1",
      tecnologias: [
        { icon: faHtml5, color: "#E34F26" },
        { icon: faCss3Alt, color: "#1572B6" },
        { icon: faJsSquare, color: "#F7DF1E" },
        { icon: faPhp, color: "#777BB4" },
        { icon: faDatabase, color: "#4479A1" },
        { icon: faBootstrap, color: "#7952B3" }
      ]
    },
    // ... añade más proyectos aquí
  ];

  const abrirPopup = (proyecto) => {
    setProyectoActual(proyecto);
    setPopupAbierto(true);
  };

  const cerrarPopup = () => {
    setPopupAbierto(false);
  };

  return (
    <section className='proyects'>
      <div className='containerProyects'>
        <h3 className='ProyetsTitle'>PROYECTOS</h3>
        <div className='ProyectsMain'>
          {proyectos.map((proyecto, index) => (
            <div key={index} className="ProyectsMain__img">
              <img className="ProyectsMain__img--img" src={proyecto.imagen} alt={proyecto.titulo} />
              <div className="ProyectsMain__overlay">
                <FontAwesomeIcon icon={faEye} className="view-icon" onClick={() => abrirPopup(proyecto)} />
              </div>
              <div className="ProyectsMain__technologies">
                {proyecto.tecnologias.map((tech, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={tech.icon}
                    className="tech-icon"
                    style={{ color: tech.color }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {popupAbierto && proyectoActual && (
        <div className="ProyectsMain__popup">
          <div className="ProyectsMain__popup-content">
            <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={cerrarPopup} />
            <div className="popup-image-container">
              <img src={proyectoActual.imagen} alt={proyectoActual.titulo} />
              <div className="popup-info">
                <h2>{proyectoActual.titulo}</h2>
                <p>{proyectoActual.descripcion}</p>
                <div className="popup-technologies">
                  {proyectoActual.tecnologias.map((tech, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={tech.icon}
                      className="tech-icon"
                      style={{ color: tech.color }}
                    />
                  ))}
                </div>
                <a href={proyectoActual.enlace} target="_blank" rel="noopener noreferrer" className="ver-proyecto-btn">
                  <FontAwesomeIcon icon={faPlay} /> Ver proyecto
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Proyects