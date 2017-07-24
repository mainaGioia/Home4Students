import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Constants } from 'expo';
import Utils from './app/components/Utils'
import UtilDetail from './app/components/UtilDetail'


class InfosScreen extends Component {
  render() {
    return <Text>Infos about the dorm</Text>
  }
}

const UtilsStack = StackNavigator({
  Utils: {
    screen: Utils,
    navigationOptions: { title: 'Utils' },
  },
  Details: { screen: UtilDetail, }
})

const MainScreenNavigator = TabNavigator({
  Utils: { screen: UtilsStack },
  Main: { screen: InfosScreen },
},{
  tabBarOptions: {
    style: {
      width: Dimensions.get("window").width,
    },
  },
});

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
