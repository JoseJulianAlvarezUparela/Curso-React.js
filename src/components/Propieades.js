import React from "react"; 

export default function Propiedades({ PorDefecto = "Soy Jose" }) {
    return (
        <div>
            <h2>{PorDefecto}</h2>    
        </div>
    );
}