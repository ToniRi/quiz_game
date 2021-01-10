import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import CreateGame from '../components/CreateGame'
import Game from './game-play/Game'
import Finish from './finish/Finish'

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={CreateGame} />
                    <Route path="/game" component={Game} />
                    <Route path="/finish" component={Finish} />
                </Switch>
            </Router>
        </div>
    )
}
export default App