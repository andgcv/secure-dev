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

export const AlgorithmRSA = () => (
    <Styles>
        <div>
            <h1>RSA</h1>

            <hr/>

            <h2>What is it?</h2>
            
            <p>RSA, short for Rivest-Shamir-Adleman, was one of the first cryptographic systems to use a public key, which means, you guessed it, it is an asymmetric cryptography algorithm.</p>
            <p>Created by Ron Rivest, Adi Shamir and Leonard Adleman, in 1978, it is considered one of the most secure algorithms ever created.</p>

            <h2>How it works</h2>

            <p>The whole idea behind the creation of RSA is that it is too difficult to factorize a large integer.</p>
            <p>The public key of this algorithm consists of two numbers, where one of the numbers is a multiplication of two, large, prime numbers. The private key is also derived from the same two numbers, which means, if someone can factorize the large number, the private private is compromised.</p>
            <p>With that in mind, this encryption's strength lies entirely on the key size, and if we increase it's size by two or three, then the strength of the whole algorithm grows exponentially.</p>
            <p>RSA keys are usually 1024 or 2048 bits long, however, cryptography experts fear that 1024 bit keys may be broken in the near future. Until now this seems to be an infeasible task.</p>
            <p>RSA is also based on a one-way, trapdoor function, which is a function that is easy to compute in one way, but incredibly difficult to compute in the opposite direction (finding it's inverse), and this one, specifically, is based on the problem of prime factorization.</p>

            <img className="img-with-source" src="./assets/RSA-Complete.png" alt="Diagram of how RSA works."/>
            <p className="quote source">Short Tech Stories. How does RSA work? June 23, 2017.</p>

            <h2>Where is it used?</h2>

            <p>RSA, ultimately, is used to encrypt communications between two parties. It's incredibly useful when trying to communicate, securely, with an entity that we've never met.</p>
            <p>With that being said, this algorithm can be seen all around the Internet, it is used regularly in web browsers, chat applications, email, VPNs, and any other types of commmunications that require a secure way of sending data to servers or people we haven't met before.</p>
        </div>
    </Styles>
)