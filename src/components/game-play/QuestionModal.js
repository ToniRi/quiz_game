import React from 'react'
import ReactDOM from 'react-dom'

const QuestionModal = props => {

    return (
        ReactDOM.createPortal(
            <div onClick={() => props.onDismiss()} className="ui dimmer modals visible active">
                <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
                    <div className="header">{props.title}</div>
                   
                        {props.content}
                    
                    <div className="actions">
                        {props.actions}
                    </div>
                </div>
            </div>, document.getElementById('modal')
        )
    )
}
export default QuestionModal