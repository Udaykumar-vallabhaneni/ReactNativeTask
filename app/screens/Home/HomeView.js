/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import shortid from 'shortid';
import { View, Text, Image, FlatList, TextInput } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import styles from './styles';

const Page = ({ label }) => {
    return (
        <View style={[styles.pageContainer]}>
            <Text style={styles.welcome}>{label}</Text>
        </View>
    );
};

const Repositeries = props => {
    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40, margin: 10, borderBottomColor: 'gray' }}
                placeholder="Search here"
                onChangeText={(text) => {
                    props.search(text);
                }
                }
            />
            <FlatList
                // data={(props.searchText !== '' && props.repos.langth !== 0) ? (props.repos.filter((item) => (item.description !== '' ? item.description.includes(props.searchText) : ''))) : props.repos}
                data={props.repos}
                renderItem={({ item, index }) => {
                    return (
                        <View key={index} style={styles.TabContentMainView}>
                            <View style={styles.TabViewAvatar}>
                                <Text style={styles.ViewHeader}>
                                    <Image source={{ uri: item.owner.avatar_url }} style={styles.AvatarImage} ></Image>
                                    {item.full_name}
                                </Text>
                            </View>
                            <View style={styles.TabView}>
                                <Text style={styles.description}>{item.description}</Text>
                                <View style={styles.subDiv}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../../images/star.png')} style={styles.StarImage} ></Image>
                                        <Text style={styles.teamSize}>{item.size}</Text>
                                    </View>
                                    <View style={styles.languageView}>
                                        <Text style={{ backgroundColor: item.language === 'JavaScript' ? 'yellow' : 'orange', height: 15, width: 15, borderRadius: 15, marginTop: 10, color: 'gray' }}></Text>
                                        <Text style={styles.languageText}>{item.language}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
        </View >
    );
};

class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        data: this.props.data,
        searchText: ''
    }

    static propTypes = {
        fetchData: PropTypes.func,
        data: PropTypes.array,
    };

    search(text) {
        this.setState({ searchText: text });
        // this.state.data.filter((item) => (item.description.includes(text)));
    }
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
                        <Repositeries repos={this.props.data} tabLabel={{ label: 'Repositeries', badge: 11 }} label="Repositeries" searchText={'Conditi'} search={(text) => this.search(text)} />
                        <Page tabLabel={{ label: 'Status' }} label="Status" />
                        <Page tabLabel={{ label: 'Following' }} label="Following" />
                    </ScrollableTabView>
                </View>
            </View>
        );
    }
}

export default HomeView;
