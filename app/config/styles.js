import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#383a3d',
    opacity: 0.5,
    //height: 42,
    //borderWidth: 1,
    //borderColor: '#ff0000',
  },
  headerTitle: {
    fontFamily: 'open-sans-semi',
    textAlign: 'center',
    fontWeight: 'normal',
    opacity: 1,
    //fontSize: 14,
  },
  headerIcon: {
    marginLeft: 20,
    opacity:1,
  },
  tabBarOptions: {
    width: Dimensions.get("window").width,
    backgroundColor: '#383a3d',
    // home4students color
    // backgroundColor: '#789fbe',
  },
  tabIcon: {
    width: 20,
    height: 20,
    padding: 5,
  },
})
