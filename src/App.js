import { useEffect } from 'react';
import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience    from  './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {

    useEffect(()=>{
        document.addEventListener('keydown' , detectKeyDown , true)
    }, [])

    const detectKeyDown = (e) =>{
        console.log('Clicked Key :' , e.key)

    if(e.key === "F12"){
        alert('Bu usul taqiqlangan')
    }
    }

    return (
        <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        </>
    )
}

export default App