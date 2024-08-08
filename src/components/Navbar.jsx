import React, { useContext } from "react";
import { Navbar, Button, Nav, Badge,Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  return (
    
    <Navbar className="bg-body-tertiary bg-dark">
        <Container>
          <Navbar.Brand href="/">Exercise App</Navbar.Brand>
          <Nav.Item>
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
      </Nav.Item>
          <Nav.Item>
        <Nav.Link as={NavLink} to="/exercises">Exercises</Nav.Link>
      </Nav.Item>
        </Container>
      </Navbar>
  )
}

export default NavBar;
