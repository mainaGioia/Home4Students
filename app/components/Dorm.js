import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { dorm } from '../config/data';


export default class Dorm extends Component{

  handleButtonPress = () => {
    console.log("that's navigation: ", this.props.navigation);
    console.log("dorm: ", dorm.Tirolerheim);
    this.props.navigation.navigate('https://www.home4students.at/en/living/dormitories-innsbruck/74-studentenheim-technikerstrasse/');
  };

  render(){
    return(
      <ScrollView>
        <Tile
          imageSrc={ require('../images/tirolerheim.jpg') }
          featured
          caption="Tirolerheim"
        />
        <Button
          title= "Website"
          buttonStyle={{ marginTop: 20 }}
          onPress={ this.handleButtonPress }
        />
        <List>
          { dorm.map((property, i) => (
            <ListItem
              key={property.key+i}
              title={property.key}
              rightTitle={property.value}
              hideChevron
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
