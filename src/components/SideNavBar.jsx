import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class SideNavBar extends Component {
    render() {
        return (
            <Nav
            activeKey="/"
            className="flex-column"
            >
                <Nav.Item>
                    <Nav.Link eventKey="1" href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" href="/md5">MD5</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}
