import {
    FETCH_CHEESES_REQUEST,
    FETCH_CHEESES_SUCCESS,
    FETCH_CHEESES_ERROR
} from '../actions/cheese';

const initialState = {
    cheeses: [],
    racks: [{occupancy: '5/8',coord:{x:'31',y:'4'}},{occupancy:'2/12',coord:{x:'15',y:'5'}},{occupancy:'16/32',coord:{x:'11',y:'1'}}],
    loading: false,
    error: null
};

export const cheeseReducer = (state=initialState, action) => {
    if(action.type === FETCH_CHEESES_REQUEST) {
        return {
            ...state,
            loading: true,
            error: null
        }
    }
    else if(action.type === FETCH_CHEESES_SUCCESS) {
        return {
            ...state,
            loading: false,
            error: null,
            cheeses: action.cheeses,
            racks: action.racks
        }
    }
    else if(action.type === FETCH_CHEESES_ERROR) {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }

    return state;

}
