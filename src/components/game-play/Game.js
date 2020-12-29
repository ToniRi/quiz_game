
import React from 'react'

import questionApi from '../../apis/questions'
import PointsSection from './PointsSection'
import QuestionModal from '../game-play/QuestionModal'

class Game extends React.Component {

    state = {
        showModal: false,
        questions: [],
    }

    //No need for global state

    componentDidMount() {

        const fetchQuestionsAsync = async () => {

            const response = await questionApi.get('/questions')
            this.setState({ questions: response.data })
        }
        fetchQuestionsAsync()
    }
    renderChoices() {
        return this.state.questions[0].choices.map((choice, index) => {
            return (<button key={index} className="ui button blue" style={{ width: '50%' ,margin : "10px" }}>{choice}</button>)
        })

    }

    showImage() {

        if(!this.state.questions[0].image)
            return null

        return <img src={this.state.questions[0].image} alt="Nofoto"/>
    }
    renderContent() {
        return (
            <div className="ui two column grid">
                    <div className="column">
                        {this.renderChoices()}
                    </div>
                   { this.showImage() }
            </div>)
    }
    renderActions() {
        return (
            <React.Fragment>
                <button onClick={this.nextQuestion} className="ui button red">Close</button>
            </React.Fragment>
        )
    }

    nextQuestion = () => {
        this.setState({ showModal: false })
        const temp = this.state.questions.slice(1)
        this.setState({ questions: temp })
    }

    render() {

        return (
            <div className="ui three column grid">
                <div className="row">
                    <PointsSection />
                </div>
                {this.state.showModal ?
                    <QuestionModal title={this.state.questions[0].question}
                        content={this.renderContent()}
                        actions={this.renderActions()}
                        onDismiss={this.nextQuestion} /> : null}
                <button className={`ui button green ${this.state.questions.length === 0 ? 'disabled' : ''}`}
                    onClick={() => this.setState({ showModal: !this.state.showModal })}
                >
                    Next Question
                    </button>
            </div>
        )
    }

}

export default Game
//{<Route path="/game/question" render={(props) => <QuestionModal {...props} question={question} choices={actions} />} />}
// content={this.state.questions[0].question}