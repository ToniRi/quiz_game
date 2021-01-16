import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import teamReducer from './teamReducer'
import questionReducer from './questionReducer'
import gameStateReducer from './gameStateReducer'

export default combineReducers({        
    form: formReducer,
    teams : teamReducer,
    question : questionReducer,
    gameState : gameStateReducer
})