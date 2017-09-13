import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
    width: Dimensions.get("window").width,
    backgroundColor: '#000000',
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
