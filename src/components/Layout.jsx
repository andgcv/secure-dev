import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
    <Container className="col-md-10 float-left">
        {props.children}
    </Container>
)