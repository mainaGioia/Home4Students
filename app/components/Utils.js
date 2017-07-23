import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { utils } from '../config/data';

export default class Utils extends Component {

  onLearnMore = (util) => {
    this.props.navigation.navigate('Details', { ...util });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {utils.map((util) => (
            <ListItem
              key={util.name}
              roundAvatar
              avatar={{ uri: util.picture.thumbnail }}
              title={'${util.name.first.toUpperCase()}'}
              subtitle={util.description}
              onPress={() => this.onLearnMore(util)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
