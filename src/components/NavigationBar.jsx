import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: #222;
}

.navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
        color: white;
    }
}
`;

export const NavigationBar = () => (
    <Styles className="col-md-2 float-left">
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Navbar.Brand href="/"></Navbar.Brand>
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/3des">3DES</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/aes">AES</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/rsa">RSA</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/blowfish">Blowfish</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/twofish">Twofish</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)