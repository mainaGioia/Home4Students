import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Tile, List, ListView, ListItem, Button } from 'react-native-elements';
import styles from './styles.js';

const images = {
  welcome: require('../../assets/images/tirolerheim_neu_2.jpg'),
  kitchen: require('../../assets/images/kitchen.jpg'),
  laundry: require('../../assets/images/doubleroom.jpg'),
  cleaning: require('../../assets/images/cleaning.jpg'),
  keys: require('../../assets/images/keys.jpg'),
  party: require('../../assets/images/party.jpeg'),
  music: require('../../assets/images/music.jpeg'),
  gym: require('../../assets/images/gym.jpeg'),
  write: require('../../assets/images/write.jpg'),
  waste: require('../../assets/images/waste.jpg'),
};

export default class ModalPage extends Component {


  render() {
    const { name, description } = this.props.navigation.state.params.menuitem;

    return (
      <View style={styles.modal} >

        <Text style={ {textAlign: 'center',paddingTop: 20} }>
          { name }
        </Text>
        <Text style={ {textAlign: 'center',paddingTop: 20} }>
          { description }
        </Text>
        <View style={styles.button_for_ios}>
        <Button onPress={() => this.props.navigation.goBack(null)} title="Done" backgroundColor='transparent' color='#397af8'/>
        </View>
      </View>
    );
  }

}
