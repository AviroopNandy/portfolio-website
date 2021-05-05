import React from "react";
import { skills } from "./SkillsData";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "./Skills.style.css";

const Skills = () => {
    return(
        <div className="pt-3 pb-3" id="skills">
            <h1 className="text-center font-details-b pb-4">MY SKILLS</h1>
            <CardDeck>
                <Row className="d-flex justify-content-around">
                    <Col md={ 4 }>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title">Frontend</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    { skills.frontend.map( (skill, index) => (
                                        <span className="p-2" key={ `${skill.skillName}${index}` }>
                                            <a className="text-dark text-decoration-none" href={ skill.link } target="_blank" rel="noopener noreferrer">
                                                <Image src={ skill.imgSrc } alt={ skill.imgAltText } rounded className="image-style m-1"></Image>
                                                { skill.skillName }
                                            </a>
                                        </span>
                                    ) ) }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={ 4 }>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title">Backend</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    { skills.backend.map( (skill, index) => (
                                        <span className="p-2" key={ `${skill.skillName}${index}` }>
                                            <a className="text-dark text-decoration-none" href={ skill.link } target="_blank" rel="noopener noreferrer">
                                                <Image src={ skill.imgSrc } alt={ skill.imgAltText } rounded className="image-style m-1"></Image>
                                                { skill.skillName }
                                            </a>
                                        </span>
                                    ) ) }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title">Hosting Platforms</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    { skills.hostingPlatforms.map( (skill, index) => (
                                        <span className="p-2" key={ `${skill.skillName}${index}` }>
                                            <a className="text-dark text-decoration-none" href={ skill.link } target="_blank" rel="noopener noreferrer">
                                                <Image src={ skill.imgSrc } alt={ skill.imgAltText } rounded className="image-style m-1"></Image>
                                                { skill.skillName }
                                            </a>
                                        </span>
                                     ) ) }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={ 4 }>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">Programming Languages</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    { skills.programmingLanguages.map( (skill, index) => (
                                        <span className="p-2" key={ `${skill.skillName}${index}` }>
                                            <a className="text-dark text-decoration-none" href={ skill.link } target="_blank" rel="noopener noreferrer">
                                                <Image src={ skill.imgSrc } alt={ skill.imgAltText } rounded className="image-style m-1"></Image>
                                                { skill.skillName }
                                            </a>
                                        </span>
                                    ) ) }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">Database</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    { skills.databases.map( (skill, index) => (
                                        <span className="p-2" key={ `${skill.skillName}${index}` }>
                                            <a className="text-dark text-decoration-none" href={ skill.link } target="_blank" rel="noopener noreferrer">
                                                <Image src={ skill.imgSrc } alt={ skill.imgAltText } rounded className="image-style m-1"></Image>
                                                { skill.skillName }
                                            </a>
                                        </span>
                                    ) ) }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">Version Control</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    { skills.versionControl.map( (skill, index) => (
                                        <span className="p-2" key={ `${skill.skillName}${index}` }>
                                            <a className="text-dark text-decoration-none" href={ skill.link } target="_blank" rel="noopener noreferrer">
                                                <Image src={ skill.imgSrc } alt={ skill.imgAltText } rounded className="image-style m-1"></Image>
                                                { skill.skillName }
                                            </a>
                                        </span>
                                    ) ) }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </CardDeck>
        </div>
    );
}

export default Skills;