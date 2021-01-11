import exampleQuestions from '../questions'
import {
    CREATE_TEAM,
    ADD_POINT,
    REMOVE_POINT,
    FETCH_QUESTIONS
} from './types'

import jsonServer from '../apis/questions'

export const createTeam = (formValues) => {
    return {
        type: CREATE_TEAM,
        payload: formValues
    }
}

export const addPoint = (team) => {
    return {
        type: ADD_POINT,
        payload: team
    }
}
export const removePoint = (team) => {
    return {
        type: REMOVE_POINT,
        payload: team
    }
}

// if api is not provided, fetch dummy questions
export const fetchQuestions = () => async dispatch => {
    try {
        const response = await jsonServer.get('/questions')
        dispatch({ type: FETCH_QUESTIONS, payload: response.data })
    } catch (err) {
        dispatch({ type: FETCH_QUESTIONS, payload: exampleQuestions })
    }
}
