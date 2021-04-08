import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import "./project-timeline.style.css";
// projects
import covid from "../../assets/img/projects/covid.png";
import Cardio from "../../assets/img/projects/cardio.png";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import node_red from "../../assets/img/skills/node-red.png";
import aws from "../../assets/img/skills/aws.png";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import Django from "../../assets/img/skills/django.png";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";

const Projects = () => {
    return (
        <div id="project">
            <h1 className="pt-3 text-center font-details-b pb-3" style={{fontFamily: 'Playfair Display, serif'}}>PROJECTS</h1>
                <Timeline>
                    <Events>
                    {/* Project: cardiomate */}
                        <ImageEvent
                            date="01/09/2020 - 01/02/2021"
                            className="text-center"
                            text="Cardiomate"
                            src={Cardio}
                            style="height:50px;"
                            alt="Cardiomate"
                        >
                            <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                <Card>
                                    <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="0"
                                    className="p-2 text-center accordian-main">
                                    PROJECT DETAILS
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0" className="text-left">
                                    <Card.Body>
                                        <strong>Description:</strong> This Django based application along with use of data science can predict the possible diseases in a person by analyzing the ECG and PCG signals of a Human heart.
                                        <hr />
                                        <strong>Features:</strong>
                                        <ul className="list-styles pt-1">
                                        <li>Real time plotting of ECG and PCG signals of the human heart.</li>
                                        <li>Disease prediction using Data science</li>
                                        <li>Generate report with relevant patient's data</li>
                                        </ul>
                                        <hr />
                                        <strong>Tech used:</strong>
                                        <ul>
                                        <li>
                                            <span className="p-2">
                                            <Image
                                                src={L_HTML5}
                                                alt="HTML 5"
                                                rounded
                                                className="image-style m-1"
                                            ></Image>{" "}
                                            HTML5
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                            <Image
                                                src={L_CSS3}
                                                alt="CSS 3"
                                                rounded
                                                className="image-style m-1"
                                            ></Image>{" "}
                                            CSS3
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                            <Image
                                                src={Django}
                                                alt="Django"
                                                rounded
                                                className="image-style1 m-1"
                                            ></Image>{" "}
                                            Django
                                            </span>
                                        </li>
                                       
                                        </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </Accordion>
                            </div>
                            {/* <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                href="https://akjha96.github.io/Todo-List-React/"
                                target="_blank"
                                >
                                SEE LIVE
                                </UrlButton>
                                <UrlButton
                                href="https://github.com/akjha96/Todo-List-React"
                                target="_blank"
                                >
                                SOURCE CODE
                                </UrlButton>
                                <UrlButton
                                href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-materialui-fun-activity-6716765686963826688-GIpZ"
                                target="_blank"
                                >
                                WATCH VIDEO
                                </UrlButton>
                            </div> */}
                            </div>
                        </ImageEvent>

                        {/* Project: COVID Patient Alert System */}
                        <ImageEvent
                                    date="16/06/2020 - 30/06/2020"
                                    className="text-center"
                                    text="COVID CPAS"
                                    src={covid}
                                    alt="COVID CPAS"
                                >
                                    <div className="d-flex justify-content-between flex-column mt-1">
                                    <div>
                                        <Accordion>
                                        <Card>
                                            <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                            >
                                            PROJECT DETAILS
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> The IoT based system helps to regularly update the dashboard by uploading body temperature in regular intervals. It will send notifications to the people who have subscribed to your channel(using AWS publisher and Subscriber feature) if your body temp. rises above 100&#176;C informing them that they should go for a COVID check-up (using SNS service of Amazon).
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                <li>SNS feature of Amazon</li>
                                                <li>Real-time API calls with Backend features</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                <li>
                                                    <span className="p-2">
                                                    <Image
                                                        src={node_red}
                                                        alt="node-red"
                                                        rounded
                                                        className="image-style1 m-1"
                                                    ></Image>{" "}
                                                    Node-Red
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                    <Image
                                                        src={L_NODE_JS}
                                                        alt="Node.js"
                                                        rounded
                                                        className="image-style1 m-1"
                                                    ></Image>{" "}
                                                    Node.js
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                    <Image
                                                        src={aws}
                                                        alt="aws"
                                                        rounded
                                                        className="image-style1 m-1"
                                                    ></Image>{" "}
                                                    AWS
                                                    </span>
                                                </li>
                                                
                                                </ul>
                                            </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        </Accordion>
                                    </div>
                                    {/* <div className="d-flex justify-content-between flex-nowrap text-center">
                                        <UrlButton
                                        href="https://github.com/akjha96/MernTipCaculator-FrontEnd"
                                        target="_blank"
                                        >
                                        SOURCE CODE
                                        </UrlButton>
                                        <UrlButton
                                        href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-nodejs-expressjs-activity-6712281977107603456-oH6t"
                                        target="_blank"
                                        >
                                        WATCH VIDEO
                                        </UrlButton>
                                    </div> */}
                                    </div>
                                </ImageEvent>
                    </Events>
                </Timeline>
        </div>
    )
}

export default Projects
