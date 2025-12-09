import React, { useEffect, useState } from "react";
import "../styles/preloader.css";
import Sidebar from "../components/sidebar";

const mensajes = [
    "Organizando estructuras de datos...",
    "Apilando elementos...",
    "Calculando direcciones de memoria...",
    "Acomodando la pila...",
    "Optimización ninja en progreso...",
    "Empujando bits al límite...",
    "Cargando nodos invisibles...",
    "Invocando al dios de la recursión...",
    "Compilando pensamientos...",
    "Construyendo lógica...",
    "Afinando punteros...",
    "Alistando el stack frame...",
    "Revisando overflow...",
    "Ordenando bytes rebeldes...",
    "Conectando neuronas digitales...",
    "Inicializando variables secretas...",
    "Insertando líneas de código mágicas...",
    "Despertando al compilador...",
    "Leyendo memoria prohibida...",
    "Generando sabiduría computacional...",
    "Y el jugador soño otra vez, soño mejor"
];

const Loader = () => {
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        const random = Math.floor(Math.random() * mensajes.length);
        setMensaje(mensajes[random]);
    }, []);

    return (
        <>
        <Sidebar />

        </>
    );
};

export default Loader;
