import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Home from '../pages/home';

export default class Router extends Component {
  render() {
    const Footer = TabNavigator({
      Home: {
        screen: StackNavigator({
          Home: { screen: Home }
        })
      }
    }, {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        labelStyle: { fontSize: 10 }
      }
    });
    return (
      <View style={{ flex: 1 }}>
        <Footer />
      </View>
    );
  }
}
