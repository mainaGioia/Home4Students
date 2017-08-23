import React, { Component } from 'react';
import { Platform, ScrollView, View, StyleSheet } from 'react-native';
import { Tile, List, ListItem, Button, Text } from 'react-native-elements';
import { dorm } from '../config/data';
import { MapView, Constants } from 'expo';
import styles from './styles.js';


export default class Dorm extends Component{

  render(){
    return(
      <ScrollView style={{paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0}}>
        <Tile
          imageSrc={require('../../assets/images/tirolerheim_neu_1.jpg')}
          featured
        />
        <Text style={ {textAlign: 'center',paddingTop: 20, color:'#fff', fontSize: 21} }>
          { 'WELCOME TO '+dorm[0].tirolerheim.name.toUpperCase()+"!" }
        </Text>
        <List>
          { dorm[0].tirolerheim.subcategories.map((subcat,i) => (
            <ListItem
              key={subcat.name+i}
              title={subcat.name}
              subtitle={subcat.description}
              onPress={() => {this.openSub(subcat); console.log(subcat.name);}}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
