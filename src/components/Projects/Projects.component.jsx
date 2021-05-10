import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ChitChat from "../../assets/img/projects/chit-chat.webp";
import Calculator from "../../assets/img/projects/calculator.webp";
import Snake from "../../assets/img/projects/snake.webp";
import Canteen from "../../assets/img/projects/canteen.webp";
import Chess from "../../assets/img/projects/chess.webp";
import Esport from "../../assets/img/projects/esport.webp";
import REACT from "../../assets/img/skills/react.svg";
import NODE_JS from "../../assets/img/skills/nodejs.svg";
import JAVASCRIPT from "../../assets/img/skills/javascript.svg";
// import EXPRESS from "../../assets/img/skills/express.svg";
// import POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import MONGODB from "../../assets/img/skills/mongodb.svg";
import MYSQL from "../../assets/img/skills/mysql.svg";
// import REDUX from "../../assets/img/skills/redux.svg";
import HTML5 from "../../assets/img/skills/html-5.svg";
import PHP from "../../assets/img/skills/php.svg";
import CSS3 from "../../assets/img/skills/css3.svg";
import PYTHON from "../../assets/img/skills/python.svg";
import TYPESCRIPT from "../../assets/img/skills/typescript.svg";
// import BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
// import DJANGO from "../../assets/img/skills/django.svg";
// import DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
// import GIT from "../../assets/img/skills/github-api.svg";
// import MATERIALUI from "../../assets/img/skills/material-ui-1.svg";

import "./Projects.style.css";

const Projects = () => {
    return(
        <div id="projects" className="pb-3">
            <hr />
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    <ImageEvent
                        date="05/04/2020"
                        className="text-center"
                        text="Calculator"
                        src={ Calculator }
                        alt="Calculator"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={ Card.Header }
                                            eventKey="0"
                                            className="p-2 text-center accordion-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>
                                        <Accordion.Collapse
                                            eventKey="0"
                                            className="text-left"
                                        >
                                            <Card.Body>
                                                <strong>Description: </strong>
                                                This is a simple user-friendly calculator made using 
                                                HTML 5 and CSS 3
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Can calculate and handle upto 20 digits</li>
                                                    <li>Made with HTML and CSS</li>
                                                    <li>Distinct buttons and simple UI</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech Used:</strong>
                                                <ul className="pt-1">
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={ HTML5 }
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            HTML 5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={ CSS3 }
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            CSS 3
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-around flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/AviroopNandy/Calculator/"
                                    target="_blank"
                                >
                                    GITHUB REPO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    <ImageEvent
                        date="12/06/2020"
                        className="text-center"
                        text="Snake"
                        src={ Snake }
                        alt="Snake Game"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={ Card.Header }
                                            eventKey="0"
                                            className="p-2 text-center accordion-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>
                                        <Accordion.Collapse
                                            eventKey="0"
                                            className="text-left"
                                        >
                                            <Card.Body>
                                                <strong>Description: </strong>
                                                The legendary Snake Game...
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Simple UI</li>
                                                    <li>Made with p5.js</li>
                                                    <li>Responsive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech Used:</strong>
                                                <ul className="pt-1">
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={ JAVASCRIPT }
                                                                alt="JAVASCRIPT"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            Vanilla JavaScript
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-around flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/AviroopNandy/Snake/"
                                    target="_blank"
                                >
                                    GITHUB REPO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    <ImageEvent
                        date="01/09/2020"
                        className="text-center"
                        text="ChitChat"
                        src={ ChitChat }
                        alt="Chat Application"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={ Card.Header }
                                            eventKey="0"
                                            className="p-2 text-center accordion-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>
                                        <Accordion.Collapse
                                            eventKey="0"
                                            className="text-left"
                                        >
                                            <Card.Body>
                                                <strong>Description: </strong>
                                                This is a Real Time chat application created with React
                                                and Node that allows multiple users to join a room and chat
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Multiple users can join a room</li>
                                                    <li>Text to Emoji translator</li>
                                                    <li>Made with React, Node and MongoDB</li>
                                                    <li>Responsive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech Used:</strong>
                                                <ul className="pt-1">
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={ REACT }
                                                                alt="REACT"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            ReactJS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={ CSS3 }
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            CSS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={ NODE_JS }
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            NodeJS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={ MONGODB }
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            MongoDB
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-around flex-nowrap text-center">
                                <UrlButton
                                    href="https://chitchat-chatapp.netlify.app/"
                                    target="_blank"
                                >
                                    VIEW PROJECT
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/AviroopNandy/ChitChat-Chat-Application/"
                                    target="_blank"
                                >
                                    GITHUB REPO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    <ImageEvent
                        date="16/02/2021"
                        className="text-center"
                        text="Fast Food Franchise Management System"
                        src={ Canteen }
                        alt="Canteen"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={ Card.Header }
                                            eventKey="0"
                                            className="p-2 text-center accordion-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>
                                        <Accordion.Collapse
                                            eventKey="0"
                                            className="text-left"
                                        >
                                            <Card.Body>
                                                <strong>Description: </strong>
                                                This is a software developed to manage the long queues in fast 
                                                food shops effectively, so that customers can place orders easily 
                                                and enjoy their meals without a hassle
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Customers and employees can login with their username and password</li>
                                                    <li>Customers and give and view feedback and rating</li>
                                                    <li>Leaderboard shows the best performing canteen and Employee of the Month</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech Used:</strong>
                                                <ul className="pt-1">
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={ PHP }
                                                                alt="PHP"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            PHP
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={ CSS3 }
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            CSS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={ MYSQL }
                                                                alt="MYSQL"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            MY-SQL
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-around flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/AviroopNandy/FastFoodMgmtSystem/"
                                    target="_blank"
                                >
                                    GITHUB REPO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    <ImageEvent
                        date="01/05/2021"
                        className="text-center"
                        text="Chess Game"
                        src={ Chess }
                        alt="Chess"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={ Card.Header }
                                            eventKey="0"
                                            className="p-2 text-center accordion-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>
                                        <Accordion.Collapse
                                            eventKey="0"
                                            className="text-left"
                                        >
                                            <Card.Body>
                                                <strong>Description: </strong>
                                                The Game of Chess, created with TypeScript
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    {/* <li></li> */}
                                                </ul>
                                                <hr />
                                                <strong>Tech Used:</strong>
                                                <ul className="pt-1">
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={ TYPESCRIPT }
                                                                alt="TYPESCRIPT"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            TYPESCRIPT
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={ CSS3 }
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            CSS
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-around flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/AviroopNandy/chess-game/"
                                    target="_blank"
                                >
                                    GITHUB REPO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    <ImageEvent
                        date="04/05/2021"
                        className="text-center"
                        text="Esport- Score Prediction App"
                        src={ Esport }
                        alt="Esport"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={ Card.Header }
                                            eventKey="0"
                                            className="p-2 text-center accordion-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>
                                        <Accordion.Collapse
                                            eventKey="0"
                                            className="text-left"
                                        >
                                            <Card.Body>
                                                <strong>Description: </strong>
                                                This is a website which predicts the score of a match 
                                                based on input parameters and previous match history 
                                                of the teams
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    {/* <li></li> */}
                                                </ul>
                                                <hr />
                                                <strong>Tech Used:</strong>
                                                <ul className="pt-1">
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={ REACT }
                                                                alt="REACT"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            REACTJS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={ CSS3 }
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            CSS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={ PYTHON }
                                                                alt="PYTHON"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            PYTHON
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-around flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/AviroopNandy/esport/"
                                    target="_blank"
                                >
                                    GITHUB REPO
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                </Events>
            </Timeline>
        </div>
    );
}

export default Projects;