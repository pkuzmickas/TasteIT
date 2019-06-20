import React, { Component } from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router'
import {DigitDialog, DigitProviders,
        DigitHeader, DigitNavLink} from '@cthit/react-digit-components';

import Router from './components/Router'
import NotFound from './components/NotFound'

class App extends Component {

  routeHome = () => {

  }

  routeUpload = () => {

  }

  render() {
    return (
      <DigitProviders>
        <DigitHeader title="TasteIT"
                     renderMain={() => <Router />}
                     preloadedState={{
                      loading: true
                     }}
                     defaultLanguage="en"
                     renderDrawer={() => (
                       <div className="headerNavLinks">
                         <DigitNavLink text="View recipes" onClick={this.routeHome} />
                         <DigitNavLink text="Upload recipe" onClick={this.routeUpload} />
                       </div>
                     )} />
        <DigitDialog></DigitDialog>
      </DigitProviders>
    );
  }
}

export default App;
