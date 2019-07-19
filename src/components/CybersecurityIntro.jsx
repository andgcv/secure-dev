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

export const CybersecurityIntro = () => (
    <Styles>
        <div>
            <h1>Introduction to Cybersecurity</h1>

            <hr/>

            <h2>First, some context</h2>

            <p>Security is one of the basic necessities of humankind, as it is directly related to our survival. It’s one of the necessities that can be found on the famous “Maslow’s Hierarchy of Needs”, however, it was not always on the top of the list of priorities, of implementations to make on the software applications of developers all around the world. In the old days, investment in security on software applications meant investment with no monetary return.</p>
            <p>Nowadays, however, an application with no security is the same as an application on which consumers don’t trust, and an application that they refuse to use, as they don’t want to risk spreading, involuntarily, their personal information, which they want to remain secret.</p>
            <p>It is through these words that I try to show the importance, to developers or clients, CEO’s or freelancers, of implementing security systems to our products, as a means to process the user’s personal data in a secure matter.</p>
            
            <img className="img-with-source" src="./assets/CybersecurityIntro1.jpg" alt="Cybersecurity screen"/>
            <p className="quote source">Importance of cybersecurity.</p>

            <h2>So what's the whole fuss about?</h2>

            <p>With the increase of the number of users all across the Internet in the past few years, comes an increase of the necessity of Cybersecurity, which forces developers across the globe to invest on resources that will protect users from any sort of security breach that would enable access, from malicious entities, to these users' personal data.</p>
            
            <div className="quote">
                <p>“According to ITU, in developed countries, slow and steady growth increased the percentage of population using the Internet, from 51.3 per cent in 2005 to 80.9 per cent in 2018. In developing countries, growth has been much more sustained increasing from 7.7 per cent in 2005 to 45.3 per cent at the end of 2018.”</p>
                <p className="source">International Telecommunication Union. ITU releases 2018 global and regional ICT estimates. December 7, 2018.</p>
            </div>

            <img className="img-with-source" src="./assets/CybersecurityIntro2.jpg" alt="Graph of Internet users"/>
            <p className="quote source">International Telecommunication Union. ITU estimates that at the end of 2018, 51.2 percent of the global population, or 3.9 billion people, were using the Internet. 2018.</p>

            <h2>Define "Cybersecurity", please</h2>

            <p>Originally invented by the german Bernd Fix, due to documenting the first ever computer virus removal, we can define Cybersecurity as a group of tecnological measures, that involve networks, systems, browsers, anti-viruses, criptography, etc., aimed at safeguarding the confidentiality, integrity and availability of information, against cyber attacks, such as Cybercrimes, Hacktivism, Cyberspying and Cyberterrorism.</p>
        </div>
    </Styles>
)
