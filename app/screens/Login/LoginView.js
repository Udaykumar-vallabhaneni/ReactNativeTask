import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class LoginView extends Component {
    navigate = () => {
        this.props.onLogin('username', 'password');
    };


    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={this.navigate}>
                    <Text>Go to Main Screen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

LoginView.propTypes = {
    onLogin: PropTypes.func
};

export default LoginView;
