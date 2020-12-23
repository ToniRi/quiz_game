import {combineReducers} from 'redux'
import questionReducer from './questionReducer'
import {reducer as formReducer} from 'redux-form'
import teamReducer from './teamReducer'


export default combineReducers({
        
    questions : questionReducer,
    form: formReducer,
    teams : teamReducer
})