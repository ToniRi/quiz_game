
import React from 'react'
import { connect } from 'react-redux'
import TeamCard from './TeamCard'

const PointsShow = (props) => {

    const renderTeams = () => {

        return (
            props.teams.map((team, index) => {
                return (
                    <div key={index}
                        className="four wide column">
                        <TeamCard teamName={team.team} />
                    </div>
                )
            })
        )
    }

    return (
        <div className="column ten wide">
            <div className="ui two column grid">
                {renderTeams()}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        teams: Object.values(state.teams)
    }
}
export default connect(mapStateToProps)(PointsShow)


