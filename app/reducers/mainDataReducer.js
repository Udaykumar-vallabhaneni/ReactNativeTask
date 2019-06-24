/* eslint-disable indent */
import * as ACTIONS from '../actions/types';

const mainDataReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.GET_MAIN_SCREEN_DATA:
            return { ...state };
        case ACTIONS.GET_MAIN_SCREEN_DATA_RECIEVED:
            return { ...state, data: action.data };
        default:
            return state;
    }
};

export default mainDataReducer;
