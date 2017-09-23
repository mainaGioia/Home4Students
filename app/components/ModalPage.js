import React, { Component } from 'react';
import { ScrollView, Text, View, Image, Platform } from 'react-native';
import { Tile, List, ListView, ListItem, Button  } from 'react-native-elements';
import { MyMap } from './Map.js';
import { MyPin } from './MyPin.js';
import { MapView } from 'expo';
import styles from './styles.js';

const markers = {
  bakeries: require('../../assets/images/markers/bakeries.png'),
  banks: require('../../assets/images/markers/banks.png'),
  Home4Students: require('../../assets/images/markers/Home4Students.png'),
  pharmacies: require('../../assets/images/markers/pharmacies.png'),
  supermarkets: require('../../assets/images/markers/supermarkets.png'),
  universities: require('../../assets/images/markers/universities.png'),
};

const createCurrentMap = (address, region, markerCoords) => (
  <View>
    <MyMap
      initialRegion={region}
      markercoords={ {latitude: markerCoords.lat, longitude: markerCoords.long } }
      markertitle='Home4Students - Tirolerheim'
      markerdescript={address.split(',')[0]}
    />
    <View style={styles.text_under_map}>
      <Image
        source={ require('../../assets/images/icons/directions.png') }
        />
      <Text style={{ fontSize:14, fontFamily:'montserrat', color:'#aaaaaa' }}> {address} </Text>
    </View>
  </View>
)

const createNearbyMap = (region, points) => (
  <View>
  <View style={styles.map_nearbypoints_container}>
    <MapView style={styles.map}
      initialRegion={ region }>
      { points.map(point => (
        <MapView.Marker
          coordinate={ point.coords }
          key={ point.address }
          title={ point.name }
          description={ point.address }
          image={markers[point.type] }
          />
      ))}
    </MapView>
    </View>
    <View style={styles.text_under_nearbymap}>
      <Text> We are here: </Text>
      <Text> ciao </Text>
    </View>
    </View>
)


const images = {
  welcome: require('../../assets/images/tirolerheim_neu_2.jpg'),
  facilities: require('../../assets/images/doubleroom.jpg'),
  "common kitchenware": require('../../assets/images/commonKitchenware.jpg'),
}

export default class ModalPage extends Component {


  render() {
    const { key, name, description, initialRegion, coords, address, page } = this.props.navigation.state.params.menuitem;

    let content = null;
    if (key.toLowerCase() == "map")
      content = createCurrentMap(address, initialRegion, {lat:coords.latitude, long:coords.longitude});
    else if (key.toLowerCase() == 'nearby')
      content = createNearbyMap(initialRegion, page.surroundings);
    else {
      content = <ScrollView style={{margin:20, marginTop:Platform.OS === 'ios' ? 0 : 20,}}>
      <Tile
        containerStyle={{flex:1, flexDirection:'row', alignItems:'center'}}
        imageSrc={ images[key] }
        featured
        activeOpacity={1}
      />
      { page.map((obj, i) => (
          <View key={obj.name+i}>
            <Text style={styles.section_title}>{obj.name[0].toUpperCase()+obj.name.substr(1)}</Text>
            <Text style={styles.section_description}>{obj.description[0].toUpperCase()+obj.description.substr(1)}</Text>
            <Text style={styles.section_text}>{obj.text[0].toUpperCase()+obj.text.substr(1)}</Text>
            {/*<Text style={styles.notes}>{subcat.note[0].toUpperCase()+subcat.note.substr(1)}</Text>*/}
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
          title="Close" backgroundColor='transparent' color='#000000'/>
        </View>

        { content }

      </View>
    );
  }

}
