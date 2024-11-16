import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedin, FaAddressCard, FaPhone } from 'react-icons/fa';
import './Footer.css'; // Add styles for this component
import { MdEmail } from "react-icons/md";
const Footer = () => {
    return (
        <>
            {/* Main Footer */}
            <footer className="VrGeomain-footer">
                <div className="container">
                    <div className="VrGeofooter-content">
                        <Row>
                            {/* Logo Section */}
                            <Col lg={4} md={6} sm={12} className="VrGeofooter-column">
                                <div className="logo-widget VrGeofooter-widget">
                                    <figure className="VrGeologo-box">
                                        <a href="#">
                                            <div className="VrGeofooter-title" >VR GEO SOLUTIONS</div>
                                        </a>
                                    </figure>
                                    <div className="VrGeotext">
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
                                    <ul className="VrGeofooter-social">
                                        <li><a href="#"><FaFacebookF /></a></li>
                                        <li><a href="#"><FaInstagram /></a></li>
                                        <li><a href="#"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </Col>

                            {/* Services Section */}
                            <Col lg={3} md={6} sm={12} className="offset-lg-2 VrGeofooter-column">
                                <div className="VrGeoservice-widget VrGeofooter-widget">
                                    <div className="VrGeofooter-title">Our Services</div>
                                    <ul className="VrGeolist">
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
                            <Col lg={3} md={6} sm={12} className="VrGeofooter-widget">
                                <div className="VrGeocontact-widget VrGeofooter-widget">
                                    <div className="VrGeofooter-title">Contact Us</div>
                                    <div className="VrGeotext">
                                        <div className="contact-item">
                                            <FaAddressCard className="contact-icon firsticon" />
                                            <p>Plot no14 Phase 1 Subhadra nagar More opposite Vanstalipuram 500072</p>
                                        </div>
                                        <div className="contact-item">
                                            <FaPhone className="contact-icon" />
                                            <p>7670967086</p>
                                        </div>
                                        <div className="contact-item">
                                            <MdEmail className="contact-icon" />
                                            <p>vrgeosolutions2023@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </footer>

            {/* Footer Bottom Section */}
            <div className="VrGeofooter-bottom">
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="VrGeocopyright">
                                <a href="#">VR GEO SOLUTIONS</a> &copy; 2023 All Rights Reserved
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <ul className="VrGeofooter-nav">
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
