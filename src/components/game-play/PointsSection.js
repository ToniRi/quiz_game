
import React from 'react'
import { connect } from 'react-redux'
import PointCard from './PointCard'

const PointsSection = (props) => {

    // figure out how to place component two columns in one row
    const renderTeams = () => {

        return (
            props.teams.map((team, index) => {

                return (
                    <div key={index} className={`column four wide`}>
                        <PointCard teamName={team.team} />
                    </div >
                )
            } )
            )
    }

    return (
        <div className="ui grid">
            <div className="row">
                <div className="ui grid">
                    <div className="row">
                        {renderTeams()}
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        teams: Object.values(state.teams)
    }
}
export default connect(mapStateToProps)(PointsSection)


/*const renderTeams = () => {

        return (

            props.teams.map((team, index) => {

                return (
                    <div key={index} className="ui four column row">

                        <div className={`${index / 2 === 0 ? 'right' : 'left'} floated column`}>
                            <PointCard teamName={team.team} />
                        </div>
                    </div>
                )
            })
        )
    } */