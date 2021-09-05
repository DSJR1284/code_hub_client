import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Docs from './Docs'

 const Router = () => {
    return (
        <Switch>
            <Route exact path='/docs' componet={Docs} />

        </Switch>
    )
}

export default Router;
