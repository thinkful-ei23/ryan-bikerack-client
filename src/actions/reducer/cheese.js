import {
    FETCH_CHEESES_REQUEST,
    FETCH_CHEESES_SUCCESS,
    FETCH_CHEESES_ERROR
} from '../actions/cheese';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
};

export default (state=initialState, action) => {
    if(action.type === FETCH_CHEESES_REQUEST) {
        return {
            ...state,
            loading: true,
            error: null
        }
    }
    console.log(action, FETCH_CHEESES_SUCCESS);
    if(action.type === FETCH_CHEESES_SUCCESS) {
        return {
            ...state,
            loading: false,
            error: null,
            cheeses: action.cheeses
        }
    }
    if(action.type === FETCH_CHEESES_ERROR) {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }

    return state;

}
