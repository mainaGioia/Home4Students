import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Tile, List, ListView, ListItem } from 'react-native-elements';
import styles from './styles.js';


export default class UtilDetail extends Component {

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.subcategory.name,
  });


  render() {
    const { name, description } = this.props.navigation.state.params.subcategory;

    console.log("name, description: ", name, description);
    return (
      <View>
        <Tile
          imageSrc={ require('../images/tirolerheim_neu_2.jpg') }
          featured
          title={ name.toUpperCase() }
        />
        <Text style={ {textAlign: 'center',paddingTop: 20} }>
          { description }
        </Text>
      </View>
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
