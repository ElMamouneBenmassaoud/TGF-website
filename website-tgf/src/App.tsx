import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExtraServices from "./components/ExtraServices";

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header/>
            <Hero/>
            <About/>
            <Services/>
            {/*<Gallery />*/}
            <Projects/>
            <ExtraServices/>
            <Partners/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
