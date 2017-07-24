import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { utils } from '../config/data';
import styles from './styles';

export default class Utils extends Component {

  onLearnMore = (util) => {
    console.log("this.props.navigation: ",this.props.navigation);
    console.log(util);
    this.props.navigation.navigate('Details', { ...util });
  };

  render() {
    return (
      <ScrollView >
        <List>
          {utils.map((util) => (
            <ListItem
              key={util.name}
              roundAvatar
              avatar={ { uri: util.picture.thumbnail } }
              title={ util.name.toUpperCase() }
              subtitle={util.description}
              onPress={() => {this.onLearnMore(util); console.log(this.props.navigation.state); console.log(util.name);}}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
