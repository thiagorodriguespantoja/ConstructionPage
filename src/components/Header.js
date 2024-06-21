import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
    return (
        <header className="bg-dark text-white text-center py-3">
            <h1>Construction Company</h1>
            <nav>
                <a href="#services" className="text-white mx-3">Services</a>
                <a href="#projects" className="text-white mx-3">Projects</a>
                <a href="#testimonials" className="text-white mx-3">Testimonials</a>
                <a href="#contact" className="text-white mx-3">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
