/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Image, ScrollView } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import styles from './styles';
import { getMainScreenData, selectMainScreenData } from '../../actions/apiActions';

const Page = ({ label }) => {
    return (<View style={[styles.container, { height: '100%' }]}>
        <Text style={styles.welcome}>
            {label}
        </Text>
        <Text style={styles.textFont}>Overview</Text>
        <Text style={styles.textFont}>Repositeries <Text>11</Text></Text>
        <Text style={styles.textFont}>Status <Text>6</Text></Text>
        <Text style={styles.textFont}>Following</Text>
    </View>);
};

class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        fetchmainScreenData: PropTypes.func,
    }

    // eslint-disable-next-line react/no-deprecated
    componentWillMount() {
        // this.props.fetchmainScreenData();
    }


    render() {
        return (
            <View>
                <View style={styles.MainHeader}>
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
                    <View>
                        {/* <ScrollView horizontal={true} style={styles.ScrollView}>
                            <Text style={styles.textFont}>Overview</Text>
                            <Text style={styles.textFont}>Repositeries <Text>11</Text></Text>
                            <Text style={styles.textFont}>Status <Text>6</Text></Text>
                            <Text style={styles.textFont}>Following</Text>
                        </ScrollView> */}
                    </View>
                    <View style={styles.container}>
                        <ScrollableTabView tabBarActiveTextColor="#53ac49" renderTabBar={() => <TabBar underlineColor="#53ac49" />}>
                            <Page tabLabel={{ label: 'Overview', badge: 6 }} label="Overview" style={styles.tab} />
                            <Page tabLabel={{ label: 'Repositeries', badge: 11 }} label="Repositeries" />
                            <Page tabLabel={{ label: 'Status' }} label="Status" />
                            <Page tabLabel={{ label: 'Following' }} label="Following" />
                        </ScrollableTabView>
                    </View>
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => ({
    // products: selectMainScreenData(state),
});

function mapDispatchToProps(dispatch) {
    return {
        // fetchmainScreenData: () => dispatch(getMainScreenData()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeView);
