import React, { useEffect, useState } from "react";
import '../styles/hora.css';

const Navbar = () => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        function updateDateTime() {
            const options = { weekday: 'long', day: 'numeric', month: 'short' };
            const now = new Date();

            let formattedDate = now.toLocaleDateString('es-ES', options);
            formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

            setDate(formattedDate);

            const formattedTime = now.toLocaleTimeString('es-ES', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });

            setTime(formattedTime);
        }

        updateDateTime(); 
        const interval = setInterval(updateDateTime, 1000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="hora">
            <div className="data">
                <div className="fecha">
                    {date}
                </div>
                <p>|</p>
                <div className="time">
                    {time}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
