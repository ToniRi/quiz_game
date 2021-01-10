import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Container } from 'semantic-ui-react'
import CreateTeamForm from './start-form/CreateTeamForm'
import TeamList from './start-form/TeamList'

// Component for game creation. Holds list of created teams and a form to create one
const CreateGame = () => {
    return (
        <Container>
            <Grid style={{ marginTop: "1em" }} relaxed={"very"}>
                <Grid.Row divided>
                    <Grid.Column floated={"left"}
                        width={8}
                    >
                        <CreateTeamForm />
                    </Grid.Column>
                    <Grid.Column floated={"right"}
                        width={8}>
                        <TeamList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}
export default CreateGame