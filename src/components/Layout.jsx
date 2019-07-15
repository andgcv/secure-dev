import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
    <Container className="col-md-9 float-left full-height-percent scroll">
        {props.children}
    </Container>
)