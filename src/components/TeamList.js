import React from 'react'
import { connect } from 'react-redux'

const TeamList = (props) => {

    const renderList = () => {

        if (!props.teams) {
            return <div>emptyList</div>
        }
        return props.teams.map(team => {

            return (
                <ul className="ui celled list" key={team}>{team.team}
                    {renderMembers(team)}
                </ul>

            )

        })

    }

    const renderMembers = ({members}) => { 

        return members.map((member,index) =>{
            return <li key={index}>{member.name}</li>
        })
    }

    return (

        <div>{renderList()}</div>
    )

}

const mapStateToProps = (state) => {

    return {
        teams: Object.values(state.teams)
    }

}
export default connect(mapStateToProps)(TeamList)