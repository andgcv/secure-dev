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

export const AlgorithmAES = () => (
    <Styles>
        <div>
            <h1>AES</h1>

            <hr/>

            <h2>What is it?</h2>

            <p>AES - Advanced Encryption Standard, also known as Rijndael - is an alternative to DES, created in 2001 by two belgian cryptographers, Vincent Rijmen and Joan Daemen.</p>
            <p>It's a symmetric-key algorithm, based on block ciphers, with key lengths of 128, 192 and 256 bits, which are widely considered to be secure against brute-force attacks for many decades to come. There are also no analytical attacks with any reasonable change of success known.</p>

            <h2>How it works</h2>

            <p>Okay, first step - we need to divide de data into blocks.<br/>
            Each block size, for AES, is 128 bits, so it separates the data into four-by-four columns of 16 bytes (128 bits).</p>
            <p>Each AES encryption has a different number of cycles, depending on the size of the key:</p>
            <ul>
                <li><strong>128 bit key</strong> - 10 cycles;</li>
                <li><strong>192 bit key</strong> - 12 cycles;</li>
                <li><strong>256 bit key</strong> - 14 cycles.</li>
            </ul>

            <img className="img-with-source" src="./assets/AES.png" alt="AES figure."/>
            <p className="quote source">Paar, C., Pelzl, J. Understanding Cryptography - A Textbook for Students and Practitioners. 2009.</p>

            <p>Each cycle is composed of three operations:</p>
            <ul>
                <li><strong>Substitution</strong> - using the "S-box" table;</li>
                <li><strong>Diffusion</strong> - by shifting and mixing bits;</li>
                <li><strong>Addition</strong> - using an XOR-mask.</li>
            </ul>

            <img className="img-with-source" src="./assets/AES-Overview.jpg" alt="Diagram of AES."/>
            <p className="quote source">Botcrawl. What is AES? March 1, 2019.</p>

            <p>Just like the DES algorithm, AES uses, on each cycle, a sub-key, K<sub>n</sub>, obtained from the main key, K. Also to note, there's always one more sub-key than the number of cycles in the encryption, the reason is, the extra sub-key is used first, prior to any of the cycles.</p>
            <p>To generate each sub-key, the first one, K<sub>0</sub>, is equal to the main key, and the second key, K<sub>1</sub> will depend on the K<sub>0</sub> and the "g function".</p>

            <img className="img-with-source" src="./assets/AES-KeySchedule.png" alt="Diagram of AES key scheduling."/>
            <p className="quote source">Paar, C., Pelzl, J. Understanding Cryptography - A Textbook for Students and Practitioners. 2009.</p>

            <img className="img-with-source" src="./assets/AES-Complete.png" alt="Complete diagram of AES."/>
            <p className="quote source">Paar, C., Pelzl, J. Understanding Cryptography - A Textbook for Students and Practitioners. 2009.</p>

            <h2>Where is it used?</h2>

            <p>The Advanced Encryption Standard is mostly implemented in secure file transfer protocols, like HTTPS, SFTP, FTPS, OFTP, AS2 and WebDAVS, to encrypt the data passing through these.</p>
        </div>
    </Styles>
)