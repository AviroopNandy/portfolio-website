import React from "react";
import { Parallax } from "react-parallax";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import bgImage from "./assets/img/parallax/background.webp";
import MyNavbar from "./components/Navbar/MyNavbar.component";
import MyCarousel from "./components/Carousel/MyCarousel.component";
import Title from "./components/Title/Title.component";
import About from "./pages/About/About.component";
import Skills from "./pages/Skills/Skills.component";
import Education from "./pages/Education/Education.component";
import Projects from "./components/Projects/Projects.component";
import Contact from "./pages/Contact/Contact.component";
import Footer from "./components/Footer/Footer.component";

import "./App.css";

const App = () => {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return(
        <div className="App" style={ { position: "relative" } }>
            <MyNavbar />
            <MyCarousel />
            <Title />
            { isMobile ? null : <Particles className="particles particles-box" params={ particlesOptions } /> }
            <div>
                <Parallax blur={ { min: -30, max: 30 } }
                          bgImage={ bgImage }
                          bgImageAlt=""
                          strength={ -200 }
                >
                    <div>
                        <Container className="container-box rounded">
                            <Slide right duration={ 1000 }>
                                <About />
                            </Slide>
                        </Container>
                    </div>
                </Parallax>
            </div>
            <div>
                <Container className="container-box rounded">
                    <Slide left duration={ 1000 }>
                        <Skills />
                    </Slide>
                </Container>
            </div>
            <div>
                <Container className="container-box rounded">
                    <Slide right duration={ 1000 }>
                        <Education />
                    </Slide>
                </Container>
            </div>
            <div>
                <Container className="container-box rounded">
                    <Slide left duration={ 1000 }>
                        <Projects />
                    </Slide>
                </Container>
            </div>
            <div>
                <Container className="container-box rounded">
                    <Slide right duration={ 1000 }>
                        <Contact />
                    </Slide>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default App;