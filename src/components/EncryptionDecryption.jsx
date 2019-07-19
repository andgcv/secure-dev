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

export const EncryptionDecryption = () => (
    <Styles>
        <div>
            <h1>Encryption and Decryption</h1>

            <hr/>

            <h2>Brief overview</h2>

            <p>Let's start by defining what encryption is. According to <a href="https://www.techopedia.com/definition/5507/encryption" rel="noopener noreferrer" target="_blank">Techopedia</a>, encryption can be defined as "the process of using an algorithm to transform information to make it unreadable for unauthorized users".<br/>This is done through algorithms that take advantage of cycles composed of "confusion and diffusion", more on this later.</p>
            <p>Encryption can also be divided in two branches, based on the algorithms that are being used: Symmetric encryption, and Asymmetric encryption. I will explain these in further detail, but first let's tackle on the meaning of decryption.</p>
            <p>If encryption is the process of making information unreadable, then, naturally, decryption is the process of making this information readable again, to the user, that means, reversing the encrypted data into it's original form.</p>

            <img className="img-with-source" src="./assets/EncryptionDecryptionSecurity.jpg" alt="Screen of terminal"/>
            <p className="quote source">Encryption and decryption form the roots of Cryptography.</p>

            <h2>Symmetric Cryptography</h2>

            <p>When using symmetric algorithms, both entities (the sender and the receiver of the information) share one, and only one, encryption and decryption key. This key, since it is used by both parts, has to be sent through the message itself, which is one of the vulnerabilities of this method.</p>
            <p>The process goes as follows: The sender encrypts the message with his key, he then sends the encrypted message with the key attached to it, so the receiver can decrypt it and reverse it to the original form.</p>
            <p>Some popular algorithms that were used in the past, or are still being used, include:</p>
            <ul>
                <li>DES</li>
                <li>3DES</li>
                <li>AES</li>
                <li>IDEA</li>
                <li>Blowfish</li>
                <li>Twofish</li>
            </ul>
            <p>Some of these algorithms, such as 3DES and AES are covered in other sections of this website and can be found on navigation menu.</p>

            <img className="img-with-source" src="./assets/SymmetricKeys.png" alt="Diagram of how symmetric keys work."/>
            <p className="quote source">SSL2BUY. Symmetric vs. Asymmetric Encryption - What are the differences?</p>

            <p>Since the old days, up until 1976, all of cryptography was based on symmetric methods, this changed when Whitfield Diffie, Martin Hellman and Ralph Merkle introduced, to the cybersecurity community, a cipher rather unusual to what was used at the time - the Diffie-Hellman cypher.</p>
            <p>This incredible algorithm allowed two entities to exchange symmetric keys, secretly, through public communication. As this method became more and more used by the cybersecurity experts, the risk of attacks grew exponentially larger, specifically, the "Man-In-The-Middle" attack, which was an immense weakness of the Diffie-Hellman algorithm.</p>

            <h2>Asymmetric Cryptography</h2>

            <p>So by 1976, the need for a different encryption method emerged, mainly to encrypt the communications by which the entities exchanged the symmetric keys.</p>
            <p>"Asymmetric algorithms" is what we call them, these can be used to create digital signatures and to settle the symmetric keys, and they were fundamental to fight the "Man-In-The-Middle" attack.</p>
            <p>On a fundamental level, this method is composed of two keys - a public key, and a private key - and these are connected through a mathematical algorithm</p>
            <p>In order to encrypt the communications, the receiver of the messages knows both the public and the private keys. He then shares his public key, freely, while making sure his private key stays hidden. The sender of the message uses the receiver's public key to encrypt, and then send, the document. The receiver, finally, receives the document and decrypts it with his private key.</p>
            
            <img className="img-with-source" src="./assets/AsymmetricKeys.png" alt="Diagram of how asymmetric keys work."/>
            <p className="quote source">Sankaran, Nambi. Generating RSA Private and Public Keys. 2019.</p>

            <p>Some examples of asymmetric algorithms include:</p>
            <ul>
                <li>Diffie-Hellman (despite not being used to encrypt or decrypt message)</li>
                <li>El Gamal</li>
                <li>RSA</li>
                <li>DSA</li>
                <li>ECC</li>
            </ul>
            <p>The RSA asymmetric algorithm is covered in another section of the website, and can be found through the navigation menu.</p>

            <h2>Stream ciphers and Block ciphers</h2>

            <p>To understand how the various encryption methods work, first we need to understand what stream ciphers and block ciphers are, as they pretty much represent the "guts" of these algorithms.</p>
            <p>Symmetric cryptography is divided into two types of ciphers - stream ciphers and block ciphers - which are pretty easy to distinguish.</p>
            <p>Stream ciphers encrypt each bit individually. This can be done by adding a bit from the key stream to a bit from the plaintext. These ciphers can also be split into two - synchronous stream ciphers when the key depends, solely, on itself, and asynchronous stream ciphers when the key depends not only on itself, but also on the encrypted text of each of the algorithm's cycle.</p>

            <img className="img-with-source" src="./assets/StreamCipher.png" alt="Diagram of how a stream cipher works."/>
            <p className="quote source">Yorkville High School Computer Science. Stream vs. Block Ciphers.</p>

            <p>Block ciphers encrypt an entire block of bits on each cycle, with the same key. The size of each block varies, depending on the algorithm that we're using. Usually, it's size ranges from 8 bytes (64 bits) to 16 bytes (128 bits), but there are exceptions.<br/>
            Reaching back to some of the algorithms that we mentioned earlier, AES takes advantage of a 128 bit block cipher, while the DES and 3DES algorithms are based on 64 bit block ciphers.</p>

            <img className="img-with-source" src="./assets/BlockCipher.png" alt="Diagram of how a block cipher works."/>
            <p className="quote source">Yorkville High School Computer Science. Stream vs. Block Ciphers.</p>

            <p>Finally, I'd like to mention some important facts about stream ciphers and block ciphers:</p>
            <ol>
                <li>Block ciphers are used more often than stream ciphers, specially for encrypting computer communication through the Internet.</li>
                <li>Due to their virtues of being small and fast, stream ciphers are particularly useful for applications with few computational resources. Stream ciphers are also, sometimes, used for encrypting Internet traffic, specially using the RC4 stream cipher.</li>
            </ol>
        </div>
    </Styles>
)