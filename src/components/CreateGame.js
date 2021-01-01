import React from 'react'
import GameForm from './start-form/GameForm'
import TeamList from './start-form/TeamList'
import './styling.css'


//remove inline stylings!!!!!
const CreateGame = () => {
    return (
        <div className="ui container" >
            <div className="ui column grid center-grid transparent">
                <div className="column six wide column round-bordered" style={{ backgroundColor: "teal" }}>
                    <i className="ui coffee large icon" />
                    <div className="ui form">
                        <GameForm />
                    </div>
                </div>
                <div className="column one wide" style={{ backgroundColor: "white" }}></div>
                <div className="ui column nine wide round-bordered" style={{ backgroundColor: "teal" }}>
                    <TeamList />
                </div>
            </div>
        </div>
    )
}

export default CreateGame