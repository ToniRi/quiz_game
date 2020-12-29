
import React from 'react'
import { connect } from 'react-redux'
import { addPoint, removePoint } from '../../actions'

const TeamShow = (props) => {

    return (

        <div className="ui raised card">
            <div className="center aligned header">{props.teams[props.teamName].team}</div>
            <div className="center aligned content">{props.teams[props.teamName].points}</div>
            <div className="extra content">
                <div className="ui large two buttons">
                    <div className="ui green button"
                        onClick={() => props.addPoint(props.teams[props.teamName])}>
                        +
                            </div>
                    <div className="ui red button"
                        onClick={() => props.removePoint(props.teams[props.teamName])}>-</div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {

    return {
        teams: state.teams
    }
}
export default connect(mapStateToProps, { addPoint, removePoint })(TeamShow)