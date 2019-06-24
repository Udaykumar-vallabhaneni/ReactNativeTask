/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    CenterImage: {
        // backgroundColor: '#fff',
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
        marginTop: 50
    },
    MainHeader: {
        // backgroundColor: '#000',
        // height: 150
    },
    RightImage: {
        // backgroundColor: '#fff',
        height: 25,
        justifyContent: 'flex-end',
        marginLeft: 5,
        width: 25
    },
    ScrollView: {
        marginTop: 20
    },
    container: {
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1
        // justifyContent: 'center'
    },
    instructions: {
        color: '#333333',
        fontSize: 28,
        marginBottom: 5,
        textAlign: 'center'
    },
    pageContainer: {
        backgroundColor: '#fff',
        flex: 1
    },
    tab: {
        color: 'gray'
    },
    tabContainer: {
        flex: 3
    },
    textFont: {
        // color: 'white',
        fontSize: 15,
        fontWeight: '400',
        paddingLeft: 20
    },
    welcome: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
    }
});

export default styles;
