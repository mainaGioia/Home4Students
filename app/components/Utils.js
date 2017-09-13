import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
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
    //console.log("this.props.navigation: ",this.props.navigation);
    this.props.navigation.navigate('Details', { ...util });
  };


  getImage(num: number){
    return images['image'+num];
  }

  //setting page title
  static navigationOptions = ({ navigation }) => ({
      header: null,
    });

  render() {
    return (
      <Image style={ styles.backgroundImage }
      source={require('../../assets/images/utilitiesBackground.png')}>
      <View style={styles.listContainer} >
        <List style={styles.list}>
          {utils.map((util, num) => (
            <ListItem
              style={ styles.listItem }
              wrapperStyle={{flexDirection:'column', alignItems:'center', top:12, left:-5}}
              key={util.name}
              avatar= {
                <View style={styles.avatarView}>
                <Image
                source={this.getImage(num)}
                style={{justifyContent:'center', alignItems:'center',}}
                 />
               </View> }
              hideChevron
              title={
                <View style={styles.titleView}>
                <Text style={styles.titleText}> {util.name[0].toUpperCase()+util.name.substr(1)} </Text>
                </View>
              }
              subtitle={
                <View style={styles.subtitleView}>
                {
                    <Text style={styles.subtitleText}>
                      {util.subtitle[0].toUpperCase()+util.subtitle.substr(1)}
                    </Text>
                }
                </View>
              }
              subtitleNumberOfLines = {2}
              underlayColor='#232426'
              onPress={() => {this.onLearnMore(util); console.log(util.name);}}
            />
          ))}
        </List>
      </View>
      </Image>
    );
  }
}
