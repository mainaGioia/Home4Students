import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import Utils from '../components/Utils';
import UtilDetail from '../components/UtilDetail';
import SubDetail from '../components/SubDetail';
import Dorm from '../components/Dorm';


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
  Utils: {
    screen: UtilsStack,
    navigationOptions: {
      tabBarLabel: 'Utils',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="list" color={tintColor}/>
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
