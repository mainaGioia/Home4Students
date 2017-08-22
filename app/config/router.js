import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import Utils from '../components/Utils';
import UtilDetail from '../components/UtilDetail';
import SubDetail from '../components/SubDetail';
import Dorm from '../components/Dorm';
import styles from './styles.js'


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
});

export const MainScreenNavigator = TabNavigator({
  Main: {
    screen: Dorm,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return (
          <Image
            source={require('../../assets/images/icons/welcomeIcon.png')}
            style={[styles.tabIcon, {tintColor: tintColor}]}
            />
          )},
    },
  },
  Utils: {
    screen: UtilsStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => {
        return (
          <Image
            source={require('../../assets/images/icons/utilitiesIcon.png')}
            style={[styles.tabIcon, {tintColor: tintColor}]}
            />
          );},
    },
  },
},{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: styles.tabBarOptions,
    showIcon: true,
    showLabel: false,
    activeTintColor: '#ffffff',
    indicatorStyle:{backgroundColor:'#789fbe'},
  },
});
