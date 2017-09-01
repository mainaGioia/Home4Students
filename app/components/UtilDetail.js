import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Tile, List, ListView, ListItem } from 'react-native-elements';
import styles from './styles.js';

const images = {
  welcome: require('../../assets/images/tirolerheim_neu_2.jpg'),
  kitchen: require('../../assets/images/kitchen.jpg'),
  laundry: require('../../assets/images/doubleroom.jpg'),
  cleaning: require('../../assets/images/cleaning.jpg'),
  keys: require('../../assets/images/keys.jpg'),
  party: require('../../assets/images/party.jpeg'),
  music: require('../../assets/images/music.jpeg'),
  gym: require('../../assets/images/gym.jpeg'),
  write: require('../../assets/images/write.jpg'),
  waste: require('../../assets/images/waste.jpg'),
};

export default class UtilDetail extends Component {

  openSub = (subcategory) => {
//    console.log("this.props.navigation: ",this.props.navigation);
    console.log("this is what i pass:  ", subcategory);
    this.props.navigation.navigate("Subcategory", { subcategory });
  };

  //setting page title
  static navigationOptions = ({ navigation }) => ({
      title: navigation.state.params.name[0].toUpperCase()+
        navigation.state.params.name.substr(1),
    });


  render() {
    const { key, picture, name, description, caption, subcategories } = this.props.navigation.state.params;

    return (
      <ScrollView >
        <Tile
          imageSrc={ images[key] }
          featured
          activeOpacity={1}
          title={ name.toUpperCase() }
          caption={description}
        />
        <Text style={ {textAlign: 'center',paddingTop: 20} }>
          { caption }
        </Text>
        <List>
          { subcategories.map((subcat,i) => (
            <ListItem
              key={subcat.name+i}
              title={subcat.name}
              subtitle={
                <View>
                <Text style={{opacity:0.4, fontSize:12, left:7 }}> {subcat.description} </Text>
                </View>
              }
              onPress={() => {this.openSub(subcat); console.log(subcat.name);}}
            />
          ))}
        </List>
      </ScrollView>
    );
  }

}
