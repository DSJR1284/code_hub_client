import React from 'react'
import Router from './Router'
import Nav from './Nav'
import {Switch} from 'react-router-dom'



const App = () => {
  return (
      <div>
          <Nav />
          <Switch>
            <Router />
          </Switch>
      </div>
  );
};

export default App;
