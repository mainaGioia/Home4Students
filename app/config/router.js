import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import Utils from '../components/Utils';
import UtilDetail from '../components/UtilDetail';
import SubDetail from '../components/SubDetail';
import Dorm from '../components/Dorm';
import styles from './styles.js'


const navigationOptions = {
  navigationOptions:{
    headerStyle: styles.header,
    headerTintColor: '#fff',
    headerTitleStyle: styles.headerTitle,
  },
}

const UtilsStack = StackNavigator({
  Utils: { screen: Utils, navigationOptions:{ title: 'Utils'} },
  Details: { screen: UtilDetail },
  Subcategory: { screen: SubDetail }
},
  navigationOptions
);

const createTabBar = (img) => ({ tintColor }) => (
  <Image
    source={img}
    style={[styles.tabIcon, {tintColor: tintColor}]}
  />
);

const tabNavigatorOptions = {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: styles.tabBarOptions,
      showIcon: true,
      showLabel: false,
      activeTintColor: '#ffffff',
      indicatorStyle:{backgroundColor:'#789fbe'},
    },
}

export const MainScreenNavigator = TabNavigator({
  Utils: {
    screen: UtilsStack,
    navigationOptions: {
      tabBarIcon: createTabBar(require('../../assets/images/icons/utilitiesIcon.png'))
    },
  },
  Main: {
    screen: Dorm,
    navigationOptions: {
      tabBarIcon: createTabBar(require('../../assets/images/icons/welcomeIcon.png'))
    },
  },
},
  tabNavigatorOptions
);
