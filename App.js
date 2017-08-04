import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MainScreenNavigator } from './app/config/router.js';
import { Constants } from 'expo';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreenNavigator />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
