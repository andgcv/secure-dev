import React from 'react';
import { Container } from 'react-bootstrap';
import Style from 'styled-components';

export const Layout = (props) => (
    <Container className="col-md-10 float-left">
        {props.children}
    </Container>
)