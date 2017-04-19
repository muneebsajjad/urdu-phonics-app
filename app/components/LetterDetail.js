import React, { Component } from 'react'; 
import { View, Text, Navigator,TouchableHighlight,TouchableWithoutFeedback,TouchableOpacity,ScrollView,StyleSheet,Image } from 'react-native';
import Globals from '../../app/global_helpers/Globals';
import { getLetterImage,playSelectedLetter } from '../../app/global_helpers/Helpers'
import { default as Sound } from 'react-native-sound';

export default class LearnUrdu extends Component {
    
      navigate(routName){
        this.props.navigator.push({
             name:  routName
        })
    }

     _handleAppStateChange = (nextAppState) => {
            if(nextAppState =='background'){
                getData();
            }
          }
    
 repeatSound(letterObj){
        playSelectedLetter(letterObj.sound_name); 
    }   
  render() {
    //var randomColor = Globals.COLOR[Math.floor(Math.random()*Globals.COLOR.length)];  //will be used when app is MVP  
    return (  
        <ScrollView>    
            <View style={learn_styles.main_container}>
                    <TouchableOpacity letterName={this.props.letterObj.name} onPress={this.repeatSound.bind(this,this.props.letterObj)} > 
                        
                                <Image  style={{margin:20, width: 300, height:500,resizeMode: 'contain'}}
                                    source={getLetterImage(this.props.letterObj.name)} />
                        
                    </TouchableOpacity>      
            </View>
        </ScrollView>
    );
  }
}

var learn_styles = StyleSheet.create({
  main_container: {
            flex: 1,flexDirection: 'row',flexWrap:'wrap',alignItems:'flex-end',marginTop:52,backgroundColor: 'aliceblue'
  }
});

//AppRegistry.registerComponent('UrduLearn', () => LandingPage);