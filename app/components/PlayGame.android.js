import React, { Component } from 'react'; 
import { View, Text, Navigator,TouchableHighlight,TouchableOpacity,Alert,StyleSheet,Image,Dimensions } from 'react-native';
import { randomLetters,shuffle,playSelectedLetter,getLetterImage } from '../../app/global_helpers/Helpers'
import Globals from '../../app/global_helpers/Globals';
import { default as Sound } from 'react-native-sound';
import ModalBox from '../../app/components/ModalBox';
import {insertData,getData} from '../../app/database/DAL';

export default class PlayGame extends Component {
        
        //var selectedLetter = Globals.URDU_ALPHABETS[Math.floor(Math.random()*Globals.URDU_ALPHABETS.length)];  //will be used when app is MVP
        //add selected array
         //static RANDOM_SELECTED_LETTER =Globals.URDU_ALPHABETS[Math.floor(Math.random()*Globals.URDU_ALPHABETS.length)]; ;
          constructor(props) {
            super(props);
            this.state = { 
                            LastResult : false,
                            lifeCount : 4,
                            totalLifeCount : 4,
                            scoreCount : 0,
                            modalVisible: false,
                         };  
            this.RANDOM_SELECTED_LETTER = Globals.URDU_ALPHABETS[Math.floor(Math.random()*Globals.URDU_ALPHABETS.length)];  
             playSelectedLetter(this.RANDOM_SELECTED_LETTER.sound_name);       
          }
    
            openModal = () => {
              this.setState({modalVisible: true});
           }
           closeModal = () => {
              this.setState({modalVisible: false});
           }
           
        navigate(routName){
        this.props.navigator.push({
             name:  routName
                })
            }
        
    onPressButton(chosenLetter,correctLetter) {
        //alert(correctLetter.name+"You tapped the button!"+chosenLetter);
        let isCorrect = 0;
        if(chosenLetter == correctLetter.name){            
            playSelectedLetter('correct_sound');      
            isCorrect = 1;
            this.state.LastResult = true;
            this.RANDOM_SELECTED_LETTER = Globals.URDU_ALPHABETS[Math.floor(Math.random()*Globals.URDU_ALPHABETS.length)];  
            this.setState({ scoreCount: this.state.scoreCount+=Globals.SCORE_POINTS });          
        }else{
                //lost life
                this.state.LastResult = false;
                this.setState({ lifeCount: --this.state.lifeCount });
            
            if(this.state.lifeCount <= 0){
                playSelectedLetter('result');
                this.openModal();    
            }else{
                playSelectedLetter('wrong_sound');
            }
            //console.log("<<<<<<<<<<<<<<<<<<<wrong Answer>>>>>>>>>>>>>>>>"+this.state.lifeCount); 
        }
          var objX = {
                        DEVICE_ID : 'FPABD8EF-62FC-4ECB-B2F5-92C9E79AC7F9',
                        SOUND_PLAYED : correctLetter.name,
                        SOUND_SELECTED : chosenLetter,
                        STATUS : isCorrect,
                        SCORE : this.state.scoreCount,
                        LIVES : this.state.lifeCount
                      }
            insertData(objX,'GAME_DATA');
            getData();          
    }
    
    repeatSound(){
        playSelectedLetter(this.RANDOM_SELECTED_LETTER.sound_name); 
    }
    
    calculateLifes(){
        var remainingLifes = [];  
        for(var i = 0; i < this.state.lifeCount; i++) {
                                    remainingLifes.push(<Image  key = {i} style={play_styles.life_count}
                                    source={require('../../app/images/life_on.png')} />
                                    )
                                }
        for(var j = 0; j < (this.state.totalLifeCount - this.state.lifeCount); j++) {
                                    remainingLifes.push(<Image  key = {j+"life_off"} style={play_styles.life_count}
                                    source={require('../../app/images/life_off.png')} />
                                    )
                                }
        return remainingLifes;
    }
    
  render() {
    var randomSelectedLetter = this.RANDOM_SELECTED_LETTER;
    var randLetters =  shuffle(randomLetters(Globals.URDU_ALPHABETS,randomSelectedLetter));   
    // play new sound if last option was correct
    if(this.state.LastResult){
                playSelectedLetter(randomSelectedLetter.sound_name);     
            }  
    var drawLifes = this.calculateLifes();
    return (         
        <View style={play_styles.main_container}>  
                <TouchableOpacity onPress={this.repeatSound.bind(this)} style={{flexDirection: 'row'}}>
                    <View style={play_styles.speaker}>
                        <Image style={play_styles.speak_sound}
                        source={require('../../app/images/speaker.png')} />
                        <View style={{flex:1,flexDirection: 'row'}}>
                            <View style={play_styles.life_count_left}>
                                {drawLifes} 
                            </View>
                            <View style={play_styles.score_count_right}>
                                <Text style={play_styles.score_count_text} >Score : {this.state.scoreCount}</Text>
                            </View>
                        </View> 
                    </View>
                </TouchableOpacity>
        
                <View style={play_styles.option_box}>
                    
                     {Object.keys(randLetters).map((key,index) => {
                           var screenWidth = ((Dimensions.get('window').width)/2)-5;                           
                           var randomColor = Globals.COLOR[Math.floor(Math.random()*Globals.COLOR.length)];  //will be used when app is MVP
                           return <TouchableOpacity key={index} letterName={randLetters[key].name} onPress={this.onPressButton.bind(this,randLetters[key].name,randomSelectedLetter)} > 
                                        <View style={{margin:2,borderRadius:12,flex:1,width: screenWidth, backgroundColor: randomColor,alignItems:'center',justifyContent:'center'}} key={index}>
                                            <Image 
                                                 style={{width: 160, height: 160,resizeMode: 'contain'}}
                                                source={getLetterImage(randLetters[key].name)} />
                                            </View> 
                                  </TouchableOpacity>                                                   
                        }
                    )}
                </View>                        
               <ModalBox modalVisible= {this.state.modalVisible} openModal = {this.openModal} closeModal = {this.closeModal} finalScore={this.state.scoreCount} navigator={this.props.navigator} />   
        </View>
         
        
    );

  }
}

var play_styles = StyleSheet.create({
  speaker: {
            marginTop:52, flex: 1, height: 150, backgroundColor: '#f2bc3b',alignItems:'center',justifyContent:'center'
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
  },
   speak_sound:{
       width: 120, height: 120,  resizeMode: 'center'
   },
   life_count:{
       width: 25, height: 25,  resizeMode: 'center',marginLeft:5
   },
    life_count_left:{
        flex: 1,flexDirection: 'row'
    },
    score_count_right:{
        flex: 1,flexDirection: 'column'
    },
    score_count_text:{
        alignSelf:'flex-end',marginRight:5,fontWeight:'900',fontSize:19,textShadowOffset:{width: 1, height: 1},color:'#27ae60',textShadowColor:'#2ecc71'
    }
    
})

//AppRegistry.registerComponent('UrduLearn', () => LandingPage);