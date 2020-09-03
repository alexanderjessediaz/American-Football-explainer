import React from 'react';
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';

const HomeNav = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default HomeNav