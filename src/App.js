import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, Signup, Signin } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

export default function App() {

  const user = null;

  return (
    <Router>
      <Switch>
        <ProtectedRoute user={user} path={ROUTES.BROWSE} >
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect 
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>

        <IsUserRedirect 
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>

        <IsUserRedirect 
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
      </Switch>
    </Router> 
  )   
}

// export default App;
