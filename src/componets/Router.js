import React from 'react'
import { Switch} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Docs from './Docs'
import Hub from './Hub'
import AnswersContainer from './AnswersContainer'

 const Router = () => {
    return (
        <Switch>
            <Home  exact path='/' componet={Home} />
            <About exact path='/about' componet={About} />
            <Docs  exact path='/docs' componet={Docs} />
            <Hub   exact path='/hub' componet={Hub} />
            <AnswersContainer />            
        </Switch>
    )
}

export default Router;
