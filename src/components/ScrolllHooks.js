import React, { useState, useEffect } from "react";

export default function ScrollHooks(props) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const detectarScroll = () => {
            setScrollY(window.pageYOffset);
        };

        window.addEventListener("scroll", detectarScroll);

        // Cleanup (muy importante)
        return () => {
            window.removeEventListener("scroll", detectarScroll);
        };
    }, []);

    return (
        <>
            <h2>Scroll Hooks</h2>
            <p>Scroll Y del navegador: {scrollY}px</p>
        </>
    );
}