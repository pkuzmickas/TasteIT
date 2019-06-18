import React, { Component } from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router'
import {DigitDialog, DigitProviders, DigitHeader} from '@cthit/react-digit-components';

import Router from './components/Router'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <DigitProviders>
        <DigitHeader title="TasteIT"
          renderMain={() => <Router />}
          preloadedState={{
            loading: true
          }}
          defaultLanguage="en" />
        <DigitDialog></DigitDialog>
      </DigitProviders>
    );
  }
}

export default App;
