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
        <Text style={ {textAlign: 'center',paddingTop: 20, fontSize: 21, fontFamily:'open-sans-semi'} }>
          { 'WELCOME TO '+dorm[0].tirolerheim.name.toUpperCase()+"!" }
        </Text>
        <List>
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
      </ScrollView>
    );
  }
}
