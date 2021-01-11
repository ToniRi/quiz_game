import React from 'react'
import ReactDOM from 'react-dom'
import { Dimmer, Modal } from 'semantic-ui-react'

//Renders Question. Cannot be closed from dimmer (this is wanted behavior for now)
const QuestionModal = props => {

    const style = props.bonus ? { backgroundColor: 'pink' } : null
    return (
        ReactDOM.createPortal(
            <Dimmer active={props.active}>
                <Modal onClick={e => e.stopPropagation()} open={props.active}>
                    <Modal.Header style={style} >{props.title}</Modal.Header>
                    <Modal.Content>
                        {props.content}
                    </Modal.Content>
                    <Modal.Actions className="actions">
                        {props.actions}
                    </Modal.Actions>
                </Modal>
            </Dimmer>, document.getElementById('modal')
        )
    )
}
export default QuestionModal
