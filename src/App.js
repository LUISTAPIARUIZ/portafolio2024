import './App.css';
import Cabecera  from "./components/Header.jsx";
import Aside  from "./components/Aside.jsx";
import Skills from "./components/Skills.jsx"
import Proyects from "./components/Proyects.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      
      <div className='containerApp'>  
        {/* cabecera principal*/}
        <Cabecera />      
        {/* Seccion de presentacion */}
        <Aside/>
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
