import { FETCH_QUESTION, FETCH_QUESTIONS } from '../actions/types'
import _ from 'lodash'

const questionReducer = (state = {}, action) => {

    switch (action.type) {
        case FETCH_QUESTIONS:
            return { ...state, ..._.mapKeys(action.payload,'id') }

        case FETCH_QUESTION:
            return {...state, [action.payload.id] : action.payload}

        default: return state
    }
} 
export default questionReducer