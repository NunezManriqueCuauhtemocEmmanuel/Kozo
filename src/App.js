import logo from './resources/KozoRed 1.svg';
import torii from './resources/torii_gate.png';
import './App.css';
import Navbar from './components/navbar';

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Pila from "./pages/Pila.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => navigate("/pila")}>
          Ingresar ahora
        </button>
      </header>
      <section className='kozo__data'>
        <h1>Bienvenido a <span>K<span>ō</span>z<span>ō</span></span></h1>
        <p>Esta es una aplicación que muestra de forma visual el funcionamiento de la estructura de datos: <span className='Estructura__cambio'></span></p>
      </section>
      <div className='imagen'>
        <img src={torii} className='toriigate' alt="" />
      </div>
      <footer></footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pila" element={<Pila />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
