import React from 'react'
import {Router, Route} from 'react-router-dom'
import history from '../history'
import CreateGame from '../components/CreateGame'
import Game from './game-play/Game'

import background from '../misc/astronomy-1867616_1920.jpg'

const App = () => {

    return(
        <div style={{ 
            backgroundImage: `url(${background})`,minHeight : "100%", width: "100%",backgroundSize: 'cover'}}>            
            <Router history = {history}>
                <Route path="/" exact component={CreateGame}/>
                <Route path="/game" component ={Game}/>                                         
            </Router>            
        </div>
    )
}
export default App