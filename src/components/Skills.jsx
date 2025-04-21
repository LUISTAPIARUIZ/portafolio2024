import React , { useEffect } from "react";
import "./styles/skills.css"
import iconHtml from "./img/html-5.png"
import iconCSS from "./img/css.png"
import iconReact from "./img/React.png"
import iconJs from "./img/js.png"
import iconPython from "./img/Python.png"
import iconPHP from "./img/PHP.png"
import iconLaravel from "./img/laravel.png"
import iconPosgrestSQL from "./img/Postgresql.png"
import useIntersection from "./useIntersection.jsx";

const skillData = [
  { id: 1, title: 'HTML 5', icon: iconHtml , progress: 100, color: '#E44D26'},
  { id: 2, title: 'CSS 3', icon: iconCSS , progress: 80, color: '#1572B6'},
  { id: 3, title: 'Javascript', icon: iconJs , progress: 70, color: '#F7DF1E'},
  { id: 4, title: 'React', icon: iconReact , progress: 70, color: '#61DAFB'},
  { id: 5, title: 'Python', icon: iconPython, progress: 50, color: '#3776AB'},
  { id: 6, title: 'PosgrestSql', icon: iconPosgrestSQL, progress: 60, color: '#336791'},
  { id: 7, title: 'PHP', icon: iconPHP, progress: 60, color: '#777BB4'},
  { id: 8, title: 'Laravel', icon: iconLaravel, progress: 70, color: '#FF3F35FF'},
];

 const Skills = () =>{
  
    const [elementoRef,isIntersecting]= useIntersection({
      threshold:0.3,
    });
    useEffect(() => {
      if (isIntersecting) {
        const cards = document.querySelectorAll('#carousel .skillcard');
        const totalCards = cards.length;
        
        const angleStep = 360 / totalCards;
        
        cards.forEach((card, index) => {
          const angle = angleStep * index;
          card.style.transform = `rotateY(${angle}deg) translateZ(500px)`;
          card.style.webkitTransform = `rotateY(${angle}deg) translateZ(500px)`;
          card.style.mozTransform = `rotateY(${angle}deg) translateZ(500px)`;
          card.style.msTransform = `rotateY(${angle}deg) translateZ(500px)`;
          card.style.oTransform = `rotateY(${angle}deg) translateZ(500px)`;
        });
      }
    }, [isIntersecting, skillData.length]);
    return(
        <section className='containerSkills' id="containerSkills" >
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
                  {skillData.map(skill => (
                    <div className='skillcard' key={skill.id}>
                      <div className="cardDescription">
                        <figure className="cardDescription__figure">
                          <img src={skill.icon} alt={`icon ${skill.title}`} />
                        </figure>
                        <h3>{skill.title}</h3>
                      </div>
                      <div className="cardBar">
                        <div className="cardBar_container">
                          <span className="cardBar_container-all"></span>
                          <span className="cardBar_container-partial" style={{ width: `${skill.progress}%`, backgroundColor: skill.color }}></span>
                        </div>
                        <p>{skill.progress ? `${skill.progress}%` : ''}</p>
                      </div>
                    </div>
                  ))}
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