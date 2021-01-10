import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import teamReducer from './teamReducer'

export default combineReducers({        
    form: formReducer,
    teams : teamReducer,   
})