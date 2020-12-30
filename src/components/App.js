import React from 'react'
import {Router, Route} from 'react-router-dom'
import history from '../history'
import CreateGame from '../components/CreateGame'
import Game from './game-play/Game'

const App = () => {

    return(
        <div className="ui container">            
            <Router history = {history}>
                <Route path="/" exact component={CreateGame}/>
                <Route path="/game" component ={Game}/>                                         
            </Router>            
        </div>
    )
}
export default App