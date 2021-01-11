import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import teamReducer from './teamReducer'
import questionReducer from './questionReducer'

export default combineReducers({        
    form: formReducer,
    teams : teamReducer,
    questions : questionReducer
})