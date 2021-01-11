import React from 'react'
import PointsSection from './PointsSection'
import QuestionModal from '../game-play/QuestionModal'
import history from '../../history'
import { fetchQuestions } from '../../actions'
import { Button, Container, Loader, Segment, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Game extends React.Component {

    state = {
        showModal: false,
        gameFinsihed: false,
        showAnswer: false,
        questionNumber: 0
    }

    //This component loads the questions and renders each question with a semantic ui- modal
    //Also renders current points. Points can be added or removed (this is personal intrest, nothing to do with
    // what is smart  )
    componentDidMount() {
        this.props.fetchQuestions()
    }

    // renders choices if provided. Correct choice will be rendered green
    renderChoices() {
        const style = { backgroundColor: "green" }
        const { showAnswer, questionNumber } = this.state
        const { questions } = this.props

        return questions[questionNumber].choices.map((choice) => {
            return (
                <Segment key={choice}
                    style={showAnswer && choice === questions[questionNumber].answer ? style : null}>
                    <h3>{choice}</h3>
                </Segment>
            )
        })
    }

    // Questions can hold images- so it is rendered if provided
    showImage() {
        const { questions } = this.props
        const { questionNumber } = this.state
        if (!questions[questionNumber].image)
            return null

        return (
            <Segment style={{ margin: "auto" }} >
                <Image centered src={questions[questionNumber].image} size="small" alt="Nofoto" />
            </Segment>
        )
    }

    // Renders content of the question ie choices 
    renderContent() {
        const { showAnswer, questionNumber } = this.state
        const { questions } = this.props
        if (questions[questionNumber].choices.length === 0 && showAnswer)
            return (
                <Segment>
                    <h3>
                        {`${questions[questionNumber].answer} ${questions[questionNumber].meta ?
                            questions[questionNumber].meta : ''}`}
                    </h3>
                </Segment>
            )

        return (
            <Segment.Group horizontal>
                <Segment>
                    <Segment.Group raised>
                        {this.renderChoices()}
                    </Segment.Group>
                    {showAnswer && questions[questionNumber].meta ? <span>{questions[questionNumber].meta}</span> : ''}
                </Segment>
                {this.showImage()}
            </Segment.Group>
        )
    }

    // Renders Cancel or show answer button to modal
    renderActions() {
        return (
            <React.Fragment>
                {!this.state.showAnswer ?
                    (<Button color={'green'} onClick={() => this.setState(state =>
                        ({ showAnswer: !state.showAnswer }))
                    }>Show Answer</Button>) :
                    (<Button onClick={this.nextQuestion} color={'red'}>Close</Button>)
                }
            </React.Fragment>
        )
    }

    showQuestion = () => {
        this.setState((state) => ({ showModal: !state.showModal }))
    }

    //Changes current question and closes the modal, also keeps track wheter currently in last question
    nextQuestion = () => {

        const { questions } = this.props
        this.setState(state => (
            {
                showModal: !state.showModal,
                showAnswer: !state.showAnswer
            }))

            if (this.state.questionNumber === questions.length-1 )
            this.setState(state => ({ gameFinsihed: !state.gameFinsihed }))

        this.setState(state => ({
            questionNumber: state.questionNumber + 1
        }))
    }
    //if current question is last. Then next renders game finish
    renderFinishNextButton() {
        const { gameFinsihed } = this.state
        const { questions } = this.props

        if (!gameFinsihed && questions.length > 0) {
            return (
                <Button style={{ marginTop: "3vh" }}
                    color={"green"}
                    size={'large'}
                    onClick={() => this.showQuestion()}
                >
                    Next Question
                </Button>
            )
        }
        else if (gameFinsihed) {
            return (
                <Button size={'large'}
                    primary
                    onClick={() => history.push('/finish')}
                    style={{ marginTop: "3vh" }}>
                    Finish
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
        const { showModal, questionNumber } = this.state
        const { questions } = this.props
        return (
            <Container >
                <Segment raised
                    textAlign={"center"}
                    style={{ margin: "auto" }}>
                    <Segment >
                        Questions left: {questions.length - questionNumber}
                    </Segment>
                    <Segment style={{ border: "none" }}>
                        <PointsSection />
                    </Segment>
                    <Segment>
                        {this.renderFinishNextButton()}
                    </Segment>
                </Segment>
                {showModal ?
                    <QuestionModal title={questions[questionNumber].question}
                        active={showModal}
                        bonus={questions[questionNumber].bonus === true}
                        content={this.renderContent()}
                        actions={this.renderActions()}
                        onDismiss={this.nextQuestion} /> : null}
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        questions: Object.values(state.questions)
    }
}
export default connect(mapStateToProps, { fetchQuestions })(Game)
