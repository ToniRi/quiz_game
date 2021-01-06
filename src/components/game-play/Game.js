import React from 'react'
import questionApi from '../../apis/questions'
import PointsSection from './PointsSection'
import QuestionModal from '../game-play/QuestionModal'
import history from '../../history'
import './game.css'
import exampleQuestions from '../../questions'


class Game extends React.Component {

    state = {
        showModal: false,
        questions: [],
        gameFinsihed: false,
        remaining: 0,
        showAnswer : false
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

        return this.state.questions[0].choices.map((choice) => {
            return (
            <div key={choice} className="ui segment" ><h3>{choice}</h3></div>
            )
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

        if (this.state.questions[0].choices.length === 0)
            return null

        return (
            <div className="ui horizontal segments">
                <div className="ui segment">
                    <div className="ui raised segments">
                        {this.renderChoices()}
                    </div>
                </div>
                { this.showImage()}
                {this.state.showAnswer ? <div className="ui segment"><h2>{this.state.questions[0].answer}</h2></div> : null}
            </div>)
    }
    renderActions() {
        
        return (
            <React.Fragment>
                <button onClick={this.nextQuestion} className="ui button red">Close</button>
            </React.Fragment>
        )
    }

    showQuestion= () =>{
        
        this.setState({ showModal: true})               
        
    }

    nextQuestion = () => {

        this.setState({showModal : false,
            showAnswer : false
        })        
        const temp = this.state.questions.slice(1)
        this.setState({ questions: temp, remaining: temp.length })
        if (temp.length === 0)
            this.setState({gameFinsihed : true})
    }
    renderFinishNextButton() {

        if (this.state.remaining > 0) {
            return (
                <button style={{ marginTop: "3vh" }} className={`ui button green large ${this.state.questions.length === 0 ? 'disabled' : ''}`}
                    onClick={ () => this.showQuestion()}
                >
                    Next Question
                </button>
            )
        }
        else if (this.state.gameFinsihed) {
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

        return (
            <div className="ui container">
                <div className="ui raised segment center aligned">
                    <div className="ui segment">
                        <div className="ui right aligned header">
                        </div>
                        <div className="">
                            Questions left: {this.state.remaining}
                        </div>
                    </div>
                    <PointsSection />
                    <div className="ui segment">
                    {this.renderFinishNextButton()}
                    </div>
                </div>
                {this.state.showModal ?
                    <QuestionModal title={this.state.questions[0].question}
                        content={this.renderContent()}
                        actions={this.renderActions()}
                        onDismiss={this.nextQuestion} /> : null}
            </div>

        )
    }

}

export default Game

