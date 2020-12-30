
import React from 'react'
import questionApi from '../../apis/questions'
import PointsSection from './PointsSection'
import QuestionModal from '../game-play/QuestionModal'

import './game.css'

class Game extends React.Component {

    state = {
        showModal: false,
        questions: [],
        gameFinsihed: false
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
            return (<div key={index} className="ui segment" ><h3>{choice}</h3></div>)
        })

    }

    showImage() {

        if (!this.state.questions[0].image)
            return null

        return (
            <div className="ui segment">
                <img className="ui centered medium image" src={this.state.questions[0].image} alt="Nofoto" />
            </div>
        )
    }
    renderContent() {
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
            <div className="ui container margin-top">
                <div className="ui two column divided grid center">
                    <div className="row">
                        <div className="column">
                            <PointsSection />
                        </div>
                        <div className="column padded">
                            <button className={`ui button green large ${this.state.questions.length === 0 ? 'disabled' : ''}`}
                                onClick={() => this.setState({ showModal: !this.state.showModal })}
                            >
                                Next Question
                    </button>
                        </div>
                    </div>
                    {this.state.showModal ?
                        <QuestionModal title={this.state.questions[0].question}
                            content={this.renderContent()}
                            actions={this.renderActions()}
                            onDismiss={this.nextQuestion} /> : null}

                </div>
            </div>
        )
    }

}

export default Game

