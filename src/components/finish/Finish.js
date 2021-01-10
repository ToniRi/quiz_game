import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react';
import TeamCard from '../start-form/TeamCard';

// This component shows the result of the game
const Finish = (props) => {

    const renderResult = () => {
        const ordered = props.teams.sort((a, b) => b.points - a.points)
        return ordered.map((team, index) => {
            return (
                <div key={index} style={{
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "2em"
                }}
                >
                    <TeamCard
                        teamName={team.team}
                        members={team.members}
                        points={team.points} />
                </div>


            )
        })
    }

    return (
        <Container >
            {renderResult()}
        </Container>
    )

}
const mapStateToProps = (state) => {
    return {
        teams: Object.values(state.teams)
    }
}
export default connect(mapStateToProps)(Finish)