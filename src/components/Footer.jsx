import React from "react";
import "./styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer =()=>{
    return(
        <footer className="footerMain">
            <div className="containerNetworks">
                <a href="https://github.com/tu-usuario-de-github" target="_blank" rel="noopener noreferrer" className="containerNetworks__item">
                    <figure className="containerNetworks__item-icon">
                        <FontAwesomeIcon icon={faGithub} />
                    </figure>
                </a>
                <a href="https://www.linkedin.com/in/tu-perfil-de-linkedin" target="_blank" rel="noopener noreferrer" className="containerNetworks__item">
                    <figure className="containerNetworks__item-icon">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </figure>
                </a>
            </div>
        </footer>
    )
}
export default Footer