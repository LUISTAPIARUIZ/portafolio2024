import React from "react";
import "./styles/footer.css"
import githubIcon from "./img/github.png"
import linkedinIcon from "./img/linkedin.png"

const Footer =()=>{
    return(
        <footer className="footerMain">
            <div className="containerNetworks">
                <a href="" className="containerNetworks__item">
                    <figure className="containerNetworks__item-icon">
                        <img src={githubIcon} alt="icono de github" />
                    </figure>
                </a>
                <a href="" className="containerNetworks__item">
                    <figure className="containerNetworks__item-icon">
                        <img src={linkedinIcon} alt="icono de linkedin" />
                    </figure>
                </a>
            </div>
        </footer>
    )
}
export default Footer