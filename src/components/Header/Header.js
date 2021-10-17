import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="light">
              <Container>
              <Navbar.Brand as={Link} to="/home">
              <Image fluid
                    src="https://i.ibb.co/CmtMhFV/logo2.png"
                    width="100"
                    className="d-inline-block align-text-top"
                    alt="React Bootstrap logo"
                  />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className=" justify-content-end">
                  
                <Nav 
                navbarScroll 
                className="align-items-center fw-bold">
                  <Nav.Link as={Link} to="/deets"><i class="fas fa-cart-arrow-down"></i></Nav.Link>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  <Nav.Link as={Link} to="/deets"> <Button variant="danger" className="rounded-pill  fw-bold">Sign up</Button></Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
};

export default Header;