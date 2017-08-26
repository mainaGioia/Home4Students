import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { Tile, List, ListView, ListItem, Button } from 'react-native-elements';
import { MyMap } from './Map.js';
import styles from './styles.js';

const createCurrentMap = (address, region, markerCoords) => (
  <View>
    <MyMap
      initialRegion={region}
      markercoords={ {latitude: markerCoords.lat, longitude: markerCoords.long } }
      markertitle='Home4Students - Tirolerheim'
      markerdescript={address.split(',')[0]}
    />
    <View style={styles.text_under_map}>
      <Text> We are here: </Text>
      <Text> {address} </Text>
    </View>
  </View>
)

const images = {
  welcome: require('../../assets/images/tirolerheim_neu_2.jpg'),
  facilities: require('../../assets/images/doubleroom.jpg'),
}

export default class ModalPage extends Component {


  render() {
    const { key, name, description, initialRegion, coords, address, subcategories } = this.props.navigation.state.params.menuitem;

    let content = null;
    if (key.toLowerCase() == "map")
      content = createCurrentMap(address, initialRegion, {lat:coords.latitude, long:coords.longitude});
    else if (key.toLowerCase() == 'nearby')
      content = this.createNearbyMap();
    else {
      content = <ScrollView style={styles.modal}>
      <Tile
        imageSrc={ images[key] }
        featured
        activeOpacity={1}
      />
      { subcategories.map((subcat, i) => (
          <View key={subcat.name+i}>
            <Text style={styles.section_title}>{subcat.name}</Text>
            <Text style={styles.section_description}>{subcat.description}</Text>
            <Text style={styles.section_text}>{subcat.text}</Text>
          </View>
        ))
      }
      </ScrollView>
    }

    return (
      <View style={styles.modal} >
        { /* button for dismissing modal page in ios */ }
        <View style={styles.button_for_ios}>
          <Button onPress={() => this.props.navigation.goBack(null)}
          title="Close" backgroundColor='transparent' color='#397af8'/>
        </View>

        { content }

      </View>
    );
  }

}
