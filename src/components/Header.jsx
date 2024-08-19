import React from "react";
import "./styles/header.css";
import iconLogoLuDev from "./img/LogoLuDev.png";

const Header = ()=>{
    return(
        <div>
            <input type="checkbox" name="" id="checkDropDownHeader" />
            <header className='headerDropDown'>
                <figure className='headerDropDown__logo'>
                    <img src={iconLogoLuDev} alt="" />
                </figure>
                <ul className='headerDropDown__list'>
                    <li className='headerDropDown__list-element'>
                        <div className="iconHome"></div>
                        <h3>Inicio</h3>
                    </li>
                    <li className='headerDropDown__list-element'>
                        <div className="iconSkills"></div>
                        <h3>Habilidades</h3>
                    </li>
                    <li className='headerDropDown__list-element'>
                        <div className="iconProyects"></div>
                        <h3>Proyectos</h3>
                    </li>
                </ul>
                <div className="headerDropDown__btn">
                    
                    <label htmlFor="checkDropDownHeader">
                        <div className="headerDropDown__btn-open"></div>
                        <div className="headerDropDown__btn-clouse"></div>
                    </label>
                </div>
            </header>
        </div>
    )
}

export default Header;