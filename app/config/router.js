import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import Utils from '../components/Utils';
import UtilDetail from '../components/UtilDetail';
import SubDetail from '../components/SubDetail';
import Dorm from '../components/Dorm';
import ModalPage from '../components/ModalPage';
import styles from './styles.js'


const navigationOptions = {
  navigationOptions:{
    headerStyle: styles.header,
    headerTintColor: '#fff',
    headerTitleStyle: styles.headerTitle,
  },
}

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

const modalNavigatorOptions = {
  headerMode: 'none',
  cardStyle: { backgroundColor: '#383a3d'}

}

const UtilsStack = StackNavigator({
  Utils: { screen: Utils, navigationOptions:{ title: 'Utils', headerTintColor: '#fff'} },
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



const Tabs = TabNavigator({
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

const ModalPagesStack = StackNavigator({
  ModalPages: { screen: ModalPage },
},
  modalNavigatorOptions
);

export const MainScreenNavigator = StackNavigator({
  Tabs: { screen: Tabs },
  ModalPages: { screen: ModalPagesStack },
},{
  mode: 'modal',
  headerMode: 'none',
});
