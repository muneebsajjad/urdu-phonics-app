import React, { Component } from 'react';
import { View, Text, Navigator,TouchableHighlight,TouchableWithoutFeedback,TouchableOpacity,ScrollView,StyleSheet,Image,Dimensions } from 'react-native';
import Globals from '../../app/global_helpers/Globals';
import { getLetterImage,playSelectedLetter } from '../../app/global_helpers/Helpers'
import { default as Sound } from 'react-native-sound';
import DeviceInfo from 'react-native-device-info';
import {insertData,getData} from '../../app/database/DAL';

export default class LearnUrdu extends Component {

      navigate(routName){
        this.props.navigator.push({
             name:  routName
        })
    }

     constructor(props) {
        super(props);
        playSelectedLetter(this.props.letterObj.sound_name);
         //saving data in logtable
         var objX = {
                        DEVICE_ID: DeviceInfo.getUniqueID(),
                        SOUND_PLAYED: this.props.letterObj.name,
                    }
         insertData(objX, 'LETTER_LOGS');
      }

    //  _handleAppStateChange = (nextAppState) => {
    //         if(nextAppState =='background'){
    //             getData();
    //         }
    //       }

 repeatSound(letterObj) {
    console.log(JSON.stringify(letterObj));
    playSelectedLetter(letterObj.sound_name);

    //saving data in logtable
    var objX = {
        DEVICE_ID: DeviceInfo.getUniqueID(),
        SOUND_PLAYED: letterObj.name,
    }
    insertData(objX, Globals.TABLES.LETTER_LOGS);
}

  render() {
    //var randomColor = Globals.COLOR[Math.floor(Math.random()*Globals.COLOR.length)];  //will be used when app is MVP
    return (

            <View style={learn_detail_styles.main_container}>
                    <TouchableOpacity letterName={this.props.letterObj.name} onPress={this.repeatSound.bind(this,this.props.letterObj)} >

                                <Image  style={{flex:1,margin:20,resizeMode: 'contain',alignItems:'center',justifyContent:'center'}}
                                    source={getLetterImage(this.props.letterObj.name)} />

                    </TouchableOpacity>
            </View>

    );
  }
}

var learn_detail_styles = StyleSheet.create({
  main_container: {
            flex: 1,flexDirection: 'column',width:Dimensions.get('window').width,flexWrap:'wrap',alignItems:'center',marginTop:52,backgroundColor: '#C6C8CA'
  }
});

//AppRegistry.registerComponent('UrduLearn', () => LandingPage);
