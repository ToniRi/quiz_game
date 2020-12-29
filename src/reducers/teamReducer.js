
import {ADD_POINT, CREATE_TEAM, REMOVE_POINT} from '../actions/types'

const INITIAL_STATE = {}

// adds a team to state, and inits poinst to zero
const teamReducer = (state=INITIAL_STATE,action) =>{

    
    switch (action.type){

        case CREATE_TEAM:
            return {...state, [action.payload.team] :  {...action.payload, points : 0} }


        case ADD_POINT:
           
            return {...state, [action.payload.team] : {...action.payload, points : action.payload.points+1}}
        

        case REMOVE_POINT :
        
            return {...state, [action.payload.team] : {...action.payload, points : action.payload.points- 1}}

        default : return state
    }

}

export default teamReducer