import React from 'react'
import {Router, Route} from 'react-router-dom'
import history from '../history'
import CreateGame from '../components/CreateGame'

const App = () => {

    return(
        <div className="ui container">
            
            <Router history = {history}>
                <Route path="/" exact component={CreateGame}/>
            </Router>

        </div>
    )
}
export default App