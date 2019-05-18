import React, {Component} from 'react';
import {Nav, Navbar, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './App.css';


class NavigationBar extends Component{
    render() {
        return(
            <div className="navbar">
                <Navbar fixed="top" bg="white" expand="lg">
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" style={"text-align: right;"}>

                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>;
            </div>


        );
    }
}

export default NavigationBar;