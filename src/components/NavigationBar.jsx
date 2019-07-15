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
    color: #434343;

    &:hover {
        color: #5F2D39;
    }
}

.navbar-brand {
    margin: 0;
}

.navbar-brand img{
    width: 40%;
    display: block;
    margin: 20px auto 16px auto;
}
`;

export const NavigationBar = () => (
    <Styles className="col-md-3 float-left padding-left-zero full-height-percent">
        <Navbar expand="lg" className="full-height-percent">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column full-height-vh scroll">
                    <Navbar.Brand href="/"><img src="/assets/BrandLogo.png" alt="Brand logo"/></Navbar.Brand>
                    <h2>Cybersecurity</h2>
                    <Nav.Item><Nav.Link href="/cybersecurity-intro">Introduction</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/cybersecurity-and-cybercrimes">Cybersecurity and Cybercrimes</Nav.Link></Nav.Item>
                    <h2>Cryptography</h2>
                    <Nav.Item><Nav.Link href="/cryptography-intro">Introduction</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/data">What is data?</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/transfering-data">Transfering data securely</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/encryption-and-decryption">Encrytion and Decryption</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/common-algorithms">Commonly used algorithms</Nav.Link></Nav.Item>
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