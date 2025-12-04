import React, { useState } from "react";
import "../styles/pila.css";
import Sidebar from '../components/sidebar';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBattery } from "@fortawesome/free-solid-svg-icons";

const Pila = () => {
    const [stack, setStack] = useState([]);
    const [name, setName] = useState("");
    const [removeIndex, setRemoveIndex] = useState(null);
    const [toggle, setToggle] = useState(true); 
    const [cCode, setCCode] = useState("");

    function push() {
        if (name.trim() === "") return;
        setStack([...stack, name]);
        setCCode(prev =>
            prev +
            `// Insertar en la pila\npush(${name});\n\n`
        );
        setName("");
    }
    function pop() {
        if (stack.length === 0) return;

        const index = stack.length - 1;
        const value = stack[index];

        setRemoveIndex(index);
        setToggle(!toggle);

        setTimeout(() => {
            setStack((prev) => prev.slice(0, -1));

            setCCode(prev =>
                prev +
                `// Eliminar de la pila\npop(); // elemento removido: ${value}\n\n`
            );
            setRemoveIndex(null);
        }, 450);
    }
    function clearStack() {
        setStack([]);
        setCCode(prev => prev + "// Vaciar pila\nclear();\n\n");
    }
    function copyCode() {
        navigator.clipboard.writeText(cCode);
        alert("Código copiado al portapapeles.");
    }
    function clearCCode() {
        setCCode("");
    }

    return (
        <div className="pila">
            <Sidebar />

            <div className="contenedor">
                <div className="barra">
                    <div className="navegacion">
                        <FontAwesomeIcon icon={faBattery} />
                        <h3>Pila</h3>
                    </div>

                    <div className="navegacion">
                        <p>Nueva Pila</p>
                        <p> | </p>
                        <p>Cargar Pila</p>
                    </div>
                </div>

                <div className="codigo">
                    <div className="main">
                        <h1 className="title">Título de la pila</h1>

                        <div className="container">
                            <div className="stack-area">
                                {stack.map((item, index) => (
                                    <div key={index} className={`item fade-in ${removeIndex === index? (toggle ? "throw-right" : "throw-left"): ""}`}>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="controls">
                                <label>Elemento:</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nombre"
                                />

                                <button className="btn" onClick={push}>Agregar elemento</button>
                                <button className="btn" onClick={pop}>Eliminar elemento</button>
                                <button className="btn" onClick={clearStack}>Limpiar elemento</button>
                            </div>
                        </div>
                    </div>

                    <div className="codigoC">
                        <h2>Codigo en C</h2>
                        <div className="code-buttons">
                            <button className="btn btn-small" onClick={copyCode}>Copiar</button>
                            <button className="btn btn-small" onClick={clearCCode}>Limpiar Código</button>
                        </div>

                        <div className="c-code-box">
                            <pre>{cCode}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pila;
