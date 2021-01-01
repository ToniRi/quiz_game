import React from 'react'
import { connect } from 'react-redux'
import history from '../../history'
import TeamCard from './TeamCard'
import '../styling.css'

const TeamList = (props) => {

    const renderTeams = () => {

        return props.teams.map((team) => {

            return (
                <div className="column" key={team.team}
                style={{maxWidth : "30%"}}
                >
                    <TeamCard teamName={team.team} members={team.members} />
                </div>
            )
        })
    }


    return (

        <div>
            <h2 className="ui center aligned icon header">
                <i className="circular users icon"></i>
                 Teams
            </h2>
            <button className={`ui aligned button green ${props.teams.length < 2 ? 'disabled' : ''}`}
                style={{}}
                onClick={() => history.push('/game')}>
                Start Game
                    </button>
            <div className="ui two column grid" style={{marginTop: "0.5vh"}}>
                {renderTeams()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    // create list from object by id name basis
    return {
        teams: Object.values(state.teams)
    }

}
export default connect(mapStateToProps)(TeamList)