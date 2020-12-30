import React from 'react'
import { connect } from 'react-redux'
import history from '../history'

const TeamList = (props) => {

    const renderList = () => {

        return props.teams.map((team, index) => {

            return (
                <ul className="ui celled list" key={index}>{team.team}
                    {renderMembers(team)}                    
                </ul>
            )
        })
    }

    const renderMembers = ({ members }) => {

        return members.map((member, index) => {
            return <li key={index}>{member.name}</li>
        })
    }

    return (

        <div className="ui container">
            <h2>Teams</h2>
            <div>
                {renderList()}
                <button className={`ui button green ${props.teams.length < 2 ? 'disabled' : ''}`}
                        onClick={() => history.push('/game')}>
                    Start Game
                    </button>
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