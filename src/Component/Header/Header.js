import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
// const logo = 'https://html.merku.love/shelly/assets/img/logo.png';
// console.log(logo)
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/home">
            <Navbar.Brand href="#home">ACADEMIA</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/home">
                <Nav.Link href="#home">Home</Nav.Link>
              </NavLink>
              <NavLink to="/about">
                <Nav.Link href="#pricing">About Us</Nav.Link>
              </NavLink>
              <NavLink to="/services">
                <Nav.Link href="#services">Services</Nav.Link>
              </NavLink>
              <NavLink to="/contact">
                <Nav.Link href="#contact">Contact</Nav.Link>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
