import { put, takeLatest, all } from 'redux-saga/effects';
import { getMainScreenData } from '../actions/apiActions';
import * as ACTIONS from '../actions/types';

function* fetchMainScreenData() {
    const json = yield fetch('https://api.github.com/users/supreetsingh247/repos')
        .then(response => {
            response.json();
        });
    yield put(getMainScreenData(json));

}
function* actionWatcher() {
    yield takeLatest(ACTIONS.GET_MAIN_SCREEN_DATA, fetchMainScreenData);
}
export default function* defaultSaga() {
    yield all([
        actionWatcher(),
    ]);
}