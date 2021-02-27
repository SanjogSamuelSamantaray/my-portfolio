import React from 'react'
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/larkai_logo.png";
import Tilt from "react-tilt";
import "./experience.style.css";

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                <Card.Title className="text-center">Software Development Engineer</Card.Title>
                                </div>
                                <div>
                                <Card.Text className="text-center style">
                                    <strong className="body-title-style ">Full Stack Developer</strong>
                                    <br />
                                    <strong>Technology:</strong> Python, Django, HTML, CSS, JS
                                    <br />
                                    <strong>Duration:</strong> September 2020 - February 2021
                                    <br/>
                                    <strong> Description </strong>
                                    <ul className="text-left">
                                    <li><strong>Developed &amp; enhanced</strong> an UI web application to display the ECG &amp; PCG signal of a human heart using the concept of AJAX.</li>
                                    <li><strong>Generate &amp; Display</strong> report predicting the possible diseases by calculating the various parameters like BPM, QR, QT, etc.
                                    </li>
                                    </ul>
                                    
                                    
                                </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Experience
