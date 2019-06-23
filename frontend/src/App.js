import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router'
import {DigitDialog, DigitProviders,
        DigitHeader, DigitNavLink,
        DigitText} from '@cthit/react-digit-components';

import Router from './components/Router'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {

  render() {
    return (
      <DigitProviders>
        <DigitHeader title="TasteIT"
                     renderMain={() => <Router />}
                     preloadedState={{
                      loading: true
                     }}
                     defaultLanguage="en"
                     renderDrawer={closeDrawer => (
                       <div className="headerNavLinks">
                         <a href="/">{
                            <DigitText.Text text="View recipe" />
                                       }
                         </a>
                         <a href="/upload">{
                             <DigitText.Text text="Upload recipe" />
                           }
                         </a>
                       </div>
                     )} />
      </DigitProviders>
    );
  }
}

export default App;
