import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from "../../assets/icons/logo.png";
import  "./navbar.style.css";

const MyNavbar = () => {
    return (
        <>
        <Navbar collapseOnSelect fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between">
            <Navbar.Brand href="#home">
                <img className="logo" src={Logo} alt="My Portfolio logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" >
                <Nav.Link href="#home" style = {{color:"white",margin: "0px 0px 0px 10px"}}>Home</Nav.Link>
                <Nav.Link href="#about"style = {{color:"white" ,margin: "0px 0px 0px 10px"}}>About</Nav.Link>
                <Nav.Link href="#skills" style = {{color:"white" ,margin: "0px 0px 0px 10px"}}>Skills</Nav.Link>
                <Nav.Link href="#experience" style = {{color:"white" ,margin: "0px 0px 0px 10px"}}>Experience</Nav.Link>
                <Nav.Link href="#project" style = {{color:"white",margin: "0px 0px 0px 10px"}}>Project</Nav.Link>
                <Nav.Link href="#contact" style = {{color:"white",margin: "0px 0px 0px 10px"}}>Contact</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default MyNavbar
