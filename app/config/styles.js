import { Dimensions, StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    position:'absolute',
    top:0,
    left:0,
    right:0,
    //height: 42,
    //borderWidth: 1,
    //borderColor: '#ff0000',
  },
  headerTitle: {
    fontFamily: 'open-sans-semi',
    textAlign: 'center',
    fontWeight: 'normal',
    padding:16,
    //fontSize: 14,
  },
  headerTouchable: {
    alignItems:'center',
    flexDirection:'row',
    height:56,
    width:56,
  },
  headerIcon: {
    margin:20,
  },
  tabBarOptions: {
    backgroundColor: 'rgb(0,0,0)',
    //backgroundColor: '#383a3d',
    // home4students color
    // backgroundColor: '#789fbe',
  },
  tabIcon: {
    width: 20,
    height: 20,
    padding: 5,
  },
})
