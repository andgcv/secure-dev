import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { CybersecurityIntro } from './components/CybersecurityIntro';
import { ImportantCybercrimes } from './components/ImportantCybercrimes';
import { CryptographyIntro } from './components/CryptographyIntro';
import { WhatIsData } from './components/WhatIsData';
import { EncryptionDecryption } from './components/EncryptionDecryption';
import { Algorithm3DES } from './components/Algorithm3DES';
import { AlgorithmAES } from './components/AlgorithmAES';
import { AlgorithmRSA } from './components/AlgorithmRSA';
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
              <Route path="/important-cybercrimes" component={ImportantCybercrimes} />
              <Route path="/cryptography-intro" component={CryptographyIntro} />
              <Route path="/what-is-data" component={WhatIsData} />
              <Route path="/encryption-and-decryption" component={EncryptionDecryption} />
              <Route path="/3des" component={Algorithm3DES} />
              <Route path="/aes" component={AlgorithmAES} />
              <Route path="/rsa" component={AlgorithmRSA} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;