import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <Services />
            <Projects />
            <Testimonials />
            <ContactForm />
        </div>
    );
}

export default App; // Adicione um ponto e vírgula aqui
