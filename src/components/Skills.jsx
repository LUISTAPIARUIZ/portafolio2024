import React, {  useState } from "react";
import "./styles/skills.css"
import iconHtml from "./img/html-5.png"
import iconCSS from "./img/css.png"
import iconReact from "./img/React.png"
import iconJs from "./img/js.png"
import iconPython from "./img/Python.png"
import iconPosgrestSQL from "./img/Postgresql.png"
import useIntersection from "./useIntersection.jsx";

 const Skills = () =>{
    const [elementoRef,isIntersecting]= useIntersection({
      threshold:0.3,
    });
    return(
        <section className='containerSkills' id="particles-js">
          <div className='Skills'>
            <div className='titleSkills' >
              <h3> Habilidades</h3>
            </div>
            <div className='carrouselSkills' ref={elementoRef}>
              <div class="container" style={{
                bottom: isIntersecting ? '0' : '-50%',
                opacity: isIntersecting ? '1' : '0',
                transition: 'bottom 1s ease, opacity 1s ease' // Transición con duración de 2 segundos
              }}>
                <div id="carousel">
                
                  <div className='skillcard'>
                      <div className="cardDescription">
                        <figure className="cardDescription__figure">
                          <img src={iconHtml} alt="icon Html5" />
                        </figure>
                        <h3>HTML 5</h3>
                      </div>
                      <div className="cardBar">
                        <div className="cardBar_container">
                          <span className="cardBar_container-all"></span>
                          <span className="cardBar_container-partial"></span>
                        </div>
                        <p></p>
                      </div>
                  </div>
                  <div className='skillcard'>
                      <div className="cardDescription">
                        <figure className="cardDescription__figure">
                          <img src={iconCSS} alt="icon CSS" />
                        </figure>
                        <h3>CSS 3</h3>
                      </div>
                      <div className="cardBar">
                        <div className="cardBar_container">
                          <span className="cardBar_container-all"></span>
                          <span className="cardBar_container-partial"></span>
                        </div>
                        <p></p>
                      </div>
                  </div>
                  <div className='skillcard'>
                      <div className="cardDescription">
                        <figure className="cardDescription__figure">
                          <img src={iconJs} alt="icon Javascript" />
                        </figure>
                        <h3>Javascript</h3>
                      </div>
                      <div className="cardBar">
                        <div className="cardBar_container">
                          <span className="cardBar_container-all"></span>
                          <span className="cardBar_container-partial"></span>
                        </div>
                        <p></p>
                      </div>
                  </div>
                  <div className='skillcard'>
                      <div className="cardDescription">
                        <figure className="cardDescription__figure">
                          <img src={iconReact} alt="icon react" />
                        </figure>
                        <h3>React</h3>
                      </div>
                      <div className="cardBar">
                        <div className="cardBar_container">
                          <span className="cardBar_container-all"></span>
                          <span className="cardBar_container-partial"></span>
                        </div>
                        <p></p>
                      </div>
                  </div>
                  <div className='skillcard'>
                      <div className="cardDescription">
                        <figure className="cardDescription__figure">
                          <img src={iconPython} alt="icon Python" />
                        </figure>
                        <h3>Python</h3>
                      </div>
                      <div className="cardBar">
                        <div className="cardBar_container">
                          <span className="cardBar_container-all"></span>
                          <span className="cardBar_container-partial"></span>
                        </div>
                        <p></p>
                      </div>
                  </div>
                  <div className='skillcard'>
                      <div className="cardDescription">
                        <figure className="cardDescription__figure">
                          <img src={iconPosgrestSQL} alt="icon PosgrestSql" />
                        </figure>
                        <h3>PosgrestSql</h3>
                      </div>
                      <div className="cardBar">
                        <div className="cardBar_container">
                          <span className="cardBar_container-all"></span>
                          <span className="cardBar_container-partial"></span>
                        </div>
                        <p>80%</p>
                      </div>
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
          <div className='ContainerTransition'>
              <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M-0.00,49.85 C263.77,148.12 260.38,49.69 500.00,49.85 L502.48,160.91 L-11.63,162.88 Z"   fill="#081022">
                </path>
              </svg>
          </div>






           
        </section>

        
    )
 }

 export default Skills