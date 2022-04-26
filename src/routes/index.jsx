import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import NotFound from '../components/NotFound';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Login } />
        {/* <Route exact path="/foods" component={ Foods } />
        <Route exact path="/foods/:id" component={ Foods } />
        <Route exact path="/foods/:id/in-progress" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/drinks/:id" component={ Drinks } />
        <Route exact path="/drinks/:id/in-progress" component={ Drinks } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ Explore } />
        <Route exact path="/explore/drinks" component={ Explore } />
        <Route exact path="/explore/foods/ingredients" component={ Explore } />
        <Route exact path="/explore/drinks/ingredients" component={ Explore } />
        <Route exact path="/explore/foods/nationalities" component={ Explore } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } /> */}
        <Route path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default Routes;
