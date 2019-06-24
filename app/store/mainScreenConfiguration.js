import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import mainDataReducer from '../reducers/mainDataReducer';

const AppReducers = combineReducers({
    mainDataReducer,
});

const rootReducers = (state, action) => {
    return AppReducers(state, action);
};

const logger = createLogger();

export default createStore(rootReducers, compose(applyMiddleware(thunk, logger)));