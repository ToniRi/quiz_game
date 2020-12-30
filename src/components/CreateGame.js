import React from 'react'
import GameForm from './start-form/GameForm'
import TeamList from './TeamList'


const CreateGame = () => {

    return (
        <div className="ui container">
            <div className="ui horizontal segments">
                    <div className="ui raised segment">
                        <div className="ui form">
                            Create A Game
                 <GameForm />
                        </div>
                    </div>
                    <div className="ui compact segment">
                        <TeamList />
                </div>               
            </div>
        </div>
    )
}

export default CreateGame