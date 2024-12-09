import React, { useState, useEffect } from "react";
import "./styles/proyects.css"
import imgCursosFemulp from "./img/Projects/CursosFemulp.png"
import  imgFemulp from "./img/Projects/Femulp.png"
import  imgWebConstruction from "./img/Projects/webConstruction1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faPhp, faBootstrap ,faNodeJs,faReact} from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faEye, faTimes, faPlay } from '@fortawesome/free-solid-svg-icons'

const Proyects = () => {
  const [popupAbierto, setPopupAbierto] = useState(false);
  const [proyectoActual, setProyectoActual] = useState(null);
  const [visibleProyectos, setVisibleProyectos] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const proyectosElements = document.querySelectorAll('.ProyectsMain__img');
      proyectosElements.forEach((element, index) => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 50) {
          setVisibleProyectos(prev => {
            if (!prev.includes(index)) {
              return [...prev, index];
            }
            return prev;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Comprueba la visibilidad inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const proyectos = [
    {
      imagen: imgCursosFemulp,
      titulo: "Plataforma Cursos",
      descripcion: "Plataforma de cursos virtuales con seguimiento de progreso y exámenes aleatorios. Esta plataforma está hecha en PHP puro y BD MySQL, y las tecnologías básicas de frontend. Inicialmente fue un desafío el modelo de negocio; sin embargo, logré superar ese reto y aquí se encuentra el resultado. Actualmente se encuentra en una etapa temprana.",
      enlace: "https://femulp.org/cursosFemulp/",
      tecnologias: [
        { icon: faHtml5, color: "#E34F26" },
        { icon: faCss3Alt, color: "#1572B6" },
        { icon: faJsSquare, color: "#F7DF1E" },
        { icon: faPhp, color: "#777BB4" },
        { icon: faDatabase, color: "#4479A1" },
        { icon: faBootstrap, color: "#7952B3" }
      ],
      credenciales: {
        correo: "visita@femulp.com",
        contrasena: "visitaFemulp"
      }
    },
    {
      imagen: imgFemulp,
      titulo: "FEMULP WEB",
      descripcion: "Inicialmente, esta plataforma era una página estática. Con mis conocimientos básicos de backend y al identificar las necesidades del lugar donde realizaba mis prácticas, decidí darle dinamismo y una personalización adecuada para el público objetivo. Implementé formularios que enviaban correos personalizados para una mejor atención al público, con registros visibles en la administración. Uno de los mayores desafíos fue crear una sección de noticias totalmente dinámica y personalizable.",
      enlace: "https://femulp.org",
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
      imagen: imgWebConstruction,
      titulo: "PNP BI En contruccion",
      descripcion: "Esta plataforma está enfocada en centralizar el análisis de denuncias de la Policía Nacional del Perú. Este proyecto es uno de los retos más grandes a los que me estoy enfrentando. Pronto se encontrará disponible.",
      enlace: "#",
      tecnologias: [
        { icon: faReact, color: "#2490DEFF" },
        { icon: faNodeJs, color: "#19AE26FF" },
        { icon: faDatabase, color: "#4479A1" },
      ]
    }
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
    <section className="proyects" id="proyects">
      <div className='containerProyects'>
        <h3 className='ProyetsTitle'>PROYECTOS</h3>
        <div className='ProyectsMain'>
          {proyectos.map((proyecto, index) => (
            <div 
              key={index} 
              className={`ProyectsMain__img ${visibleProyectos.includes(index) ? 'visible' : ''}`}
            >
              <img className="ProyectsMain__img--img" src={proyecto.imagen} alt={proyecto.titulo} />
              <h3 className="ProyectsMain__Titulo">{proyecto.titulo}</h3>
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
    <div className={`ProyectsMain__popup`}>
      <div className={`ProyectsMain__popup-content open`}>
        <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={cerrarPopup} />
        <div className="popup-image-container">
          <img src={proyectoActual.imagen} alt={proyectoActual.titulo} />
          <div className="popup-info">
            <h2>{proyectoActual.titulo}</h2>
            <p>{proyectoActual.descripcion}
              <br />

              {/* Validación si existen credenciales */}
              {proyectoActual.credenciales && (
                <ul>
                  <li><strong>Correo:</strong> {proyectoActual.credenciales.correo}</li>
                  <li><strong>Contraseña:</strong> {proyectoActual.credenciales.contrasena}</li>
                </ul>
              )}
            </p>

            <div className="popup-technologies">
              {proyectoActual.tecnologias.map((tech, i) => (
                // Si la tecnología es una imagen, la renderizamos como <img>
                typeof tech.icon === 'string' ? (
                  <img key={i} src={tech.icon} alt="tech" className="tech-image" style={{ color: tech.color, width: '30px', height: '30px' }} />
                ) : (
                  // Si es un ícono de FontAwesome, lo renderizamos como <FontAwesomeIcon>
                  <FontAwesomeIcon
                    key={i}
                    icon={tech.icon}
                    className="tech-icon"
                    style={{ color: tech.color }}
                  />
                )
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