import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'

  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listItem: {
    backgroundColor: '#131210',
    margin: 2,
    width: 110,
    height: 130,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title:{
    fontSize: 34,
    textAlign: 'center',

  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 10,
  },
  sectionText: {
    padding: 20,
  }

});
