import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <Route exact path="/user">
        <p>Hello I am a user</p>
      </Route>

      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router> 
  )   
}

export default App;
