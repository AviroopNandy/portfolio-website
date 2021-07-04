import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import img from "../../assets/img/profile/profile.webp";
import resume from "../../assets/pdf/resume.pdf";

import "./About.style.css";

const About = () => {
    return(
        <div id="about">
            <div className="pb-5 about">
                <h1 className="pt-5 text-center font-details pb-2">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={ 12 } md={ 6 }>
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image src={ img } alt="My Profile" thumbnail fluid className="profile justify-content-end" />
                            </Row>
                        </Col>
                        <Col xs={ 12 } md={ 6 }>
                            <Row className="align-items-start p-2 my-details rounded">
                                Hey there, I'm <strong>&nbsp;Aviroop Nandy</strong>
                                <br />
                                I'm a passionate programmer and an enthusiastic learner currently pursuing 
                                my B.Tech Second year in Computer Science from Vellore Institute Of Technology, 
                                Vellore. I've passed Grade 12 from DAV Model School(CBSE Board), Durgapur with 
                                93% and Grade 10 from St. Xavier School(ICSE Board), Durgapur with 95%. 
                                <br />
                                I'm a Frontend Developer with a solid grasp of HTML, CSS and ReactJS, a Javascript 
                                library. I'm currently delving into backend development as well. I have a keen 
                                interest in learning new technologies and understanding their broad scope of 
                                applications in building scalable products.
                                <br />
                                <br />
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                        <Button className="m-2" variant="outline-primary">
                                            Let's talk
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href={ resume } download="resume.pdf" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-success">
                                            My Resume
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/AviroopNandy" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-dark">
                                            GitHub
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/aviroop-nandy/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-info">
                                            LinkedIn
                                        </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default About;