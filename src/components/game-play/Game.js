import React from 'react'
import PointsSection from './PointsSection'
import history from '../../history'
import { Button, Container, Loader, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { finishGame, nextQuestion } from '../../actions'

class Game extends React.Component {

    nextQuestion = () => {

        if (this.props.question === undefined) {
            history.push('/')
            return
        }
        let temp = this.props.question + 1
        this.props.nextQuestion()
        console.log("tästä pisäisi laueta kysynys: ", this.props.question)

        if (this.props.questionsLeft === 1)
            this.props.finishGame()
        history.push(`game/question/${temp}`)
    }
    //if current question is last. Then next renders game finish
    renderFinishNextButton() {

        console.log(this.props)

        if (this.props.finished) {
            return (
                <Button size={'large'}
                    primary
                    onClick={() => history.push('/finish')}
                    style={{ marginTop: "3vh" }}>
                    Finish
                </Button>
            )
        }
        else if (!this.props.finished) {
            return (
                <Button style={{ marginTop: "3vh" }}
                    color={"green"}
                    size={'large'}
                    onClick={() => this.nextQuestion()}
                >
                    Next Question
                </Button>
            )
        }
        else
            return (
                <Loader
                    active
                    inline
                />
            )
    }
    render() {

        return (
            <Container >
                <Segment raised
                    textAlign={"center"}
                    style={{ margin: "auto" }}>
                    <Segment >
                        Questions left: {this.props.questionsLeft}
                    </Segment>
                    <Segment style={{ border: "none" }}>
                        <PointsSection />
                    </Segment>
                    <Segment>
                        {this.renderFinishNextButton()}
                    </Segment>
                </Segment>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        questionsLeft: state.gameState.questionsLeft,
        question: state.gameState.question,
        finished: state.gameState.gameFinsihed
    }
}
export default connect(mapStateToProps, { finishGame, nextQuestion })(Game)
