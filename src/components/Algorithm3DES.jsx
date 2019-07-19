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

    .vertical {
        width: 35% !important;
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

export const Algorithm3DES = () => (
    <Styles>
        <div>
            <h1>3DES</h1>

            <hr/>

            <h2>What is it?</h2>
            <p>3DES or TDES, short for Triple Data Encryption Standard, is a symmetric cryptography algorithm based on the, now disallowed, algorithm "DES". Although DES is not used on almost any application nowadays, due to being too insecure because of it's short key length of only 56 bits, it was highly influential in the advancement of modern cryptography.</p>
            <p>Although almost obsolete, the reason why 3DES is still viable nowadays, even though it is based on DES, is because 3DES triplicates the 56 bit key that DES uses, greatly increasing the number of tries needed from the attackers to brute-force their way into our decrypted message.</p>

            <h2>How it works</h2>
            <p>I guess I should start by explaining how DES works.</p>
            <p>Let's start with the basics.<br/>
            DES is a cipher that encrypts 64 bit blocks at a time, with a 56 bit key. It is, like almost all block ciphers nowadays, an interative algorithm, more specifically, one with 16 iterations / cycles of identical operations of confusion and diffusion.<br/>
            For each of these iterations, a different sub-key (k<sub>n</sub>) is used, based on the main key (k).<br/>
            The secret of this algorithm, however, lies on the use of a secret permutation table.</p>
            <p>This algorithm is composed of an initial and final permutation, the "f-function" and a key schedule.</p>
            <p>The initial and final permutation simply take care of swapping the bits of the text around, on the first and the final cycle of the process.</p>

            <img className="img-with-source vertical" src="./assets/DES-Permutations.png" alt="Permutations of DES algorithm."/>
            <p className="quote source">Paar, C., Pelzl, J. Understanding Cryptography - A Textbook for Students and Practitioners. 2009.</p>

            <p>The "f-function", the brain of this algorithm, plays a crucial role for the security of DES. On a fundamental level, this functions takes, as input, half the output of the previous cycle, plus the current cycle's sub-key, and mixes them together using an XOR-mask, in order to encrypt the left half of the input bits.</p>

            <img className="img-with-source vertical" src="./assets/DES-f-Function.png" alt="Algorithm DES: f-function"/>
            <p className="quote source">Paar, C., Pelzl, J. Understanding Cryptography - A Textbook for Students and Practitioners. 2009.</p>

            <p>Finally, we have the key schedule.<br/>
            The key schedule is the source of the sub-keys (K<sub>n</sub>), consisting of 48 bits, for each of the 16 cycles, from the main key (K) which has 56 bits.</p>
            <p>What differs, then, the DES algorithm from the 3DES algorithm? Not much really, the structure is the same, however, 3DES is composed of a 168 bit key, instead of 56 bits, which results from 48 cycles, 3 times the size of DES.</p>

            <img className="img-with-source" src="./assets/3DES.png" alt="How 3DES works."/>
            <p className="quote source">Paar, C., Pelzl, J. Understanding Cryptography - A Textbook for Students and Practitioners. 2009.</p>

            <h2>Where is it used?</h2>
            
            <p>Although almost obsolete, 3DES is still used broadly in finance, payment and other private industries to encrypt data in-transit and at-rest, including EMV keys for protecting credit card transactions.</p>
            <p>That being said, it is important to note that 3DES is to be deprecated for all new applications and usage is to be disallowed after 2023.</p>
        </div>
    </Styles>
)