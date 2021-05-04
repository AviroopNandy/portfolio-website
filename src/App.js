import React from "react";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import bgImage from "./assets/img/parallax/background.webp";
import MyNavbar from "./components/Navbar/MyNavbar.component";
import MyCarousel from "./components/Carousel/MyCarousel.component";
import Title from "./components/Title/Title.component";
import About from "./pages/About/About.component";

import "./App.css";

const App = () => {
    return(
        <div className="App">
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
        </div>
    );
}

export default App;