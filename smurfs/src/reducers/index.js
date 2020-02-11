import {
    FETCH_SMURFS_FAIL,
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCEED,
} from '../actions';

const initialState = {
    is_fetching: false,
    smurfs: [],
    error: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START: return {
            ...state,
            is_fetching: true,
        }
        case FETCH_SMURFS_SUCCEED: return {
            ...state,
            is_fetching: false,
            smurfs: action.payload,
        }
        case FETCH_SMURFS_FAIL: return {
            ...state,
            error: true,
        }
        default: return state;
    }
}