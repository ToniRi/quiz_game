import React from 'react'
import {Router, Route} from 'react-router-dom'
import history from '../history'
import CreateGame from '../components/CreateGame'
import PointsShow from './game-play/PointsShow'

const App = () => {

    return(
        <div className="ui container">
            
            <Router history = {history}>
                <Route path="/" exact component={CreateGame}/>
                <Route path="/game" exact component ={PointsShow}/>
            </Router>
            
        </div>
    )
}
export default App