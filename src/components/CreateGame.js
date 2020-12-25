import React from 'react'
import GameForm from './start-form/GameForm'
import TeamList from './TeamList'


const CreateGame = (props) => {

    return (
        <div className="ui container">
            <div className="ui segment">
                <div className="ui two column very relaxed grid">
                    <div className="column">
                        <div className="ui form">
                            Create A Game
                 <GameForm />
                        </div>
                    </div>
                    <div className="column">
                        <TeamList />
                    </div>
                </div>
                <div className="ui vertical divider"/>                
            </div>
        </div>
    )
}

export default CreateGame