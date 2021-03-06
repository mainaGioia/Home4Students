import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listItem: {
    backgroundColor: 'rgba(0,0,0,0.5)',
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
  captionBox:{
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding:20,
  },
  captionTitle:{
    textAlign:'center',
    color:'white',
    fontSize:17,
    fontFamily:'open-sans-semi',
  },
  captionSubtitle: {
    textAlign: 'center',
    color:'#aaaaaa',
    fontSize:14,
    fontFamily:'montserrat',
  },
  titleView: {
    flexDirection: 'column',
    alignItems: 'center',
    //borderWidth: 1,
    //borderColor: '#ff00cc',
  },
  titleText: {
    color: '#ffffff',
    textAlign:'center',
    fontFamily: 'open-sans-semi',
  },
  subtitleView: {
    //height: 28,
    width: 98,
    overflow: 'hidden',
    //borderWidth: 1,
    //borderColor: '#ccffcc',
    //justifyContent:'center'

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
  section_text: {
    fontFamily: 'montserrat',
    paddingTop: 20,
    paddingBottom:0,
    color: "#4a4a4a",
    //textAlign: 'justify',
  },
  section_title: {
    marginTop: 20,
    fontSize: 16,
    fontFamily: 'montserrat',
    //left: 5,
  },
  section_description: {
    fontFamily: 'montserrat',
    color:"#aaaaaa",
  },
  list_title: {
    fontFamily: 'open-sans-semi',
    color: "#4a4a4a",
    fontSize: 17,
    left:5,
  },
  list_subtitle: {
    fontFamily: 'montserrat',
    color: "#aaaaaa",
    fontSize: 13,
    left:7
  },
  map_container: {
    position: 'absolute',
    //margin for the ios close button
    top: Platform.OS === 'ios' ? 0 : 20,
    left: 20,
    right: 20,
    height: 200,
    justifyContent: 'flex-start',
    alignItems: 'center',
    //borderWidth: 2,
    //borderColor: '#cc00ff'
  },
  map_nearbypoints_container: {
    position: 'absolute',
    //margin for the ios close button
    top: Platform.OS === 'ios' ? 0 : 20,
    left: 20,
    right: 20,
    height: 350,
    justifyContent: 'flex-start',
    alignItems: 'center',
    //borderWidth: 2,
    //borderColor: '#cc00ff'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  text_under_map: {
    position: 'absolute',
    top: 250,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_under_nearbymap: {
    position: 'absolute',
    top: 400,
    left: 20,
  },
  modal: {
    ...StyleSheet.absoluteFillObject,
    margin: 20,
    backgroundColor: '#fff',
  },
  button_for_ios: {
    display: Platform.OS === 'ios' ? 'block' : 'none',
    alignItems: 'flex-end',
  },
  notes: {
    fontFamily: 'montserrat',
    paddingTop: 20,
  },

});
