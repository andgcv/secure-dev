import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    h2 {
        padding: 10px 0;
    }

    hr {
        padding-bottom: 10px;
    }

    img {
        width: 50%;
        display: block;
        margin: 60px auto;
        border-radius: 15px;
        box-shadow: 0 0 20px 0px rgba(0,0,0,0.3);
        -webkit-transition:all 0.5s ease-out;
        -moz-transition:all 0.5s ease-out;
        -ms-transition:all 0.5s ease-out;
        -o-transition:all 0.5s ease-out;
        transition:all 0.5s ease-out;

        &:hover {
            -webkit-transform:scale(1.1);
            -moz-transform:scale(1.1);
            -ms-transform:scale(1.1);
            -o-transform:scale(1.1);
            transform:scale(1.1);
          }
    }

    .img-with-source {
        margin-bottom: 0 !important;
    }

    .quote {
        text-align: center !important;
        font-style: italic;
        padding: 30px 0;
        margin: 0 auto;
        width: 70%;
    }

    .source {
        font-size: 10pt;
    }

    @media screen and (max-width: 992px) {
        img {
            width: 90%;
        }
    }
`;

export const WhatIsData = () => (
    <Styles>
        <div>
            <h1>What is Data?</h1>

            <hr/>

            <h2>Two-sided</h2>

            <p>The meaning of "Data" can vary, depending on the nature of the subject we're discussing.</p>
            <p>On a fundamental level, data can be described as anything perceived by our senses. This ranges from the images, of a beautiful mountain, our eyes capture and send to our brain, to the - weird - feeling we get when we hit our funny bone on the chair.</p>

            <img className="img-with-source" src ="./assets/WhatIsDataEye.jpg" alt="Eye receiving the data surrounding it."/>
            <p className="quote source">Eye capturing and storing data surrounding it.</p>

            <h2>Computer Data?</h2>

            <p>Just the same way our eyes process and send the images to our brain, in an organized manner, for storage, so does the computer, in the form of organized, binary, information. And that's exactly how we categorize "data" when we're refering to the ample fields of the IT world.</p>

            <div className="quote">
                <p>In general, data is any set of characters that is gathered and translated for some purpose, usually analysis. It can be any character, including text and numbers, pictures, sound, or video. If data is not put into context, it doesn't do anything to a human or computer.
                    <br/>Within a computer's storage, data is a collection of numbers represented as bytes that are in turn composed of bits (binary digits) that can have the value one or zero. Data is processed by the CPU, which uses logical operations to produce new data (output) from source data (input).</p>
                <p className="source">Computer Hope. Data. June 30, 2019.</p>
            </div>

            <img className="img-with-source" src="./assets/WhatIsDataStorage.jpg" alt="Storage compartment, that stores data."/>
            <p className="quote source">There are many ways to store data in a computer.</p>
        </div>
    </Styles>
)