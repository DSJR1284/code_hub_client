import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Docs from './Docs'
import Hub from './Hub'

 const Router = () => {
    return (
        <Switch>
            <Route  exact path='/' componet={Home} />
            <About  path='/about' componet={About} />
            <Docs  path='/docs' componet={Docs} />
            <Hub  path='/hub' componet={Hub} />
        </Switch>
    )
}

export default Router;
