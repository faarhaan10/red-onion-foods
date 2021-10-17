import React from 'react';
import { Container, Row ,Col, Image, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=" bg-dark">
            <Container className='p-5 text-white'>
                <Row>
                    <Col xs={12} md={6}>
                        <Image fluid 
                        width="200"
                        src="https://i.ibb.co/CmtMhFV/logo2.png"/>
                    </Col>
                    <Col xs={12} md={3}>
                        <ul>
                            <li>abc</li>
                            <li>abc</li>
                            <li>abc</li>
                            <li>abc</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={3}>
                        <ul>
                            <li>abc</li>
                            <li>abc</li>
                            <li>abc</li>
                            <li>abc</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs={12} md={6}>
                        <p>copyright</p>
                    </Col>
                    <Col xs={12} md={6}>
                    <Nav
                        className="justify-content-between ms-5 fw-bold">
                        <Nav.Link as={Link} to="/deets">Login</Nav.Link>
                        <Nav.Link as={Link} to="/deets">acfds</Nav.Link>
                        <Nav.Link as={Link} to="/deets">acfds</Nav.Link>
                    </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;