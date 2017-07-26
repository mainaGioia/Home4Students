import React, { Component } from 'react';
import { ScrollView, WebView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { dorm } from '../config/data';

class TirolerWebView extends Component{
  render() {
    return (
      <WebView source={{uri: 'https://www.home4students.at/en/living/dormitories-innsbruck/74-studentenheim-technikerstrasse/'}}
      style={{marginTop: 20}}
      />
    );
  }
}

export default class Dorm extends Component{

  handleButtonPress = () => {
    console.log("that's navigation: ", this.props.navigation);
    console.log("dorm: ", dorm.Tirolerheim);
    this.props.navigation.navigate();
  };

  render(){
    return(
      <ScrollView>
        <Tile
          imageSrc={ require('../images/tirolerheim.jpg') }
          featured
          title="TIROLERHEIM"
        />
        <Button
          title= "Website"
          buttonStyle={{ marginTop: 20 }}
          onPress={ this.handleButtonPress }
        />
        <List>
          { dorm[0].tirolerheim.map((property, i) => (
            <ListItem
              key={property.key+i}
                title={property.key}
                rightTitle={property.value}
                rightTitleStyle={{flex:1, justifyContent:'flex-end'}}
                rightTitleNumberOfLines={5}
                hideChevron
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
