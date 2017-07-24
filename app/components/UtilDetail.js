import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Tile, List, ListView, ListItem } from 'react-native-elements';
import styles from './styles.js';


export default class UtilDetail extends Component {

  render() {
    const { picture, name, description, subcategories } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={ {uri: picture.large} }
          featured
          title={ name.toUpperCase() }
          caption={description}
        />
        <Text style={ {textAlign: 'center',paddingTop: 20} }>
          { description }
        </Text>
        <List>
          {subcategories.map((subcat,i) => (
            <ListItem
              key={subcat.name+i}
              title={subcat.name}
              subtitle={subcat.description}
            />
          ))}
        </List>
      </ScrollView>
    );
  }

}

        //   <ListItem
        //     title="Email"
        //     rightTitle={email}
        //     hideChevron
        //   />
        //   <ListItem
        //     title="Phone"
        //     rightTitle={phone}
        //     hideChevron
        //   />
        // </List>
        //
        // <List>
        //   <ListItem
        //     title="Username"
        //     rightTitle={login.username}
        //     hideChevron
        //   />
        // </List>
        //
        // <List>
        //   <ListItem
        //     title="Birthday"
        //     rightTitle={dob}
        //     hideChevron
        //   />
        //   <ListItem
        //     title="City"
        //     rightTitle={location.city}
        //     hideChevron
        //   />
        // </List>
