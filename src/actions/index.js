
import {CREATE_TEAM,
    ADD_POINT,
    REMOVE_POINT
} from './types'

export const createTeam = (formValues) => {    
    
    return {
        type : CREATE_TEAM ,
        payload : formValues
    }
}

export const addPoint = (team) =>{

    return {
        type : ADD_POINT,
        payload : team
    }
}
export const removePoint = (team) =>{
    return{
        type : REMOVE_POINT,
        payload:team
    }
}
