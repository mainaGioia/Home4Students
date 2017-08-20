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
  image0: require('../../assets/images/icons/kitchenIcon.png'),
  image1: require('../../assets/images/icons/laundryIcon.png'),
  image2: require('../../assets/images/icons/cleaningIcon.png'),
  image3: require('../../assets/images/icons/keysIcon.png'),
  image4: require('../../assets/images/icons/partyIcon.png'),
  image5: require('../../assets/images/icons/musicIcon.png'),
  image6: require('../../assets/images/icons/gymIcon.png'),
  image7: require('../../assets/images/icons/wasteIcon.png'),
  image8: require('../../assets/images/icons/writeIcon.png'),
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
              wrapperStyle={{flexDirection:'column', alignItems:'center', margin: 10}}
              avatarOverlayContainerStyle={{ borderWidth:1, borderColor:'#cc00ff', width:34, height:34}}
              title={
                <View style={styles.titleView}>
                <Text style={{color: '#ffffff', textAlign:'center'}}> {util.name[0].toUpperCase()+util.name.substr(1)} </Text>
                </View>
              }
              subtitle={
                <View style={styles.subtitleView}>
                {
                    <Text style={styles.subtitleText}>
                      {util.description[0].toUpperCase()+util.description.substr(1)}
                    </Text>
                }
                </View>
              }
              subtitleNumberOfLines = {2}
              onPress={() => {this.onLearnMore(util); console.log(util.name);}}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
