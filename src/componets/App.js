import React from 'react'
import Router from './Router'
import Nav from './Nav'
import QuestionsContainer from './QuestionsContainer'



const App = () => {
  return (
      <div>
          <Nav />
          <QuestionsContainer />
          <Router />
      </div>
  );
};

export default App;
