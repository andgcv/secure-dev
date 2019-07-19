import React from 'react';
import styled from 'styled-components';


const Styles = styled.div`
    h1 {
        font-size: 4em;
    }

    h2 {
        font-size: 2em;
        padding: 10px 0;
        text-align: center !important;
    }

    p {
        font-size: 16pt;
        padding-bottom: 20px;
    }

    hr {
        padding-bottom: 10px;
    }

    img {
        width: 80%;
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

    .vertical {
        width: 35% !important;
    }

    @media screen and (max-width: 992px) {
        img {
            width: 90%;
        }
    }
`;

export const Home = () => (
    <Styles>
        <div>
            <h1>Welcome to SecureDev!</h1>

            <hr/>
            
            <h2>All About Security</h2>
            <p>Welcome to my website! Here you will be able to find all sorts of information regarding Cybersecurity, Cybercrimes, Cryptoanalysis, Cryptography, various encryption and decryption algorithms used in this field and detailed information about them.</p>

            <hr/>

            <h2>Monthly Newsletter</h2>
            <p>Don't forget to subscribe to the Newsletter if you wish to receive a monthly, curated, list of only the best sources for you to learn from. Don't worry, we'll make it easy for you to catch up on your reading!</p>

            <hr/>

            <h2>More Information? Social Medias!</h2>
            {/* Placeholder links, para quando tivesse handles validos */}
            <p>Be sure to follow us on <a href="/">Facebook</a>, <a href="/">Twitter</a> and <a href="/">Instagram</a> for more security-related shenanigans.</p>
        </div>
    </Styles>
)