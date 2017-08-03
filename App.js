import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Constants } from 'expo';
import Utils from './app/components/Utils';
import UtilDetail from './app/components/UtilDetail';
import SubDetail from './app/components/SubDetail';
import Dorm from './app/components/Dorm';


const UtilsStack = StackNavigator({
  Utils: {
    screen: Utils,
    navigationOptions: { title: 'Utils' },
  },
  Details: {
    screen: UtilDetail,
  },
  Subcategory: {
    screen: SubDetail,
  }
})

const MainScreenNavigator = TabNavigator({
  Utils: {
    screen: UtilsStack,
    navigationOptions: {
      tabBarLabel: 'Utils',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="list" size={35} color={tintColor}/>
    },
  },
  Main: {
    screen: Dorm,
    navigationOptions: {
      tabBarLabel: 'Infos',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="domain" size={35} color={tintColor}/>
    },
  },
},{
  tabBarOptions: {
    style: {
      width: Dimensions.get("window").width,
      // backgroundColor: '#789fbe',
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
