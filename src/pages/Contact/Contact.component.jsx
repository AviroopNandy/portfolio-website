import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ContactForm from "../../components/ContactForm/ContactForm.component";

import "./Contact.style.css"

const Contact = () => {
    return(
        <div id="contact" className="pt-5">
            <hr />
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row className="pb-2">
                    <Col className="d-flex justify-content-center flex-wrap">
                        <ContactForm />
                    </Col>
                </Row>
                <Row className="pt-2">
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:aviroopnandy2001@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="aviroopnandy2001@gmail.com">
                                    <i className="fas fa-envelope-square"></i> Email Me
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/aviroop-nandy/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit my LinkedIn">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.instagram.com/aviroop_nandy/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="Visit my Instagram">
                                    <i className="fab fa-instagram"></i> Instagram
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.facebook.com/profile.php?id=100010841565783/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit my Facebook">
                                    <i className="fab fa-facebook"></i> Facebook
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.youtube.com/channel/UCzDA4QXOGoROlg-2FGRAGuw/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="Visit my YouTube">
                                    <i className="fab fa-youtube"></i> YouTube
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.github.com/AviroopNandy/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="Visit my GitHub">
                                    <i className="fab fa-github"></i> GitHub
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
}

export default Contact;