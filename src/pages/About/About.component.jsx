import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import img from "../../assets/img/profile/profile.webp";

import "./About.style.css";

const About = () => {
    return(
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={ 12 } md={ 6 }>
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image src={ img } alt="My Profile" thumbnail fluid className="profile justify-content-end" />
                            </Row>
                        </Col>
                        <Col xs={ 12 } md={ 6 }>
                            <Row className="align-items-start p-2 my-details rounded">
                                Hi there! I am <strong>&nbsp;Aviroop Nandy</strong>
                                <br />
                                A passionate programmer and enthusiatic learner, I passed my Class 10 
                                ICSE Board exams from St. Xavier's School, Durgapur and my CLass 12 
                                CBSE Borad exams from DAV Model School, Durgapur. Currently I am doing 
                                my B.Tech course in Computer Science and Engineering from Vellore 
                                Institute of Technology, Vellore.
                                <br />
                                I am a frontend web developer, with a strong grasp of HTML, CSS and 
                                Javascript libraries like ReactJS. Currently I am learning backend 
                                languages and libraries to improve my tech stack.
                                <br />
                                Other than that, I love playing the guitar and reading books. I love 
                                learning about new technologies, the problems they solve and how I can 
                                use them to build better and scalable products.
                                <br /><br />
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                        <Button className="m-2" variant="outline-primary">
                                            Let's talk
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1Snbq3x4Itk_ZN4c8J96aNdp4SunXR08Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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