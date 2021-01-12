import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, Signup, Signin } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect } from './helpers/routes';

function App() {

  const user = {};

  return (
    <Router>
      <Route exact path="/browse">
        <Browse />
      </Route>

      <IsUserRedirect 
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        exact
      >
        <Signup />
      </IsUserRedirect>

      <IsUserRedirect 
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact
      >
        <Signin />
      </IsUserRedirect>

      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router> 
  )   
}

export default App;
