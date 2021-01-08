import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './transition.css'

// fake array
const arr = [{ team: "Paska", points: 2 }, { team: "Perse", points: 3 }, { team: "Kusi", points: 4 }]

const Finish = (props) => {

    const renderResult = () => {
        // const ordered = props.teams.sort((a, b) => b.points - a.points)
        const ordered = arr.sort((a, b) => b.points - a.points)
        return ordered.map((team, index) => {
            return (
                <CSSTransition
                classNames="team"                
                appear={true}
                key={index}
                timeout={1000}>
                <div>
                    <h2>{team.team}</h2>
                    <h3>{team.points}</h3>
                </div>
                </CSSTransition>
            )
        })
    }
    const transitionOptions ={
        transitionName : "team",
        transitionEnterTimeout: 500,
        transitionLeaveTimeout : 500
    }
    return (
        <div className="ui container">
            <TransitionGroup>
                {renderResult()}
            </TransitionGroup>
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        teams: Object.values(state.teams)
    }
}
export default connect(mapStateToProps)(Finish)