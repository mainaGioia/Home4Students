import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
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


  export const MyPin = (coords, image, name, address) => (
      <MapView.Marker
        coordinate={coords}>
        title= { name }
        description= { address }
        <Image
          source={image}
          style={{height:30}}
          onLoad={() => this.forceUpdate()}>
          <Text style={{width:0, height:0}}>{Math.random()}</Text>
        </Image>
      </MapView.Marker>
    )


export function createNearbyMap(region, points) {

  let category = "";

  const categoryItem = (item) => {
    if (item.type !== category){
      category = item.type;
      return <Text>{category}</Text>
    }
  }

  return(
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
        { points.map((point, i) => (
          <View key={i}>
            {categoryItem(point)}
            <Text> {point.name} </Text>
            <Text> {point.address} </Text>
          </View>
        ))}
        </View>
    </View>
  )

}
