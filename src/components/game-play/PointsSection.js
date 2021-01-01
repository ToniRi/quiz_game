
import React from 'react'
import { connect } from 'react-redux'
import PointCard from './PointCard'

const PointsShow = (props) => {

    const renderTeams = () => {

        return (
            props.teams.map((team, index) => {
                return (
                    <div key={index}
                        className="column">
                        <PointCard teamName={team.team} />
                    </div>
                )
            })
        )
    }

    return (        
            <div className="ui two column grid">
                {renderTeams()}
            </div>       

    )
}

const mapStateToProps = (state) => {
    return {
        teams: Object.values(state.teams)
    }
}
export default connect(mapStateToProps)(PointsShow)


