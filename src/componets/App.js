import React from 'react'
import Router from './Router'
import Nav from './Nav'
import QuestionsContainer from './QuestionsContainer'
import AnswersContainer from './AnswersContainer'
import UsersContainer from './UsersContainer'


const App = () => {
  return (
      <div>
          <Nav />
          <QuestionsContainer />
          <AnswersContainer/>
          <UsersContainer />
          <Router />
      </div>
  );
};

export default App;
