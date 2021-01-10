import React from 'react'
import questionApi from '../../apis/questions'
import PointsSection from './PointsSection'
import QuestionModal from '../game-play/QuestionModal'
import history from '../../history'
import exampleQuestions from '../../questions'
import { Button, Container, Loader, Segment, Image } from 'semantic-ui-react'



class Game extends React.Component {

    state = {
        showModal: false,
        questions: [],
        gameFinsihed: false,
        showAnswer: false
    }

    //This component loads the questions and renders each question with a semantic ui- modal
    //Also renders current points. Points can be added or removed (this is personal intrest, nothing to do with
    // what is smart :D )
    componentDidMount() {

        //I am using Json server for now
        const fetchQuestionsAsync = async () => {
            try {
                const response = await questionApi.get('/questions')
                this.setState({ questions: response.data, remaining: response.data.length })
            }
            catch (err) {
                this.setState({ questions: exampleQuestions, remaining: exampleQuestions.length })
            }
        }
        fetchQuestionsAsync()
    }

    // renders choices if provided. Correct choice will be rendered green
    renderChoices() {
        const style = { backgroundColor: "green" }
        const { questions, showAnswer } = this.state

        return questions[0].choices.map((choice) => {
            return (
                <Segment key={choice}
                    style={showAnswer && choice === questions[0].answer ? style : null}>
                    <h3>{choice}</h3>
                </Segment>
            )
        })
    }

    // Questions can hold images- so it is rendered if provided
    showImage() {

        const { questions } = this.state

        if (!questions[0].image)
            return null

        return (
            <Segment style={{ margin: "auto" }} >
                <Image centered src={questions[0].image} size="small" alt="Nofoto" />
            </Segment>
        )
    }

    // Renders content of the question ie choices 
    renderContent() {
        const { questions, showAnswer } = this.state

        if (questions[0].choices.length === 0 && showAnswer)
            return <Segment><h3>{`${questions[0].answer} ${questions[0].meta ? questions[0].meta : ''}`} </h3></Segment>

        return (
            <Segment.Group horizontal>
                <Segment >
                    <Segment.Group raised>
                        {this.renderChoices()}
                    </Segment.Group>
                    {showAnswer && questions[0].meta ? <span>{questions[0].meta}</span> : ''}
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

        this.setState((state) => (
            {
                showModal: !state.showModal,
                showAnswer: !state.showAnswer
            }))

        this.setState(state => (
            {
                questions: state.questions.slice(1)
            }))

        if (this.state.questions.length === 1)
            this.setState(state => ({ gameFinsihed: !state.gameFinsihed }))

    }
    //if current question is last. Then next renders game finish
    renderFinishNextButton() {
        const { questions, gameFinsihed } = this.state
        if (questions.length > 0) {
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
        const { questions, showModal } = this.state
        return (
            <Container >
                <Segment raised
                    textAlign={"center"}
                    style={{ margin: "auto" }}>
                    <Segment >
                        Questions left: {questions.length}
                    </Segment>
                    <Segment style={{ border: "none" }}>
                        <PointsSection />
                    </Segment>
                    <Segment>
                        {this.renderFinishNextButton()}
                    </Segment>
                </Segment>
                {showModal ?
                    <QuestionModal title={questions[0].question}
                        active={showModal}
                        bonus={questions[0].bonus === true}
                        content={this.renderContent()}
                        actions={this.renderActions()}
                        onDismiss={this.nextQuestion} /> : null}
            </Container>
        )
    }
}
export default Game
