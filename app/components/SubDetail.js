import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Tile, List, ListView, ListItem, Button } from 'react-native-elements';
import styles from './styles.js';


export default class SubDetail extends Component {

  handleButtonPress = () => {
    console.log("pressed button");
  };


  render() {
    const { name, description, text } = this.props.navigation.state.params.subcategory;
    let content = null;
    if (name == "timer") {
      content =  <View><Button
        title= "60 min"
        onPress={ this.handleButtonPress }
      />
      <Text> {}</Text>
      </View>

    }
    else {
      content = <ScrollView>
        <Text style={styles.subtitle}> { description } </Text>
        <Text style={styles.sectionText}> { text } </Text>
      </ScrollView>
    }

    console.log("name, description: ", name, description);
    return (
      <View style={styles.container}>
        { content }
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
