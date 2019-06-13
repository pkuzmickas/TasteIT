import React, {Component} from 'react'
import {BrowserRouter, Switch} from 'react-router-dom'
import {Route} from 'react-router';

import Home from './Home'
import Upload from './Upload'
import Recipe from './Recipe'
import IngredientCreator from './elements/upload/IngredientCreator.js'
import NotFound from './NotFound'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/upload" component={Upload} />
          <Route path="/recipe" component={Recipe} />
          <Route path="/test" component={IngredientCreator} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
