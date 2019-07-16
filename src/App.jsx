import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { CybersecurityIntro } from './components/CybersecurityIntro';
import { CybersecurityCybercrimes } from './components/CybersecurityCybercrimes';
import { CryptographyIntro } from './components/CryptographyIntro';
import { WhatIsData } from './components/WhatIsData';
import { TransferData } from './components/TransferData';
import { EncryptionDecryption } from './components/EncryptionDecryption';
import { CommonAlgorithms } from './components/CommonAlgorithms';
import { Algorithm3DES } from './components/Algorithm3DES';
import { AlgorithmAES } from './components/AlgorithmAES';
import { AlgorithmRSA } from './components/AlgorithmRSA';
import { AlgorithmBlowfish } from './components/AlgorithmBlowfish';
import { AlgorithmTwofish } from './components/AlgorithmTwofish';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cybersecurity-intro" component={CybersecurityIntro} />
              <Route path="/cybersecurity-and-cybercrimes" component={CybersecurityCybercrimes} />
              <Route path="/cryptography-intro" component={CryptographyIntro} />
              <Route path="/what-is-data" component={WhatIsData} />
              <Route path="/transfer-data-securely" component={TransferData} />
              <Route path="/encryption-and-decryption" component={EncryptionDecryption} />
              <Route path="/common-algorithms" component={CommonAlgorithms} />
              <Route path="/3des" component={Algorithm3DES} />
              <Route path="/aes" component={AlgorithmAES} />
              <Route path="/rsa" component={AlgorithmRSA} />
              <Route path="/blowfish" component={AlgorithmBlowfish} />
              <Route path="/twofish" component={AlgorithmTwofish} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;