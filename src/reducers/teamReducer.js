
import {ADD_POINT, CREATE_TEAM} from '../actions/types'

const INITIAL_STATE = {}

// adds a team to state, and inits poinst to zero
const teamReducer = (state=INITIAL_STATE,action) =>{

    console.log('reducer',action.payload)
    switch (action.type){
        
        case CREATE_TEAM:
            return {...state, [action.payload.team] :  {...action.payload, points : 0} }


        case  ADD_POINT:
           let oldPoints = action.payload.points
            return {...state, [action.payload.team] : {...action.payload, points : oldPoints+1}}

        default : return state
    }

}

export default teamReducer