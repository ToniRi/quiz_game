import React from 'react'
import { connect } from 'react-redux'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


const Finish = (props) =>{

     const renderResult= () =>{
        const ordered =  props.teams.sort((a,b) => b.points-a.points)       
       return ordered.map(team => {
            return (
                <div>
                <h2>{team.team}</h2>
                <h3>{team.points}</h3>
                </div>
            )
        })
     }
    return(

        <div className="ui container">
           
            {renderResult()}
        </div>
    )

}

const mapStateToProps = (state) =>{
    return{
        teams : Object.values(state.teams)
    }
}
export default connect(mapStateToProps)(Finish)