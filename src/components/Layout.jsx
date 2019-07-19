import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .container {
        padding: 3% 5% 5% 5%;
    }

    .container h1 {
        text-align: center;
        font-weight: bold;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .container p {
        text-align: justify;
        text-justify: inter-word;
    }
`

export const Layout = (props) => (
    <Styles className="col-md-9 float-left full-height-percent">
        <Container className="full-height-percent scroll">
            {props.children}
        </Container>
    </Styles>
)