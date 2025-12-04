import React from "react";
import logo from '../resources/KozoRed 1.svg';
import '../styles/sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

const Sidebar = () =>{
    const navigate = useNavigate();
    
    return(
        <aside className="sidebar">
            <div className="logoSide">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="inicioSide" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                <FontAwesomeIcon icon={faHouse} />
                <h4>Inicio</h4>
            </div>
            <div className="estructuraSide">
                <h4>Estructuras</h4>
            </div>
            <div className="linksSide">
                <p>En construcción</p>
            </div>
        </aside>
    )
}

export default Sidebar;
