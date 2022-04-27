import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/foods/:id" component={ Foods } />
        <Route exact path="/foods/:id/in-progress" component={ Foods } />
        <Route exact path="/drinks" component={ Foods } />
        <Route exact path="/drinks/:id" component={ Foods } />
        <Route exact path="/drinks/:id/in-progress" component={ Foods } />
        <Route exact path="/explore" component={ Foods } />
        <Route exact path="/explore/foods" component={ Foods } />
        <Route exact path="/explore/drinks" component={ Foods } />
        <Route exact path="/explore/foods/ingredients" component={ Foods } />
        <Route exact path="/explore/drinks/ingredients" component={ Foods } />
        <Route exact path="/explore/foods/nationalities" component={ Foods } />
        <Route exact path="/profile" component={ Foods } />
        <Route exact path="/done-recipes" component={ Foods } />
        <Route exact path="/favorite-recipes" component={ Foods } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default Routes;
