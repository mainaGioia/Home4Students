import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { utils } from '../config/data';
import styles from './styles';

const images = {
  image0: require('../images/icons/welcome.png'),
  image1: require('../images/icons/kitchen.png'),
  image2: require('../images/icons/laundry.png'),
  image3: require('../images/icons/janitor.png'),
  image4: require('../images/icons/key.png'),
  image5: require('../images/icons/email.png'),
}

export default class Utils extends Component {

  onLearnMore = (util) => {
    console.log("this.props.navigation: ",this.props.navigation);
    this.props.navigation.navigate('Details', { ...util });
  };


  getImage(num: number){
    console.log(images['image'+num]);
    return images['image'+num];
  }

  render() {
    return (
      <ScrollView style={{top:-20}}>
        <List>
          {utils.map((util, num) => (
            <ListItem
              key={util.name}
              roundAvatar
              avatar={ this.getImage(num) }
              title={ util.name.toUpperCase() }
              subtitle={util.description}
              onPress={() => {this.onLearnMore(util); console.log(util.name);}}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
