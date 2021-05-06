import React from "react";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import bgImage from "./assets/img/parallax/background.webp";
import MyNavbar from "./components/Navbar/MyNavbar.component";
import MyCarousel from "./components/Carousel/MyCarousel.component";
import Title from "./components/Title/Title.component";
import About from "./pages/About/About.component";
import Skills from "./pages/Skills/Skills.component";
import Education from "./pages/Education/Education.component";

import "./App.css";

const App = () => {
    return(
        <div className="App" style={ { position: "relative" } }>
            <MyNavbar />
            <MyCarousel />
            <Title />
            <div>
                <Parallax blur={ { min: -30, max: 30 } }
                          bgImage={ bgImage }
                          bgImageAlt=""
                          strength={ -200 }
                >
                    <div>
                        <Container className="container-box rounded">
                            <Fade duration={ 500 }>
                                <About />
                            </Fade>
                        </Container>
                    </div>
                </Parallax>
            </div>
            <div>
                <Container className="container-box rounded">
                    <Fade duration={ 500 }>
                        <Skills />
                    </Fade>
                </Container>
            </div>
            <div>
                <Container className="container-box rounded">
                    <Fade duration={ 500 }>
                        <Education />
                    </Fade>
                </Container>
            </div>
        </div>
    );
}

export default App;