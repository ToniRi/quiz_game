import React from 'react'
import questionApi from '../../apis/questions'
import PointsSection from './PointsSection'
import QuestionModal from '../game-play/QuestionModal'
import history from '../../history'
import exampleQuestions from '../../questions'



class Game extends React.Component {

    state = {
        showModal: false,
        questions: [],
        gameFinsihed: false,
        showAnswer: false
    }

    //No need for global state

    componentDidMount() {

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

    renderChoices() {
        const style = { backgroundColor: "green" }
        const { questions, showAnswer } = this.state

        return questions[0].choices.map((choice) => {

            return (
                <div key={choice} className="ui segment" style={showAnswer && choice === questions[0].answer ? style : null}><h3>{choice}</h3></div>
            )
        })
    }

    showImage() {

        const { questions } = this.state

        if (!questions[0].image)
            return null

        return (
            <div className="ui segment">
                <img className="ui centered medium image" src={questions[0].image} alt="Nofoto" />
            </div>
        )
    }
    renderContent() {

        const { questions, showAnswer } = this.state

        if (questions[0].choices.length === 0 && showAnswer)
            return <div className="ui segment"><h3>{questions[0].answer}asd</h3></div>

        return (
            <div className="ui horizontal segments">
                <div className="ui segment">
                    <div className="ui raised segments">
                        {this.renderChoices()}
                    </div>
                </div>
                { this.showImage()}

            </div>)
    }

    renderActions() {

        return (
            <React.Fragment>
                {!this.state.showAnswer ?
                    (<button className="ui button green" onClick={() => this.setState(state =>
                        ({ showAnswer: !state.showAnswer }))
                    }>Show Answer</button>) :
                    (<button onClick={this.nextQuestion} className="ui button red">Close</button>)
                }
            </React.Fragment>
        )
    }

    showQuestion = () => {

        this.setState((state) => ({ showModal: !state.showModal }))
    }

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
    renderFinishNextButton() {

        const { questions, gameFinsihed } = this.state

        if (questions.length > 0) {
            return (
                <button style={{ marginTop: "3vh" }} className={`ui button green large`}
                    onClick={() => this.showQuestion()}
                >
                    Next Question
                </button>
            )
        }
        else if (gameFinsihed) {
            return (
                <button className="ui button primary large"
                    onClick={() => history.push('/finish')}
                    style={{ marginTop: "3vh" }}>
                    Finish
                </button>
            )
        }
        else
            return (
                <div className="ui active centered inline loader"></div >
            )
    }

    render() {

        const { questions, showModal } = this.state
        return (
            <div className="ui container">
                <div className="ui raised segment center aligned">
                    <div className="ui segment">
                        <div className="ui right aligned header">
                        </div>
                        <div className="">
                            Questions left: {questions.length}
                        </div>
                    </div>
                    <PointsSection />
                    <div className="ui segment">
                        {this.renderFinishNextButton()}
                    </div>
                </div>
                {showModal ?
                    <QuestionModal title={questions[0].question}
                        content={this.renderContent()}
                        actions={this.renderActions()}
                        onDismiss={this.nextQuestion} /> : null}
            </div>

        )
    }
}

export default Game

