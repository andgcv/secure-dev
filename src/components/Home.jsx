import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome!</h2>
                    <p>Here you'll find information about Cryptography and stuff.</p>
                </Jumbotron>
                <Link to='/md5'>
                    <Button bsStyle="primary">MD5 Info</Button>
                </Link>
            </Container>
        )
    }
}
