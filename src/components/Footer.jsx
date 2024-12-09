import React from "react";
import "./styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footerMain">
            <div className="footerContent">
               
                <div className="containerNetworks">
                    <a href="https://github.com/LUISTAPIARUIZ?tab=repositories" target="_blank" rel="noopener noreferrer" className="containerNetworks__item" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} className="containerNetworks__icon" />
                    </a>
                </div>
                <p className="footerText">Desarrollado por Luis Tapia Ruiz © {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;