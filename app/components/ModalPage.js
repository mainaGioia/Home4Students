import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Tile, List, ListView, ListItem, Button } from 'react-native-elements';
import { MyMap } from './Map.js';

import styles from './styles.js';


export default class ModalPage extends Component {


  render() {
    const { key, name, description } = this.props.navigation.state.params.menuitem;

    let content = null;
    if (key.toLowerCase() == "map")
      content = <MyMap
          initialRegion={{
            latitude: 47.264995,
            longitude: 11.378328,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}
          markercoords={ {latitude: 47.264595, longitude: 11.349841} }
          markertitle='Home4Students - Tirolerheim'
          markerdescript='Technikerstraße, 7'
          />
    else if (key.toLowerCase() == "welcome"){
      content = <Text>some text + {name}</Text>
    }

    return (
      <View style={styles.modal} >
        { /* button for dismissing modal page in ios */ }
        <View style={styles.button_for_ios}>
          <Button onPress={() => this.props.navigation.goBack(null)}
          title="Done" backgroundColor='transparent' color='#397af8'/>
        </View>

        { content }

      </View>
    );
  }

}
