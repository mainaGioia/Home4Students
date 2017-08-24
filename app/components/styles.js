import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#383a3d',
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listItem: {
    backgroundColor: '#131210',
    margin: 1,
    width: 110,
    height: 130,
    flexDirection: 'column',
    alignItems: 'center',
    /*opacity: 0.5,
    justifyContent: 'center',*/
  },
  avatarView: {
    marginLeft:-33,
    width:100,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    //borderWidth: 1,
    //borderColor: '#ff00cc',
    // home4students color
    // backgroundColor: '#789fbe',
  },
  title:{
    fontSize: 34,
    textAlign: 'center',
  },
  titleView: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 15,
    /*borderWidth: 1,
    borderColor: '#ff00cc'*/
  },
  titleText: {
    color: '#ffffff',
    textAlign:'center',

  },
  subtitleView: {
    height: 28,
    width: 100,
    overflow: 'hidden',
    //borderWidth: 1,
    //borderColor: '#ccffcc',

  },
  subtitleText: {
    color: '#ffffff',
    opacity: 0.6,
    textAlign:'center',
    fontFamily: 'montserrat',
    fontSize: 11,
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 10,
  },
  sectionText: {
    padding: 20,
  },
  map_container: {
    position: 'absolute',
    top: 150,
    left: 20,
    right: 20,
    bottom: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#cc00ff'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modal: {
    ...StyleSheet.absoluteFillObject,
    margin: 20,
    backgroundColor: '#fff',
  },
  button_for_ios: {
    display: Platform.OS === 'ios' ? 'inline' : 'none',
    alignItems: 'flex-end',

  },
});
