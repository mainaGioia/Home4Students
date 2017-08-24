import React, { Component } from 'react';
import { MapView } from 'expo';


export default class Map extends Component {

  state = {
    region : {
      latitude: 47.264595,
      longitude: 11.349841,
      latitueDelta: 0.1,
      longitudeDelta: 0.1,
    },
  }

  render(){
    return (
      <MapView
        initialRegion={region}/>
    );
  }

}
