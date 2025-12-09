import React from "react";
import logo from '../resources/KozoRed 1.svg';
import '../styles/sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-regular-svg-icons";
import { faBattery } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

const Sidebar = () =>{
    const navigate = useNavigate();
    
    return(
        <aside className="sidebar">
            <div className="logoSide">
                <img src={logo} className="logo__Bar" alt="logo" />
            </div>
            <div className="menu">
                <h5>Menú</h5>
                <div className="inicioSide">
                    <div className="navInicio" onClick={() => navigate("/inicio")} style={{ cursor: "pointer" }}>
                        <FontAwesomeIcon icon={faHouse} className="homeIcon"/>
                        <h5>Inicio</h5>
                    </div>
                </div>
            </div>
            <div className="menu">
                <h5>Estructuras</h5>
                <div className="linkSection" onClick={() => navigate("/pila")} style={{ cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faBattery} className="pageIcon"/>
                    <h5>Pila</h5>
                </div>
                <div className="linkSection">
                    <FontAwesomeIcon icon={faAnglesRight} className="pageIcon"/>
                    <h5>Cola</h5>
                </div>
                <div className="linkSection">
                    <FontAwesomeIcon icon={faListUl} className="pageIcon"/>
                    <h5>Lista enlazada</h5>
                </div>
            </div>
            <div className="menu">
                <h5>General</h5>
                <div className="linkSection" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faTableCellsLarge} className="pageIcon"/>
                    <h5>Bienvenida</h5>
                </div>
                <div className="linkSection">
                    <FontAwesomeIcon icon={faPeopleGroup} />
                    <h5>Creadores</h5>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;
