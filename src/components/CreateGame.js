import React from 'react'
import GameForm from './StartForm/GameForm'
import TeamList from './TeamList'


const CreateGame = (props) => {

    return (
        <div className="ui grid">
            <div className="row">
                <div className="ui form three ten wide column">
                    Create A Game
                 <GameForm />
                </div>
                <div className="six wide column">Lista
                    <TeamList/>
                </div>
            </div>
        </div>
    )
}

export default CreateGame