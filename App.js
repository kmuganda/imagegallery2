import React from 'react';
import { View, Text } from 'react-native';
import Router from './components/router';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router />
      </View>
    );
  }
}
