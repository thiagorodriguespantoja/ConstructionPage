import React from "react";

function HeroSection() {
    return (
        <section id="hero" className="text-center text-white" style={{ background: "url(hero-image.jpg) no-repeat center center/cover", height: "100vh" }}>
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <h2>Building the Future</h2>
                <p>Your trusted partner in construction</p>
                <button className="btn btn-primary">Contact Us</button>
            </div>
        </section>
    );
}

export default HeroSection;
