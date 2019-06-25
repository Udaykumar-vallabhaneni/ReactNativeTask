/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    AvatarImage: {
        borderRadius: 10,
        height: 25,
        justifyContent: 'flex-start',
        // marginLeft: 5,
        // marginRight: 10,
        width: 25,
    },
    CenterImage: {
        height: 25,
        justifyContent: 'center',
        marginLeft: 5,
        width: 25
    },
    HeaderView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Image: {
        height: 25,
        justifyContent: 'flex-start',
        marginLeft: 5,
        width: 25
    },
    MainContainer: {
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 44
    },
    RightImage: {
        height: 25,
        justifyContent: 'flex-end',
        marginLeft: 5,
        width: 25
    },
    RoundText: {
        height: 15,
        width: 15,

    },
    ScrollView: {
        marginTop: 20
    },
    StarImage: {
        height: 25,
        justifyContent: 'flex-start',
        marginTop: 10,
        width: 25,
    },
    TabContentMainView: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'column',
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
    },
    TabView: {
        paddingLeft: 35,
    },
    TabViewAvatar: {
        flexDirection: 'column',
    },
    ViewHeader: {
        color: '#33A5FF',
        fontSize: 18,
        fontWeight: '500',
        justifyContent: 'space-between',
    },
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1
    },
    description: {
        color: 'gray',
        paddingTop: 5,
    },
    instructions: {
        color: '#333333',
        fontSize: 28,
        marginBottom: 5,
        textAlign: 'center'
    },
    languageText: {
        color: 'gray',
        paddingLeft: 5,
        paddingTop: 10
    },
    languageView: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 5
    },
    pageContainer: {
        backgroundColor: '#fff',
        flex: 1
    },
    subDiv: {
        flexDirection: 'row', paddingTop: 10
    },
    tab: {
        color: 'gray'
    },
    tabContainer: {
        flex: 3
    },
    textFont: {
        fontSize: 15,
        fontWeight: '400',
        paddingLeft: 20
    },
    welcome: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
    },
    teamSize: {
        paddingTop: 15,
    }
});

export default styles;
