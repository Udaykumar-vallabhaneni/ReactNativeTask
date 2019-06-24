import * as types from './types';

export function mainScreenData() {
    return {
        type: types.GET_MAIN_SCREEN_DATA,
    };
}

export function getMainScreenData(data) {
    return {
        type: types.GET_MAIN_SCREEN_DATA_RECIEVED,
        data: data,
    };
}