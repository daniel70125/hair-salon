import React, { Component } from 'react';
import './Header.scss';
import {Container, Navbar, Nav} from 'react-bootstrap';
import Logo from '../../Pictures/logo.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                
            <Navbar.Brand href="/">
            <img alt="Logo" src={Logo} width="30" height="30" className="d-inline-block align-top" />{' '}
                Hair-Salon</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#pricing">About Us</Nav.Link>
                <Nav.Link href="#pricing">Contact Us</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Nav>
                <Nav.Link href="#deets"><FacebookIcon /></Nav.Link>
                <Nav.Link href="#deets"><TwitterIcon /></Nav.Link>
                <Nav.Link href="#deets"><InstagramIcon /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
         );
    }
}
 
export default Header;