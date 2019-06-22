import * as types from '../actions/types';

export function mainDataReducer(state, action) {
    switch (action.type) {
        case types.GET_MAIN_SCREEN_DATA:
            return {
                ...state,
                data: action.payload
            };
        case types.SELECT_MAIN_SCREEN_DATA:
            return {
                ...state,
                id: action.response
            };
        default:
            // the dispatched action is not in this reducer, return the state unchanged
            return state;
    }
}

export const getProducts = state => state.products;