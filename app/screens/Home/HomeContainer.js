import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mainScreenData } from '../../actions/apiActions';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        fetchData: PropTypes.func
    };

    // eslint-disable-next-line react/no-deprecated
    componentWillMount() {
        this.props.fetchData();
    }

    render() {
        return <HomeView {...this.props} />;
    }
}

const mapStateToProps = state => ({
    // error: state.mainDataReducer.error,
    data: state.default.data
});

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(mainScreenData())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
