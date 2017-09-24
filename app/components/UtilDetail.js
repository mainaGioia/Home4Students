import React, { Component } from 'react';
import { ScrollView, Text, View, Image, Platform } from 'react-native';
import { Tile, List, ListView, ListItem } from 'react-native-elements';
import styles from './styles.js';

export default class UtilDetail extends Component {

  openSub = (menuitem) => {
//    console.log("this.props.navigation: ",this.props.navigation);
    console.log("this is what i pass:  ", menuitem);
    this.props.navigation.navigate('ModalPages', { menuitem });
  };

  //setting page title
  static navigationOptions = ({ navigation }) => ({
      title: navigation.state.params.name[0].toUpperCase()+
        navigation.state.params.name.substr(1),
    });


  render() {
    const { key, picture, name, description, caption, subcategories } = this.props.navigation.state.params;

    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <Image
            source={ picture.large }
            style={ styles.backgroundImage }>
            <View style={{flex:1, justifyContent:'flex-end'}}>
              <View style={ styles.captionBox }>
                <Text style={ styles.captionTitle }>
                {description[0].toUpperCase()+description.substr(1)}
                </Text>
                <Text style={ styles.captionSubtitle }> { caption } </Text>
              </View>
            </View>
          </Image>
        </View>
        <List style={{top:0}}>
          { subcategories.map((subcat,i) => (
            <ListItem
              key={subcat.name+i}
              title={
                <View>
                <Text style={styles.list_title}> {subcat.name[0].toUpperCase()+subcat.name.substr(1)} </Text>
                </View>
              }
              subtitle={
                <View>
                <Text style={styles.list_subtitle}> {subcat.description[0].toUpperCase()+subcat.description.substr(1)} </Text>
                </View>
              }
              onPress={() => {this.openSub(subcat); console.log(subcat.name);}}
            />
          ))}
        </List>
      </View>
    );
  }

}
