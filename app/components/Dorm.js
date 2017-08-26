import React, { Component } from 'react';
import { Platform, ScrollView, View, StyleSheet } from 'react-native';
import { Tile, List, ListItem, Button, Text } from 'react-native-elements';
import { dorm } from '../config/data';
import { MapView, Constants } from 'expo';
import styles from './styles.js';


export default class Dorm extends Component{

  openModal = (menuitem) => {
    //console.log("modal to open: ",this.props.navigation);
    this.props.navigation.navigate('ModalPages', { menuitem });
  };

  render(){
    return(
      <ScrollView style={{paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0}}>
        <Tile
          imageSrc={require('../../assets/images/tirolerheim_neu_1.jpg')}
          featured
          activeOpacity={1}
        />
        <Text style={ {textAlign: 'center',paddingTop: 20, fontSize: 21} }>
          { 'WELCOME TO '+dorm[0].tirolerheim.name.toUpperCase()+"!" }
        </Text>
        <List>
          { dorm[0].tirolerheim.subcategories.map((subcat,i) => (
            <ListItem
              key={subcat.name+i}
              title={subcat.name}
              subtitle={subcat.description}
              onPress={() => {this.openModal(subcat); console.log(subcat.name);}}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
