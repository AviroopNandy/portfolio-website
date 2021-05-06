import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import img from "../../assets/icons/logo.PNG";

import "./MyNavbar.style.css";

const MyNavbar = () => {
    return(
        <>
            <Navbar collapseOnSelect fixed="top" expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between">
                <Navbar.Brand href="#home">
                    <img src={ img } alt="Aviroop" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default MyNavbar;