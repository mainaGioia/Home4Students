import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { MainScreenNavigator } from './app/config/router.js';
import { AppLoading, Font, Constants } from 'expo';


export default class App extends Component {

  state = {
    loaded: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async() => {
    try{
      await Font.loadAsync({
        'open-sans-semi': require('./assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),
        'montserrat': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf')
      });
      this.setState({ loaded: true });
    }
    catch (e) {
      console.warn("exception thrown: "+e);
    }

  }

  render() {
    if(!this.state.loaded)
      return <AppLoading/>;
    return (
      <View style={styles.container}>
        <MainScreenNavigator />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383a3d',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    //backgroundColor: '#ecf0f1',
  },
});
