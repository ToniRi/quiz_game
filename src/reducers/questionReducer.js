import { FETCH_QUESTION,UNSET_QUESTION } from '../actions/types'

const questionReducer = (state = {}, action) => {

    switch (action.type) {      
        case FETCH_QUESTION:
            return action.payload

        case UNSET_QUESTION : 
        return {}

        default: return state
    }
} 
export default questionReducer