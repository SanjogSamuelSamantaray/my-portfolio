import React from 'react'
import './App.css';

import BgImage from "./assets/img/parallex/background.webp";

//importing components
import MyNavbar from "./components/my-navbar/navbar.component.jsx";
import MyCarousel from "./components/my-carousel/my-carousel.component.jsx";
import TitleMessage from "./components/title-message/title-message.component.jsx";
import About from "./pages/about/about.component.jsx";
import Skills from "./pages/skills/skill.component.jsx";
import Experience from "./pages/experience/experience.component.jsx";
import Projects from "./components/project-timeline/project-timeline.component.jsx";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <div>
        <Parallax blur={{ min: -30, max: 30 }} bgImage={BgImage} bgImageAlt="" strength={-200}>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
        </Parallax>
      </div>

      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
              <Skills/>
          </Slide>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade bottom duration={500}>
              <Experience/>
          </Fade>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
              <Projects/>
          </Slide>
        </Container>
      </div>
      
    </div>
  );
}

export default App;
