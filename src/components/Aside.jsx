import React, { useState, useEffect } from "react";
import "./styles/aside.css"
import Carousel from "nuka-carousel"
import ParticlesBackground from "./ParticlesBackground.jsx";
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faArrowRight , faEye} from '@fortawesome/free-solid-svg-icons';
import personSlider1 from "./img/personSlider1.png"

const Aside = ({ togglePopup }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);
    // Función para abrir el CV en una nueva pestaña
    const handleViewCV = () => {
      window.open(`${process.env.PUBLIC_URL}/CV_Luis_Tapia_Ruiz.pdf`, "_blank");
    };
    return(
      <aside className="asideMain" id="asideMain">
          <div className='containerCarousel'>
          <Carousel
            wrapAround={true}    // Esta propiedad permite que el carrusel sea infinito
            autoplay={true}    // Esta propiedad permite que el carrucel avance solo
            renderCenterLeftControls={({ previousSlide }) => (
                <button className="butonControlSlider" onClick={previousSlide}></button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button className="butonControlSlider" onClick={nextSlide}></button>
              )}
          > 
              <div className='slider1'>
                  <div className={`slider1__presentation ${isLoaded ? 'slide-in-left' : ''}`}>
                    <p className="slider1__presentation-text">
                    Bienvenid@, soy <span>Luis Tapia</span>, desarrollador web apasionado por la innovación.
                    </p>
                    <div className="btnSlider">
                      <button onClick={handleViewCV} className="slider1__presentation-button">
                          <div className="animactionBtnContactar"></div>
                          <p>Ver CV</p>
                          <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button onClick={togglePopup} className="slider1__presentation-button">
                          <div className="animactionBtnContactar"></div>
                          <p>Contactar</p>
                          <FontAwesomeIcon icon={faArrowRight}/>
                      </button>
                    </div>
                  </div>
                  <div className={`slider1__containerPerson ${isLoaded ? 'slide-in-right' : ''}`}>
                    <figure className="slider1__containerPerson-figure">
                      <img src={personSlider1} alt="" />
                    </figure>
                  </div>
                  <ParticlesBackground/>
              </div>
          </Carousel>
          </div>
    </aside>
    )
}

export default Aside