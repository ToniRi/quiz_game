import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Container, Dropdown } from 'semantic-ui-react'
import CreateTeamForm from './CreateTeamForm'
import TeamList from './TeamList'
import { connect } from 'react-redux'
import { questionsStart, setQuestions } from '../../actions'

// Component for game creation. Holds list of created teams and a form to create one
class CreateGame extends React.Component {

    componentDidMount() {
        this.props.questionsStart()
    }

    dropDownItems() {
        if (!this.props.questionsStart)
            return null

        return Array.from({ length: this.props.questions }, (_, i) => i + 1).map(ind => {
            return { value: ind, key: ind, text: ind }
        })

    }
    render() {
        console.log(this.props.questions)
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
                    <Dropdown                       
                        loading={!this.props.questions}
                        onChange={(e,{value}) => this.props.setQuestions(value)}
                        placeholder='Questions'                      
                        fluid
                        selection
                        options={this.dropDownItems()}
                        style={{width : "6vw",margin: "auto"}}
                        value ={this.props.questionsLeft}>
                    </Dropdown>
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = state => {

    return {
        questions: state.gameState.questionsStart,
        questionsLeft: state.gameState.questionsLeft
    }
}
export default connect(mapStateToProps, { questionsStart, setQuestions })(CreateGame)