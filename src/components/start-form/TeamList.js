import React from 'react'
import { connect } from 'react-redux'
import { Button, Grid, Header, Icon } from 'semantic-ui-react'

import history from '../../history'
import TeamCard from './TeamCard'

// Holds the teams 
const TeamList = (props) => {
    const renderTeams = () => {
        return props.teams.map((team) => {
            return (
                <Grid.Column key={team.team}                >
                    <TeamCard teamName={team.team} members={team.members} points={team.points} />
                </Grid.Column>
            )
        })
    }


    return (
        <Grid>
            <Grid.Row columns={1}>
                <Header textAlign="center">
                    <Icon name="users" circular size="mini" />
                 Teams
            </Header>
            </Grid.Row>
            <Grid.Row>
                <Button disabled={props.teams.length < 2}
                    onClick={() => history.push('/game')}
                    fluid>
                    Start Game
                    </Button>
            </Grid.Row>
            <Grid.Row>
                <Grid columns={2} style={{ marginTop: "0.5vh" }}>
                    {renderTeams()}
                </Grid>
            </Grid.Row>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    // create list from object by id name basis
    return {
        teams: Object.values(state.teams)
    }
}
export default connect(mapStateToProps)(TeamList)