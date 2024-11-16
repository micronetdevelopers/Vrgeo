import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import VRGEO from '../../assets/VR_GEO_SOLUTIONS_LOGO.png';
import './Navbar.css';

const CustomNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle the mobile menu
    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <Navbar expand="lg" variant="light" className="px-3 VrGeoNavbar">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="navbar-logo-shift-right">
                    <img src={VRGEO} alt="VR Geo Solutions Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleMenuToggle} />
                <Navbar.Collapse id="basic-navbar-nav" className={isMobileMenuOpen ? 'show' : ''}>
                    <Nav className="mx-auto custom-nav-margin">
                        <Nav.Link as={NavLink} to="/" onClick={handleMenuToggle} className="custom-nav-link">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about" onClick={handleMenuToggle} className="custom-nav-link">
                            About
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/products" onClick={handleMenuToggle} className="custom-nav-link">
                            Products
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/services" onClick={handleMenuToggle} className="custom-nav-link">
                            Services
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" onClick={handleMenuToggle} className="custom-nav-link">
                            Contact
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/innovation" onClick={handleMenuToggle} className="custom-nav-link">
                            Innovation
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
