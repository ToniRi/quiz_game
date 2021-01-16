
import {
    NEXT_QUESTION,
    QUESTIONS_START,
    SET_QUESTIONS,
    FINISH_GAME
} from '../actions/types'

const INITIAL_STATE = {
    gameFinsihed: false
}

const gameStateReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case NEXT_QUESTION:
            return { ...state, questionsLeft: state.questionsLeft - 1, question: state.question + 1 }

        case QUESTIONS_START:
            return { ...state, questionsStart: action.payload }

        case SET_QUESTIONS:
            return { ...state, questionsLeft: action.payload, question: 0 }

        case FINISH_GAME:
            return {...state,gameFinsihed: true}

        default: return state
    }
}
export default gameStateReducer
