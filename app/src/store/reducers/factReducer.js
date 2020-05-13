import { FETCH_CATEGORY_START, FETCH_CATEGORY_SUCCESS, FETCH_FACT_START, FETCH_FACT_SUCCESS } from "../actions"

export const initialState = {
    isFetching: false,
    currentFact: '',
    categories: [],
    currentCategory: '',
    errors: ''
}

export const factReducer = (state = initialState, action) => {
    switch(action.type){

        case FETCH_CATEGORY_START:
            return {
                ...state,
                isFetching: true
            }

        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                categories: action.payload
            }

        case FETCH_FACT_START:
            return {
                ...state,
                isFetching: true
            }

        case FETCH_FACT_SUCCESS:
            return {
                ...state,
                currentFact: action.payload,
                isFetching: false
            }

        default:
            return state
    }
}