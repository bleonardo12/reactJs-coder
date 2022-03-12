import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "../Widget/CartWidget";

const NavBar = () => {
    return (
        <>
            <Navbar
                className="navBar"
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Container className="container">
                    <Navbar.Brand href="#home">
                        Anaiak indumentaria deportiva
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Femenino</Nav.Link>
                            <Nav.Link href="#pricing">Masculino</Nav.Link>
                            <NavDropdown
                                title="Indumentaria general"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Camisetas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Buzos
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Calzas
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Sneakers
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                <CartWidget />
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Follow as
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
