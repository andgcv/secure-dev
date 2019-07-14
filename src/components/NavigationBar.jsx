import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
    background-color: white;
    border-radius: 0 15px 15px 0;
    box-shadow: 5px 0 20px 0px rgba(0,0,0,0.3);
}

.navbar-nav .nav-link {
    color: #bbb;

    &:hover {
        color: white;
    }
}

.navbar-brand {
    margin: 0;
}

.navbar-brand img{
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
}
`;

export const NavigationBar = () => (
    <Styles className="col-md-2 float-left padding-left-zero">
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column">
                    <Navbar.Brand href="/"><img src="/assets/Logo.png" /></Navbar.Brand>
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