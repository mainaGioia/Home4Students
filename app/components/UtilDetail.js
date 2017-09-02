import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { Tile, List, ListView, ListItem } from 'react-native-elements';
import styles from './styles.js';

const images = {
  welcome: require('../../assets/images/tirolerheim_neu_2.jpg'),
  kitchen: require('../../assets/images/kitchen.jpg'),
  laundry: require('../../assets/images/doubleroom_small.jpg'),
  cleaning: require('../../assets/images/singleroom_small.jpg'),
  keys: require('../../assets/images/keys.jpg'),
  party: require('../../assets/images/party_small.jpg'),
  music: require('../../assets/images/music.jpeg'),
  gym: require('../../assets/images/gym_small.jpg'),
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
    const { key, picture, name, description, caption, subtitle, subcategories } = this.props.navigation.state.params;

    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
            <Image
              source={ images[key] }
              resizeMode="cover"
              style={{flexShrink:1}}
            />
          </View>
          <View style={{ backgroundColor: 'black', opacity: 0.7, paddingBottom:20, bottom:-20 }}>
            <Text style={{textAlign:'center', paddingTop: 20, color:'white', fontSize:17, fontFamily:'open-sans-semi'}}>
            {subtitle[0].toUpperCase()+subtitle.substr(1)}
            </Text>
            <Text style={ {textAlign: 'center', color:'#aaaaaa', fontSize:14, fontFamily:'montserrat'} }>
              { caption }
            </Text>
          </View>
        </View>
        <List >
          { subcategories.map((subcat,i) => (
            <ListItem
              key={subcat.name+i}
              title={subcat.name}
              subtitle={
                <View>
                <Text style={{opacity:0.4, fontSize:13, left:7 }}> {subcat.description} </Text>
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
