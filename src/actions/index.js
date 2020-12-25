import {CREATE_TEAM,
    ADD_POINT
} from './types'

export const createTeam = (formValues) => {    
    
    return {
        type : CREATE_TEAM ,
        payload : formValues
    }
}

export const AddPoint = (team) =>{

    return {
        type : ADD_POINT,
        payload : team
    }
}
