import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Add styles for this component
import VRGEO from '../../assets/VR_GEO_SOLUTIONS_LOGO.png';

const Footer = () => {
    return (
        <>
            {/* Main Footer */}
            <footer className="main-footer">
                <div className="container">
                    <div className="footer-content">
                        <Row>
                            {/* Logo Section */}
                            <Col lg={4} md={6} sm={12} className="footer-column">
                                <div className="logo-widget footer-widget">
                                    <figure className="logo-box">
                                        <a href="#">
                                            <img
                                                // src="https://i.ibb.co/QDy827D/ak-logo.png"
                                                src={VRGEO}
                                                alt="Logo"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </figure>
                                    <div className="text">
                                        <p>
                                            VR Geo Solutions offers cutting-edge<br />
                                            satellite imagery and geospatial services<br />
                                            tailored to that your needs. Our expertise<br />
                                            spans from imagery search to data delivery<br />
                                            and technical consulting. solutions We are<br />
                                            dedicated to providing innovative that<br />
                                            empower businesses and enhance <br />
                                            decision-making.
                                        </p>
                                    </div>
                                    <ul className="footer-social">
                                        <li><a href="#"><FaFacebookF /></a></li>
                                        <li><a href="#"><FaInstagram /></a></li>
                                        <li><a href="#"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </Col>

                            {/* Services Section */}
                            <Col lg={3} md={6} sm={12} className="offset-lg-2 footer-column">
                                <div className="service-widget footer-widget">
                                    <div className="footer-title">Our Services</div>
                                    <ul className="list">
                                        <li><a href="#">Geospatial Solutions</a></li>
                                        <li><a href="#">Image Processing</a></li>
                                        <li><a href="#">Photogrammetry</a></li>
                                        <li><a href="#">GIS</a></li>
                                        <li><a href="#">Web Applications</a></li>
                                        <li><a href="#">Large Scale Data</a></li>
                                        <li><a href="#">Professional Services</a></li>
                                    </ul>
                                </div>
                            </Col>

                            {/* Contact Section */}
                            <Col lg={3} md={6} sm={12} className="footer-widget" >
                                <div className="contact-widget footer-widget">
                                    <div className="footer-title">Contact Us</div>
                                    <div className="text">
                                        <p>Plot no14 Phase 1 Subhadra nagar More opposite Vanstalipuram  500072</p>
                                        <p>7670967086</p>
                                        <p>vrgeosolutions2023@gmail.com</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </footer>

            {/* Footer Bottom Section */}
            <div className="footer-bottom">
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="copyright">
                                <a href="#">VR GEO SOLUTIONS</a> &copy; 2024 All Rights Reserved
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <ul className="footer-nav">
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Footer;
