/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, FlatList } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import styles from './styles';

const Page = ({ label }) => {
    return (
        <View style={[styles.pageContainer]}>
            <Text style={styles.welcome}>{label}</Text>
            <Text style={styles.textFont}>Overview</Text>
            <Text style={styles.textFont}>
                Repositeries <Text>11</Text>
            </Text>
            <Text style={styles.textFont}>
                Status <Text>6</Text>
            </Text>
            <Text style={styles.textFont}>Following</Text>
        </View>
    );
};

const Repositeries = props => {
    return (
        <View style={styles.container}>
            <FlatList
                data={props.repos}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
};

class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        fetchData: PropTypes.func
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.MainContainer}>
                    <Image source={require('../../images/drawer.png')} style={styles.Image} />
                    <Image source={require('../../images/gitIcon.png')} style={styles.CenterImage} />
                    <Image source={require('../../images/notification.png')} style={styles.RightImage} />
                </View>
                <View style={styles.container}>
                    <ScrollableTabView initialPage={0} tabBarActiveTextColor="#53ac49" renderTabBar={() => <TabBar underlineColor="#53ac49" />}>
                        <Page tabLabel={{ label: 'Overview', badge: 6 }} label="Overview" style={styles.tab} />
                        <Repositeries repos={this.props.data} tabLabel={{ label: 'Repositeries', badge: 11 }} label="Repositeries" />
                        <Page tabLabel={{ label: 'Status' }} label="Status" />
                        <Page tabLabel={{ label: 'Following' }} label="Following" />
                    </ScrollableTabView>
                </View>
            </View>
        );
    }
}

export default HomeView;
