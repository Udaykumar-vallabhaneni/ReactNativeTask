/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { getMainScreenData, selectMainScreenData } from '../../actions/apiActions';

class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        fetchmainScreenData: PropTypes.func,
    }

    // eslint-disable-next-line react/no-deprecated
    componentWillMount() {
        this.props.fetchmainScreenData();
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.MainContainer}>
                    {/*Donute Button Image */}
                    <Image
                        source={require('../../images/drawer.png')}
                        style={styles.Image}
                    />
                    <Image
                        source={require('../../images/gitIcon.png')}
                        style={styles.CenterImage}
                    />
                    <Image
                        source={require('../../images/notification.png')}
                        style={styles.RightImage}
                    />
                </View>
                <View style={styles.HeaderView}>
                    <ScrollView>
                        <Text>Overview</Text>
                        <Text>Repositeries <Text>11</Text></Text>
                        <Text>Status <Text>6</Text></Text>
                        <Text>Following</Text>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => ({
    products: selectMainScreenData(state),
});

function mapDispatchToProps(dispatch) {
    return {
        fetchmainScreenData: () => dispatch(getMainScreenData()),
    };
}

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'homePage', reducer });
// const withSaga = injectSaga({ key: 'homePage', saga });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ProductView);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeView);
