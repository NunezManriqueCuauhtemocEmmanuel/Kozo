import React, { useState, useEffect } from "react";
import "../styles/pila.css";
import "../styles/transicion.css";
import "../styles/preloader.css";
import Sidebar from '../components/sidebar';
import Swal from "sweetalert2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBattery, faCopy, faTrash } from "@fortawesome/free-solid-svg-icons";

const mensajes = [
    "Optimizando la pila...",
    "Organizando los nodos...",
    "Acomodando cada elemento...",
    "Preparando la memoria...",
    "Apilando instrucciones...",
    "Iniciando estructura LIFO...",
    "Encendiendo el compilador...",
    "Cargando funciones...",
    "Empujando elementos...",
    "Limpiando basura...",
    "Validando punteros...",
    "Configurando variables...",
    "Alineando elementos...",
    "Cargando interfaz...",
    "Preparando datos...",
    "Ensamblando operaciones...",
    "Verificando estados...",
    "Comprobando consistencia...",
    "Apilando contenido...",
    "Cargando experiencia..."
];

const Pila = () => {

    const [loader, setLoader] = useState(true);
    const [showTransition, setShowTransition] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        setMensaje(mensajes[Math.floor(Math.random() * mensajes.length)]);

        const timer1 = setTimeout(() => {
            setLoader(false);
            setShowTransition(true);
        }, 1500);

        const timer2 = setTimeout(() => {
            setShowTransition(false);
            setShowContent(true);
        }, 1200 + 1200);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    const [stack, setStack] = useState([]);
    const [name, setName] = useState("");
    const [removeIndex, setRemoveIndex] = useState(null);
    const [toggle, setToggle] = useState(true);
    const [cCode, setCCode] = useState("");

    function push() {
        if (name.trim() === "") return;
        setStack([...stack, name]);
        setCCode(prev => prev + `// Insertar en la pila\npush(${name});\n\n`);
        setName("");
    }

    function pop() {
        if (stack.length === 0) return;
        const index = stack.length - 1;
        const value = stack[index];
        setRemoveIndex(index);
        setToggle(!toggle);

        setTimeout(() => {
            setStack(prev => prev.slice(0, -1));
            setCCode(prev => prev + `// Eliminar de la pila\npop(); // elemento removido: ${value}\n\n`);
            setRemoveIndex(null);
        }, 450);
    }

    function clearStack() {
        setStack([]);
        setCCode(prev => prev + "// Vaciar pila\nclear();\n\n");
    }

    function copyCode() {
        navigator.clipboard.writeText(cCode);
        Swal.fire({
            text: "Codigo copiado en el portapapeles",
            icon: "success",
            confirmButtonText: 'Continuar',
            customClass: {
                popup: 'alerta',
                confirmButton: 'btn',
            },
            backdrop: 'rgba(246, 244, 239, 0.5) url(https://media.tenor.com/bx7hbOEm4gMAAAAj/sakura-leaves.gif)' ,
        });
    }

    function clearCCode() {
        setCCode("");
    }

    if (loader)
        return (
            <div className="loader-screen">
                <div className="carga">
                    <div class="loader"></div>
                </div>
                <p>{mensaje}</p>
            </div>
        );

    if (showTransition)
        return <div className="entry-screen"></div>;

    return (
        <>
            {showContent && (
                <div className="page-content">
                    <div className="pila">
                        <Sidebar />

                        <div className="contenedor">
                            {/* <Hora /> */}

                            <div className="barra">
                                <div className="navegacion">
                                    <FontAwesomeIcon icon={faBattery} />
                                    <h3>Pila</h3>
                                </div>

                                <div className="navegacion">
                                    <p className="vinculo">Nueva Pila</p>
                                    <p> | </p>
                                    <p className="vinculo">Cargar Pila</p>
                                </div>
                            </div>

                            <div className="codigo">
                                <div className="main">
                                    <input type="text" id="tituloPila" placeholder="Titulo de la pila" />

                                    <div className="container">
                                        <div className="stack-area">
                                            {stack.map((item, index) => (
                                                <div key={index} className={`item fade-in ${removeIndex === index ? (toggle ? "throw-right" : "throw-left"): "" }`} > {item} </div>
                                            ))}
                                        </div>

                                        <div className="controls">
                                            <div className="elementosData">
                                                <label>Elemento:</label>
                                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" id="elemento"/>

                                                <div className="botonesItem">
                                                    <button className="btn" onClick={push}>Insertar</button>
                                                    <button className="btn" onClick={pop}>Eliminar</button>
                                                    <button className="btn" onClick={clearStack}>Limpiar Pila</button>
                                                </div>
                                            </div>
                                            <button className="guardar_pila">Guardar</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="codigoC">
                                    <div className="cabecera">
                                        <h2>Codigo en C</h2>
                                        <div className="botonesCodigo">
                                            <button className="btn btn-small" onClick={copyCode}>
                                                <FontAwesomeIcon icon={faCopy} />
                                            </button>
                                            <button className="btn btn-small" onClick={clearCCode}>
                                                <FontAwesomeIcon icon={faTrash}/>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="c-code-box">
                                        <pre>{cCode}</pre>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Pila;
