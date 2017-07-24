import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import styles from './styles.js';

export default class UtilDetail extends Component {

  render() {
    const { picture, name, description, subcategories } = this.props.navigation.state.params;

    return (
      <View style={ styles.list }>
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large}}
          featured
          title={'${name.toUpperCase()}'}
          caption={description}
        />

        <List>
          <ListItem
            title="Email"
            rightTitle={email}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={dob}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={location.city}
            hideChevron
          />
        </List>
      </ScrollView>
      </View>
    );
  }
}
