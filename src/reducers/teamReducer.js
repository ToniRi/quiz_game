
import {CREATE_TEAM} from '../actions/types'

const INITIAL_STATE = {}

const teamReducer = (state=INITIAL_STATE,action) =>{

    switch (action.type){
        
        case CREATE_TEAM:
            return {...state, [action.payload.team] :  action.payload }

        default : return state
    }

}

export default teamReducer