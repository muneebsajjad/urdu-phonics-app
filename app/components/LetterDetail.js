import React, { Component } from 'react';
import { View, Text, Navigator,TouchableHighlight,TouchableWithoutFeedback,TouchableOpacity,ScrollView,StyleSheet,Image,Dimensions } from 'react-native';
import Globals from '../../app/global_helpers/Globals';
import { getLetterImage,playSelectedLetter } from '../../app/global_helpers/Helpers'
import { default as Sound } from 'react-native-sound';
import DeviceInfo from 'react-native-device-info';
import {insertData,getData} from '../../app/database/DAL';
import Swiper from 'react-native-swiper';

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

      _onMomentumScrollEnd(e, state, context) {
        if (Globals.G_SOUND_INSTANCE){
            Globals.G_SOUND_INSTANCE.stop().release();
            Globals.G_SOUND_INSTANCE = "";
        }
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
    let  allLetters = Globals.URDU_ALPHABETS;
    return (
      <Swiper showsButtons={true} showsPagination={false} index={this.props.letterObj.slide_index} onMomentumScrollEnd ={this._onMomentumScrollEnd} >
       {Object.keys(allLetters).map((key,index) => {
        return <View style={learn_detail_styles.main_container} key={index}>
                    <TouchableOpacity letterName={allLetters[key].name} onPress={this.repeatSound.bind(this,allLetters[key])} >
                  <Image  style={{flex:1,margin:20,resizeMode: 'contain',alignItems:'center',justifyContent:'center'}} source={getLetterImage(allLetters[key].name)} />

                    </TouchableOpacity>
            </View>
          }
        )}
      </Swiper>
    )
  }
}

var learn_detail_styles = StyleSheet.create({
  main_container: {
            flex: 1,flexDirection: 'column',width:Dimensions.get('window').width,flexWrap:'wrap',alignItems:'center',marginTop:52,backgroundColor: '#C6C8CA'
  }
});


//AppRegistry.registerComponent('UrduLearn', () => LandingPage);
