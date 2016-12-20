import React, { Component } from 'react'; 
import { View, Text, Navigator,TouchableHighlight,TouchableOpacity,Alert,StyleSheet,Image } from 'react-native';
import { randomLetters,shuffle,playSelectedLetter,getLetterImage } from '../../app/global_helpers/Helpers'
import Globals from '../../app/global_helpers/Globals';
import { default as Sound } from 'react-native-sound';

export default class PlayGame extends Component {
        
        //var selectedLetter = Globals.URDU_ALPHABETS[Math.floor(Math.random()*Globals.URDU_ALPHABETS.length)];  //will be used when app is MVP
        //add selected array
         //static RANDOM_SELECTED_LETTER =Globals.URDU_ALPHABETS[Math.floor(Math.random()*Globals.URDU_ALPHABETS.length)]; ;
          constructor(props) {
            super(props);
            this.state = { LastResult : 'null' };  
            this.RANDOM_SELECTED_LETTER = Globals.URDU_ALPHABETS[Math.floor(Math.random()*Globals.URDU_ALPHABETS.length)];  
          }
    
        navigate(routName){
        this.props.navigator.push({
             name:  routName
        })
    }

    
    onPressButton(chosenLetter,correctLetter) {
        //alert(correctLetter.name+"You tapped the button!"+chosenLetter);
        if(chosenLetter == correctLetter.name){
            playSelectedLetter('correct_sound');      
            this.state.LastResult = 'correct'
            Alert.alert(
                  Globals.URDU_STRINGS.very_good,
                  Globals.URDU_STRINGS.correct_message,
                  [
                    {
                    text: 'OK', onPress: () =>{ 
                     this.RANDOM_SELECTED_LETTER = Globals.URDU_ALPHABETS[Math.floor(Math.random()*Globals.URDU_ALPHABETS.length)];  
                     this.forceUpdate();}
                    },
                  ]
                )
        }else{
            playSelectedLetter('wrong_sound'); 
        }
    }
    
    repeatSound(){
        playSelectedLetter(this.RANDOM_SELECTED_LETTER.sound_name); 
    }
    
  render() {
    var randomSelectedLetter = this.RANDOM_SELECTED_LETTER;
    var randLetters =  shuffle(randomLetters(Globals.URDU_ALPHABETS,randomSelectedLetter));
    playSelectedLetter(randomSelectedLetter.sound_name);      
    return (             
        <View style={play_styles.main_container}>                      
                <TouchableOpacity onPress={this.repeatSound.bind(this)} style={{flexDirection: 'row'}}>
                    <View style={play_styles.speaker}><Image 
                     style={{width: 100, height: 100}}
                    source={require('../../app/images/speaker.png')} /></View>
                </TouchableOpacity>
        
                <View style={play_styles.option_box}>
                    
                     {Object.keys(randLetters).map((key,index) => {
                           var randomColor = Globals.COLOR[Math.floor(Math.random()*Globals.COLOR.length)];  //will be used when app is MVP
                           return <TouchableOpacity key={index} letterName={randLetters[key].name} onPress={this.onPressButton.bind(this,randLetters[key].name,randomSelectedLetter)} > 
                                        <View style={{margin:5,borderRadius:12,width: 170, height: 170, backgroundColor: randomColor,alignItems:'center',justifyContent:'center'}} key={index}>
                                            <Image 
                                                 style={{width: 160, height: 160,resizeMode: 'contain'}}
                                                source={getLetterImage(randLetters[key].name)} />
                                            </View> 
                                  </TouchableOpacity>                                                   
                        }
                    )}
                </View>
             <View style={{width: 0, height: 0, backgroundColor: 'skyblue'}}><Text></Text></View>             
        </View>
         
        
    );

  }
}

var play_styles = StyleSheet.create({
  speaker: {
            marginTop:52, flex: 1, height: 150, backgroundColor: '#9E9E9E',alignItems:'center',justifyContent:'center'
        },
  main_container:{
        flex: 1, backgroundColor: 'aliceblue', flexDirection: 'column', justifyContent:'space-between', alignItems: 'center'
        },
  option_box:{
    flex: 1, flexDirection: 'row', flexWrap:'wrap', alignItems: 'center'
  },    
  learn_text:{
    fontWeight: '500',
      marginTop: 0,
    fontFamily:'Lobster',  
  	marginTop:4,
    fontSize:16,
    textAlignVertical:'center'  
  }        
})

//AppRegistry.registerComponent('UrduLearn', () => LandingPage);