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

export const ImportantCybercrimes = () => (
    <Styles>
        <div>
            <h1>Important Cybercrimes</h1>

            <hr/>

            <h2>Cybercrime? What is that?</h2>

            <p>With the increase of usage of the cyberspace, came the emergence of cybercrimes.<br/>These "cybercrimes" can be defined simply as criminal activity within the cyberspace, through different forms and in different contexts.</p>
            <p>As a way to regulate these illicit practices, there was a need to establish categories in which the different typologies of criminal activity, in this space, could be integrated.</p>


            <h2>Let's get to know them</h2>

            <p>There are a few cybercrimes that stand out from all the others, and are often mentioned in all sorts of sources regarding not only cybersecurity, but also security as a whole.</p>
            <p>So let's get to know them a little better:</p>

            <ul>
                <li><strong>Hacktivism</strong> - Simply put, this can be defined as activism through hacking. Initially, this practice was developed by specialists that were trying to find faults in the systems, followed by a phase where the interest was in creating something new and destructive. Finally, the Hacktivism reached an expression of activities of criminal nature, which range from piracy to the development and implementaiton of malwares. With this in mind, we also know that hackers can be categorized by different types of criminal activity within this spectrum: Hackers, Phreakers, Crackers, Cypherpunks and Cryptoanarchist.</li>
                <img className="img-with-source" src="./assets/CybercrimesHacktivism.jpg" alt="Hacker performing his usual deed."/>
                <p className="quote source">Hacker performing hacktivism.</p>

                <li><strong>Cyberspying</strong> - Cyberspying is a criminal activity aimed at obtaining information, illegally, through cybernetic means, for the entity's own benefit, or to obtain a monetary value from selling this information.</li>
                <img className="img-with-source" src="./assets/CybercrimesCyberspying.jpg" alt="Spying man."/>
                <p className="quote source">Man spying through the web.</p>

                <li><strong>Cyberterrorism</strong> - The name is somewhat self-explanatory. The cyberterrorist uses cybernetic means to destroy physical equipment, in order to make a significant impact, socially and politically.</li>
                <img className="img-with-source" src="./assets/CybercrimesCyberterrorism.jpg" alt="Destroyed building."/>
                <p className="quote source">The damage a cyberterrorist can do.</p>
            </ul>
        </div>
    </Styles>
)