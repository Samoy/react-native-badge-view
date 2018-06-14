/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import BadgeView from './badge-view/badgeView';

export default class RNBadgeView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <BadgeView parentView={
                    <View style={{width: 40, height: 40, backgroundColor: 'blue'}}/>
                } badgeText={"12"}/>
                <Text style={{marginBottom: 12}}>
                    Text Badge
                </Text>
                <BadgeView parentView={
                    <View style={{width: 40, height: 40, backgroundColor: 'blue'}}/>
                } badgeImageSource={require('./badge-view/test.png')}/>
                <Text>
                    Image Badge
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('RNBadgeView', () => RNBadgeView);
