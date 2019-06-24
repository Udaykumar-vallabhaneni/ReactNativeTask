import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import mainDataReducer from '../../reducers/mainDataReducer';
import defaultSaga from '../../sagas/mainscreenSaga';
import { mainScreenData } from '../../actions/apiActions';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        fetchData: PropTypes.func,
    }

    // eslint-disable-next-line react/no-deprecated
    componentWillMount() {
        this.props.fetchData();
    }

    render() {
        return <HomeView {...this.props} store={store} />;
    }
}

const mapStateToProps = (state) => ({
    // error: state.mainDataReducer.error,
    data: state.data
});

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(mainScreenData()),
    };
}


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    mainDataReducer,
    applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(defaultSaga);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
