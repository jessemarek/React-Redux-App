import axios from 'axios'
import { baseURL } from '../../index'

export const FETCH_CATEGORY_START = 'FETCH_CATEGORY_START'
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS'
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE'
export const fetchCategories = () => {
    return dispatch => {
        dispatch({ type:FETCH_CATEGORY_START })

        axios.get(`${baseURL}/categories`)
            .then(res => {
                dispatch({ type: FETCH_CATEGORY_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: FETCH_CATEGORY_FAILURE })
            })
    }
}

export const FETCH_FACT_START = 'FETCH_FACT_START'
export const FETCH_FACT_SUCCESS = 'FETCH_FACT_SUCCESS'
export const FETCH_FACT_FAILURE = 'FETCH_FACT_FAILURE'
export const fetchFact = (category) => {
    return dispatch => {
        dispatch({ type: FETCH_FACT_START })

        axios.get(`${baseURL}/random${category}`)
            .then(res => {
                dispatch({ type: FETCH_FACT_SUCCESS, payload: res.data.value })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: FETCH_FACT_FAILURE })
            })
    }

}

export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
export const changeCategory = category => {
    return dispatch => {
        dispatch({ type:'CHANGE_CATEGORY', payload: category })
    }
}