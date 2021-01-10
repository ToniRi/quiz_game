
import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import PointCard from './PointCard'

// Component to show collection of teams 
const PointsSection = (props) => {
    const renderTeams = () => {
        return (
            props.teams.map((team, index) => {
                return (
                    <Grid.Column key={index} width={4}>
                        <PointCard teamName={team.team} />
                    </Grid.Column >
                )
            })
        )
    }

    return (
        <Grid >
            <Grid.Row>
                {renderTeams()}
            </Grid.Row>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        teams: Object.values(state.teams)
    }
}
export default connect(mapStateToProps)(PointsSection)
