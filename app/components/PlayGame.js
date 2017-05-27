import React, { Component } from 'react';
import { View, Text, Navigator,TouchableHighlight,TouchableOpacity,Alert,StyleSheet,Image,Dimensions } from 'react-native';
import { randomLetters,getRandomLetter,shuffle,playSelectedLetter,getLetterImage,trackFilteredLetters,getCycleCount } from '../../app/global_helpers/Helpers'
import Globals from '../../app/global_helpers/Globals';
import { default as Sound } from 'react-native-sound';
import ModalBox from '../../app/components/ModalBox';
import {insertData,getData} from '../../app/database/DAL';
import uuid from 'react-native-uuid';
import DeviceInfo from 'react-native-device-info';
 // var initalSound;
export default class PlayGame extends Component {

  componentWillMount() {

         getRandomLetter().then(x => {
        this.RANDOM_SELECTED_LETTER = x;
        playSelectedLetter(this.RANDOM_SELECTED_LETTER.sound_name);
        getCycleCount().then(x=>{
          this.setState({
           cycleCount: x
         });
        })
         this.setState({
          isLoading: false
        });
     })
   }

          constructor(props) {
            super(props);
            this.state = {
                            SessionId :  uuid.v4(),
                            LastResult : false,
                            lifeCount : 4,
                            totalLifeCount : 4,
                            scoreCount : 0,
                            modalVisible: false,
                            isLoading:true,
                         };

          }

          // _handleAppStateChange = (nextAppState) => {
          //   if(nextAppState =='background'){
          //       getData();
          //   }
          // }

            openModal = () => {
              this.setState({modalVisible: true});
           }
           closeModal = () => {
              this.setState({modalVisible: false});
           }

        navigate(routName){
        this.props.navigator.push({
             name:  routNamer
                })
            }

    async onPressButton(chosenLetter,correctLetter,optionsPresented) {
        //alert(correctLetter.name+"You tapped the button!"+chosenLetter);
        let isCorrect = 0;
        if(chosenLetter == correctLetter.name){
            isCorrect = 1;
            // this.state.LastResult = true;
            await trackFilteredLetters(correctLetter).then((result) => {
              console.log('TRACKING IS DONE');
            })
            // this.RANDOM_SELECTED_LETTER = getRandomLetter();
             getRandomLetter().then(x => {
              this.RANDOM_SELECTED_LETTER = x;
              //this.setState({ scoreCount: this.state.scoreCount+=Globals.SCORE_POINTS });
                getCycleCount().then(x=>{
                    //playSelectedLetter('correct_sound');
                  this.setState({
                   cycleCount: x,
                   LastResult: true,
                   scoreCount: this.state.scoreCount+=Globals.SCORE_POINTS
                 });
                }).catch((error) => console.warn("fetch error:", error))
            });

        }else{
                //lost life
                this.state.LastResult = false;
                this.setState({ lifeCount: --this.state.lifeCount });

            if(this.state.lifeCount <= 0){
                playSelectedLetter('result');
                this.openModal();
            }else{
                playSelectedLetter('wrong_sound');
                setTimeout(() => {this.repeatSound()}, 1000)

            }
            //console.log("<<<<<<<<<<<<<<<<<<<wrong Answer>>>>>>>>>>>>>>>>"+this.state.lifeCount);
        }
          var objX = {
                        SESSION_ID : this.state.SessionId,
                        DEVICE_ID : DeviceInfo.getUniqueID(),
                        SOUND_PLAYED : correctLetter.name,
                        SOUND_SELECTED : chosenLetter,
                        STATUS : isCorrect,
                        OPTIONS_PRESENTED : optionsPresented,
                        CYCLE_COUNT : this.state.cycleCount,
                        SCORE : this.state.scoreCount,
                        LIVES : this.state.lifeCount
                      }
             //console.log(">>>>>>>>>DATA TO BE INSERTED>>>>>>>>>>"+)
            insertData(objX,Globals.TABLES.GAME_DATA);
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
    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>;
    }

    var optionsPresented = [];
    var randomSelectedLetter = this.RANDOM_SELECTED_LETTER;
    var randLetters =  shuffle(randomLetters(Globals.URDU_ALPHABETS,randomSelectedLetter));
    //gather options available for selection
    Object.keys(randLetters).map((key,index) => {
            optionsPresented.push(randLetters[key].name);
    })
    var optionsString = optionsPresented.join('|');
    //console.log(`OPTION PRESENTED`+optionsString);
    // console.log(JSON.stringify(randLetters));
    // play new sound if last option was correct
    if(this.state.LastResult){
                console.log('i am in render');
                  playSelectedLetter('correct_sound');
                  setTimeout(() => {playSelectedLetter(randomSelectedLetter.sound_name)}, 1600)

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
                            <Text style={play_styles.cycle_count}>{this.state.cycleCount}</Text>
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
                           return <TouchableOpacity key={index} letterName={randLetters[key].name} onPress={this.onPressButton.bind(this,randLetters[key].name,randomSelectedLetter,optionsString)} >
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
   },cycle_count:{
       color:'#F2BC3B'
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