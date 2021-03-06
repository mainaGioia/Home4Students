import React, { Component } from 'react';
import { ScrollView, Text, View, Image, Platform } from 'react-native';
import { Tile, List, ListView, ListItem, Button  } from 'react-native-elements';
import { MyMap } from './Map.js';
import { MyPin, createNearbyMap } from './MyPin.js';
import { MapView } from 'expo';
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
      <Image
        source={ require('../../assets/images/icons/directions.png') }
        />
      <Text style={{ fontSize:14, fontFamily:'montserrat', color:'#aaaaaa' }}> {address} </Text>
    </View>
  </View>
)



export default class ModalPage extends Component {



  render() {
    const { key, name, description, picture, initialRegion, coords, address, page } = this.props.navigation.state.params.menuitem;

    let note = null;
    if (page != null && page[0].note != null)
      note = <Text style={styles.notes}>{page[0].note}</Text>
    let list = null;
    if (page != null && page[0].list != null)
      list = <View>
            { page[0].list.map((item,i) => (
                <View style={{flexDirection: 'row'}} key={item+i}>
                  <Text>{'\u2022'}</Text>
                  <Text style={{fontFamily: 'montserrat',color: "#4a4a4a"}}> {item.name[0].toUpperCase()+item.name.substr(1)} </Text>
                </View>
            ))}
            </View>;

    let content = null;
    if (key.toLowerCase() == "map")
      content = createCurrentMap(address, initialRegion, {lat:coords.latitude, long:coords.longitude});
    else if (key.toLowerCase() == 'nearby')
      content = createNearbyMap(initialRegion, page[0].surroundings);
    else {
      console.log(page);
      page.map((obj, i)=> console.log(obj.text));
      content = <ScrollView style={{margin:20, marginTop:Platform.OS === 'ios' ? 0 : 20,}}>
      <Tile
        containerStyle={{flex:1, flexDirection:'row', alignItems:'center'}}
        imageSrc={ picture }
        featured
        activeOpacity={1}
      />
      { page.map((obj, i) => (
          <View key={obj.name}>
            <Text style={styles.section_title}>{obj.name[0].toUpperCase()+obj.name.substr(1)}</Text>
            <Text style={styles.section_description}>{obj.description[0].toUpperCase()+obj.description.substr(1)}</Text>
            <Text style={styles.section_text}>{obj.text[0].toUpperCase()+obj.text.substr(1)}</Text>
            {/*<Text style={styles.notes}>{subcat.note[0].toUpperCase()+subcat.note.substr(1)}</Text>*/}
            {list}
            {note}
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
