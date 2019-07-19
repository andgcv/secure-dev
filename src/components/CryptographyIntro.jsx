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

export const CryptographyIntro = () => (
    <Styles>
        <div>
            <h1>Introduction to Cryptography</h1>

            <hr/>

            <h2>Cryptography and it's roots</h2>

            <p>Cryptography, although it seems a relatively new concept and uniquely connected to modern electronic communications, has its roots in the twentieth century b.C, when "secret" hieroglyphs were used by ancient Egypt. Since then, cryptography has been used in most of the cultures that fabricated their written languages.</p>
            <p>We can see some documented cases of secret writings, such as the "Scythe of Sparta", ancient Greece, the "Caesar Cipher" of ancient Rome, or even the famous "Morse Code", created by Samuel Morse in 1835. The principles of many of these ancient cyphers are still found in modern cryptography, such as the "Principle of Transposition" and the "Principle of Substitution", because of their tremendous efficiency.</p>
            <p>Encryption, the science of secret scripts intended to hide the meaning of messages, joins its opposite, cryptoanalysis, science - and sometimes art - of trying to discover ciphertext and the logic behind it's encryption algorithm (science of breaking cryptographic systems), to form a more loose term, called Cryptology.</p>
            <img className="img-with-source" src="./assets/CryptographyIntroEncrypt.jpg" alt="Encrypted text screen"/>
            <p className="quote source">Strings of encrypted text.</p>

            <h2>So what exacly is Cryptography?</h2>

            <div className="quote">
                <p>“The fundamental objective of cryptography is to enable two people, usually referred to as Alice and Bob, to communicate over an insecure channel in such a way that an opponent, Oscar, cannot understand what is being said. This channel could be a telephone line or computer network, for example. The information that Alice wants to send to Bob, which we call “plaintext,” can be English text, numerical data, or anything at all — its structure is completely arbitrary. Alice encrypts the plaintext, using a predetermined key, and sends the resulting ciphertext over the channel. Oscar, upon seeing the ciphertext in the channel by eavesdropping, cannot determine what the plaintext was; but Bob, who knows the encryption key, can decrypt the ciphertext and reconstruct the plaintext.”</p>
                <p className="source">Stinson, D. R. Cryptography - Theory and Practice (3rd edition). 2005.</p>
            </div>

            <p>Here we can see the fundamental idea of encrypting communications through secret keys / secret algorithms. Cryptography is divided into 3 main branches: symmetric algorithms, asymmetric algorithms and cryptographic protocols.<br/>These will be explained in further detail on the respective sections of the website.</p>
            <p>Due to it's intrinsic relation to cryptography, it is also crucial to mention that the science of cryptoanalysis is also as important, if not more important than, cryptography itself. The reason is, with noone trying to break our crypto methods, we will never know whether they are really secure or not.</p>
        </div>
    </Styles>
)