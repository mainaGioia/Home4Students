import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  tabBarOptions: {
    width: Dimensions.get("window").width,
    backgroundColor: '#383a3d',
    // home4students color
    // backgroundColor: '#789fbe',
  },
  tabIcon: {
    width: 26,
    height: 26,
    padding: 5,
  },
})
