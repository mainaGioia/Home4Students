import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Tile, List, ListView, ListItem } from 'react-native-elements';
import styles from './styles.js';


export default class UtilDetail extends Component {

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.subcategory.name,
  });


  render() {
    const { name, description, text } = this.props.navigation.state.params.subcategory;

    console.log("name, description: ", name, description);
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={{ paddingTop: 20, justifyContent: 'center' }}>
          { description }
        </Text>
        <Text style={styles.sectionText}> { text } </Text>
      </ScrollView>
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
