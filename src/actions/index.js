import exampleQuestions from '../questions'
import {
    CREATE_TEAM,
    ADD_POINT,
    REMOVE_POINT,
    QUESTIONS_START,
    NEXT_QUESTION,
    SET_QUESTIONS,
    FETCH_QUESTION,
    FINISH_GAME,
    UNSET_QUESTION
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
export const questionsStart = () => async dispatch => {
    try {
        const response = await jsonServer.get('/questions')
        //dispatch({ type: FETCH_QUESTIONS, payload: response.data })
        console.log("action")
        dispatch({ type: QUESTIONS_START, payload: response.data.length })
    } catch (err) {
        dispatch({ type: QUESTIONS_START, payload: 3 })
    }
}
export const fetchQuestion = id => async dispatch => {
    try {
        console.log("actuion", id)
        const response = await jsonServer.get(`/questions/${id}`)
        dispatch({ type: FETCH_QUESTION, payload: response.data })
    } catch (err) {
        dispatch({ type: FETCH_QUESTION, payload: exampleQuestions[id] })
    }
}
export const setQuestions = (amount) => {
    return {
        type: SET_QUESTIONS,
        payload: amount
    }
}

export const nextQuestion = () => {
    return {
        type: NEXT_QUESTION
    }
}
export const finishGame = () => {
    return {
        type: FINISH_GAME
    }
}
export const unsetQuestion = () => {
    return {
        type: UNSET_QUESTION
    }
}
