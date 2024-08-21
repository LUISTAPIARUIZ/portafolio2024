import './App.css';
import React, { useState} from 'react';
import Cabecera  from "./components/Header.jsx";
import Aside  from "./components/Aside.jsx";
import Skills from "./components/Skills.jsx"
import Proyects from "./components/Proyects.jsx";
import Footer from "./components/Footer.jsx";
import PopUpContact from "./components/PopUpContact.jsx";
import Loader from './components/Loader';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
      setShowPopup(!showPopup);
  };

  return (
    <div className="App">
      <Loader />
      <div className='containerApp'>  
        {/* cabecera principal*/}
        <Cabecera />      
        {/* Seccion de presentacion */}
        <Aside togglePopup={togglePopup}/>  
        <PopUpContact show={showPopup} onClose={togglePopup} />
        {/* Seccion de habilidades */}
        <Skills/>
        {/* Seccion de proyectos */}
        <Proyects/>
        {/* Pie de pagina */}
        <Footer/>
      </div>
    </div>
  );
}

export default App;