import React, { Component } from 'react';
import { Platform, ScrollView, View, StyleSheet, Image } from 'react-native';
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
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <Image
            source={ require('../../assets/images/tirolerheim_neu_1.jpg') }
            style={ styles.backgroundImage }>
            <View style={{flex:1, justifyContent:'flex-end'}}>
              <View style={ styles.captionBox }>
                <Text style={ styles.captionTitle }>
                  { 'Welcome to '+dorm[0].tirolerheim.name[0].toUpperCase()+dorm[0].tirolerheim.name.substr(1)+"!" }
                </Text>
              </View>
            </View>
          </Image>
        </View>
        <List style={{top:0}}>
          { dorm[0].tirolerheim.subcategories.map((subcat,i) => (
            <ListItem
              key={subcat.name+i}
              title={
                <View>
                <Text style={styles.list_title}> {subcat.name[0].toUpperCase()+subcat.name.substr(1)} </Text>
                </View>
              }
              subtitle={
                <View>
                <Text style={styles.list_subtitle}> {subcat.description[0].toUpperCase()+subcat.description.substr(1)} </Text>
                </View>
              }
              onPress={() => {this.openModal(subcat); console.log(subcat.name);}}
            />
          ))}
        </List>
      </View>
    );
  }
}
