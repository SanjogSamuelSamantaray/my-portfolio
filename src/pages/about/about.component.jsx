import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import Profile from '../../assets/img/profile/profile.jpg'
import "./about.style.css"

const About = () => {
    return (
        <div id="about">
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3" style={{fontFamily: 'Playfair Display, serif'}}>ABOUT ME</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                        <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                        </Row>
                    </Col>
                    {/* about me section */}
                    <Col xs={12} md={6} style={{fontFamily: 'Averia Serif Libre, cursive',fontSize: '19px'}}>
                        <Row>
                            {/* description section*/}
                            Hi there! I am <strong>&nbsp;Sanjog Samuel Samantaray</strong>
                            <br />A passionate programmer and an enthusiatic learner, born and brought up in Odisha. I'm a web developer who loves to take problems as a challenge, dig into new concepts and solve problems.
                            <br /><br /> 
                            Currently, I'm doing my Engineering with specialization in 'Computer Science and Engineering'.
                            <br /><br />
                            Learning new things and knowing how things really work is what fascinates me and gives me joy. Be it tech or non tech, I love to explore things and give a shot to what seems interesting to me.
                            <br /><br/>
                            I'm a self motivating person and also motivate others to achieve their goals. I'm a workahoilic person who loves to take leads and execute responsibilities. Working in a team is what I look forward to.
                            <br />
                        </Row>

                        <Row>
                            {/* Links and buttons*/}
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                                    <Button className="m-2" variant="outline-primary">
                                        Let's talk
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://drive.google.com/file/d/1pVDmGA7TqQXn8CDUxP1x015zpy5xCMpE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-success">
                                        My Resume
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://github.com/SanjogSamuelSamantaray" target="_blank" rel="noopener noreferrer">
                                    <Button className="m-2" variant="outline-dark">
                                        GitHub
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/sanjog-samuel-samantaray-64317218a/" target="_blank" rel="noopener noreferrer">
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
    )
}

export default About
