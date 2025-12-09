import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Loader from "./components/loader";
import Pila from "./pages/Pila";
import Inicio from "./pages/kozoInicio";
import Navbar from "./components/navbar";
import logo from './resources/KozoRed 1.svg';
import torii from './resources/torii_gate.png';
import "./styles/transicion.css";
import './App.css';

function Home() {
  const navigate = useNavigate();

  const [showLoader, setShowLoader] = useState(true);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
      setShowTransition(true);

      setTimeout(() => setShowTransition(false), 4000);
    }, 0);

    return () => clearTimeout(loaderTimer);
  }, []);

  function spawnParticles(e) {
    const colors = ["#D93056", "#4271CD"];
    const amount = 19;

    const btn = e.target;
    const rect = btn.getBoundingClientRect();
    const radius = rect.width * 0.6; 

    for (let i = 0; i < amount; i++) {
      const particle = document.createElement("span");
      particle.classList.add("particle");

      particle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

      const angle = (i / amount) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      particle.style.left = `${rect.width / 2}px`;
      particle.style.top = `${rect.height / 2}px`;

      particle.style.setProperty("--dx", `${x}px`);
      particle.style.setProperty("--dy", `${y}px`);

      btn.appendChild(particle);

      setTimeout(() => particle.remove(), 900);
    }
  }

  if (showLoader) return <Loader />;

  return (
    <>
      {showTransition && <div className="entry-screen"></div>}

      <div className="page-content">
        <Navbar />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h5>Contruye estructuras de datos de manera dinamica</h5> */}
          <button className="particle-btn" onMouseEnter={(e) => spawnParticles(e)} onClick={() => navigate("/pila")}> Ingresar ahora </button>
        </header>

        <section className="kozo__data">
          <h1>Bienvenido a <span>K<span>ō</span>z<span>ō</span></span></h1>
          <p>Esta es una aplicación que muestra de forma visual el funcionamiento de la estructura de datos: <span className="Estructura__cambio"></span></p>
        </section>

        <div className="imagen">
          <img src={torii} className="toriigate" alt="" />
        </div>

        <footer></footer>
      </div>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowTransition(true);

      setTimeout(() => setShowTransition(false), 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      {showTransition && <div className="entry-screen"></div>}

      <div className="page-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pila" element={<Pila />} />
            <Route path="/Inicio" element={<Inicio />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
