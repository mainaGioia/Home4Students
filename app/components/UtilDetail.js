import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Tile, List, ListView, ListItem } from 'react-native-elements';
import styles from './styles.js';


export default class UtilDetail extends Component {

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name.toUpperCase(),
  });

  render() {
    const { picture, name, description, subcategories } = this.props.navigation.state.params;
    const images = {
      Welcome: require('../images/tirolerheim_neu_1.jpg'),
      kitchen: require('../images/kitchen.jpg'),
      laundry: require('../images/doubleroom.jpg'),

    };

    console.log("name::::::", name, images[name] );

    return (
      <ScrollView>
        <Tile
          imageSrc={ images[name] }
          featured
          title={ name.toUpperCase() }
          caption={description}
        />
        <Text style={ {textAlign: 'center',paddingTop: 20} }>
          { description }
        </Text>
        <List>
          {
            subcategories.map((subcat,i) => (
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
