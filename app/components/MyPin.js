import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { MapView } from 'expo';
import styles from './styles.js';


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
