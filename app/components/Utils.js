import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import { List, ListItem, Avatar } from 'react-native-elements';
import { utils } from '../config/data';
import styles from './styles';

const images = {
  image0: require('../images/icons/welcome.png'),
  image1: require('../images/icons/kitchen.png'),
  image2: require('../images/icons/laundry.png'),
  image3: require('../images/icons/janitor.png'),
  image4: require('../images/icons/key.png'),
  image5: require('../images/icons/party.png'),
  image6: require('../images/icons/music.png'),
  image7: require('../images/icons/gym.png'),
  image8: require('../images/icons/waste.png'),
  image9: require('../images/icons/email.png'),
}

export default class Utils extends Component {

  onLearnMore = (util) => {
    console.log("this.props.navigation: ",this.props.navigation);
    this.props.navigation.navigate('Details', { ...util });
  };


  getImage(num: number){
    return images['image'+num];
  }

  render() {
    return (
      <ScrollView style={{top:0,}}>
        <List style={styles.list}>
          {utils.map((util, num) => (
            <ListItem
              style={ styles.listItem }
              key={util.name}
              avatar={this.getImage(num)}
              hideChevron
              wrapperStyle={{flexDirection:'column', alignItems:'center', }}
              avatarOverlayContainerStyle={{ borderWidth:1, borderColor:'#cc00ff'}}
              title={
                <View style={styles.subtitleView}>
                <Text style={{color: '#ffffff'}}> {util.name.toUpperCase()} </Text>
              <Text style={{color: '#ffffff'}}> Bala </Text>
            </View> }
              subtitle={util.description}
              onPress={() => {this.onLearnMore(util); console.log(util.name);}}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
