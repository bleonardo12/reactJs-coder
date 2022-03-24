import { NavLink, Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "../Widget/CartWidget";
import logo1 from "../../assets/img/logo1.png";

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
                    <NavLink to="/">
                        <img className="logo1" src={logo1} alt="logo" />
                        Anaiak indumentaria deportiva
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="categoria/femenino">Femenino</NavLink>
                            <NavLink to="categoria/masculino">
                                Masculino
                            </NavLink>
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
                            <NavLink to="cart">
                                <CartWidget />
                            </NavLink>
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
