import React, { Component } from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';
import styles from './styles.js';


export const MyMap = ({initialRegion}) => (
      <View style={styles.map_container}>
        <MapView style={styles.map}
          initialRegion={ initialRegion }/>
      </View>
  );
