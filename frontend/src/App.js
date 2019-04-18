import React, { Component } from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router'
import {DigitProviders, DigitHeader} from '@cthit/react-digit-components';


import Home from './components/Home'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <DigitProviders>
            <Home />
      </DigitProviders>
    );
  }
}

export default App;
