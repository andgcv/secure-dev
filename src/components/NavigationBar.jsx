import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: white;
        border-radius: 0 15px 15px 0;
        box-shadow: 5px 0 20px 0px rgba(0,0,0,0.3);
    }

    .navbar h2 {
        font-size: 16pt;
        font-weight: bold;
        padding-top: 40px;
        padding-bottom: 10px;
    }

    .navbar-nav .nav-link {
        color: #434343;
        padding-left: 15px;
        transition: background-color .2s, color .2s;

        &:focus,
        &:hover {
            background-color: var(--header-color);
            color: var(--cream-color);
            font-weight: bold !important;
        }
    }

    .navbar-nav {
        padding-bottom: 30px;
    }

    .navbar-brand {
        margin: 0;
    }

    .navbar-brand img{
        width: 40%;
        display: block;
        margin: 20px auto 16px auto;
    }

    @media screen and (max-width: 992px) {
        .navbar {
            position: fixed;
            z-index: 5;
        }

        .navbar-toggler {
            border: none;
            width: 6vh !important;
            height: 5vh !important;
            padding: 0 !important;
            margin: 0 !important;
        }

        .navbar-toggler-icon {
            display: block;
            width: 3vh !important;
            height: 3vh !important;
            margin: 0 auto;
        }

        --page-height: initial;

    }
`;

export const NavigationBar = () => (
    <Styles className="col-md-3 float-left padding-left-zero padding-right-zero full-height-percent">   
        <Navbar expand="lg" className="full-height-percent">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column full-height-vh">
                    <Navbar.Brand href="/"><img src="/assets/BrandLogo.png" alt="Brand logo"/></Navbar.Brand>
                    <div className="scroll">
                        <h2>Cybersecurity</h2>
                        <Nav.Item><Nav.Link href="/cybersecurity-intro">Introduction</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/important-cybercrimes">Important Cybercrimes</Nav.Link></Nav.Item>
                        <h2>Cryptography</h2>
                        <Nav.Item><Nav.Link href="/cryptography-intro">Introduction</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/what-is-data">What is data?</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/encryption-and-decryption">Encryption and Decryption</Nav.Link></Nav.Item>
                        <h2>Commonly used algorithms</h2>
                        <Nav.Item><Nav.Link href="/3des">3DES</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/aes">AES</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/rsa">RSA</Nav.Link></Nav.Item>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)