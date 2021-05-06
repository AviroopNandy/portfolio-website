import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import SCHOOL from "../../assets/img/education/school.png";
import COLLEGE from "../../assets/img/education/college.png";
import UNIVERSITY from "../../assets/img/education/university.png";

import "./Education.style.css";

const Education = () => {
    return(
        <div id="education">
            <hr />
            <h1 className="pt-3 text-center font-details-b pb-3">EDUCATION</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    {/* <Tilt options={ { max: 25 } }> */}
                        <Row className="align-items-center">
                            <Col xs={ 12 } md={ 4 }>
                            <Tilt options={ { max: 25 } }>
                                <Card className="mt-2 mb-2">
                                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                        <Card.Img variant="top" className="img-resize" src={ SCHOOL } alt="Education logo" />
                                    </Card.Header>
                                    <Card.Body>
                                        <div>
                                            <Card.Title className="text-center">St. Xavier's School, Durgapur</Card.Title>
                                        </div>
                                        <div>
                                            <Card.Text className="text-center style">
                                                <strong className="body-title-style">2006-2017</strong>
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </Tilt>
                            </Col>
                            <Col xs={ 12 } md={ 4 }>
                            <Tilt options={ { max: 25 } }>
                                <Card className="mt-2 mb-2">
                                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                        <Card.Img variant="top" className="img-resize" src={ COLLEGE } alt="Education logo" />
                                    </Card.Header>
                                    <Card.Body>
                                        <div>
                                            <Card.Title className="text-center">DAV Model School, Durgapur</Card.Title>
                                        </div>
                                        <div>
                                            <Card.Text className="text-center style">
                                                <strong className="body-title-style">2017-2019</strong>
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </Tilt>
                            </Col>
                            <Col xs={ 12 } md={ 4 }>
                            <Tilt options={ { max: 25 } }>
                                <Card className="mt-2 mb-2">
                                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                        <Card.Img variant="top" className="img-resize" src={ UNIVERSITY } alt="Education logo" />
                                    </Card.Header>
                                    <Card.Body>
                                        <div>
                                            <Card.Title className="text-center">Vellore Institute of Technology, Vellore</Card.Title>
                                        </div>
                                        <div>
                                            <Card.Text className="text-center style">
                                                <strong className="body-title-style">2019-2023</strong>
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </Tilt>
                            </Col>
                        </Row>
                    {/* </Tilt> */}
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Education;