

import {CREATE_TEAM} from './types'

export const createTeam = (formValues, form) => {    

    return {
        type : CREATE_TEAM ,
        payload : formValues
    }
}
