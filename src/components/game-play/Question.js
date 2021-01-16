import React from 'react'
import { connect } from 'react-redux'
import { Segment, Image, Button } from 'semantic-ui-react'
import history from '../../history'
import QuestionModal from './QuestionModal'
import { fetchQuestion, unsetQuestion } from '../../actions'

class Question extends React.Component {

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.id)
    }

    state = { showAnswer: false }

    renderChoices = () => {

        const { answer, choices } = this.props.question
        const style = { backgroundColor: "green" }
        return choices.map((choice) => {
            return (
                <Segment key={choice}
                    style={this.state.showAnswer && choice === answer ? style : null}>
                    <h3>{choice}</h3>
                </Segment>
            )
        })
    }

    // Questions can hold images- so it is rendered if provided
    showImage = () => {

        const { image } = this.props.question
        if (!image)
            return null
        return (
            <Segment style={{ margin: "auto" }} >
                <Image centered src={image} size="small" alt="Nofoto" />
            </Segment>
        )
    }
    closeModal = () => {

        this.props.unsetQuestion()
        history.push('/game')
    }
    renderActions = () => {
        const { showAnswer } = this.state
        return (
            <React.Fragment>
                {!showAnswer ?
                    (<Button color={'green'} onClick={() => this.setState(state => ({ showAnswer: !state.showAnswer }))
                    }>Show Answer</Button>) :
                    (<Button onClick={() => this.closeModal()} color={'red'}>Close</Button>)
                }
            </React.Fragment>
        )
    }

    // Renders content of the question ie choices 
    renderContent = () => {

        if (!this.props.question.choices)
            return null

        const { choices, answer, meta } = this.props.question
        const { showAnswer } = this.state

        if (choices.length === 0 && showAnswer)
            return (
                <Segment>
                    <h3>
                        {`${answer} ${meta ?
                            meta : ''}`}
                    </h3>
                </Segment>
            )
        return (
            <Segment.Group horizontal>
                <Segment>
                    <Segment.Group raised>
                        {this.renderChoices()}
                    </Segment.Group>
                    {showAnswer && meta ? <span>{meta}</span> : ''}
                </Segment>
                {this.showImage()}
            </Segment.Group>
        )
    }

    render() {

        const { question, bonus, match } = this.props
        return (
            <QuestionModal title={`Kysymys: ${match.params.id} ${question.question ? question.question : ''}`}
                active={question !== undefined}
                bonus={bonus === true}
                content={this.renderContent()}
                actions={this.renderActions()}
            />)


    }
}
const mapStateToProps = (state) => {
    return {
        question: state.question
    }
}
export default connect(mapStateToProps, { fetchQuestion, unsetQuestion })(Question)