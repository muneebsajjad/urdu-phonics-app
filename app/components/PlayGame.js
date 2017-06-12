import React, { Component } from 'react';
import { Text, Navigator,TouchableHighlight,TouchableOpacity,Alert,StyleSheet,Image,Dimensions } from 'react-native';
import { randomLetters,getRandomLetter,shuffle,playSelectedLetter,getLetterImage,trackFilteredLetters,getCycleCount } from '../../app/global_helpers/Helpers'
import Globals from '../../app/global_helpers/Globals';
import { default as Sound } from 'react-native-sound';
import ModalBox from '../../app/components/ModalBox';
import {CardModel,ResultModel} from '../../app/components/ModelsType';
import { createAnimatableComponent, View } from 'react-native-animatable';
import {insertData,getData} from '../../app/database/DAL';
import uuid from 'react-native-uuid';
import DeviceInfo from 'react-native-device-info';



export default class PlayGame extends Component {

  componentDidMount(){
    //if (!Globals.LISTEN_FLAG) {    //temporary comented out
        this.openModal(1)
    //}
  }

  componentWillMount() {

         getRandomLetter().then(x => {
        this.RANDOM_SELECTED_LETTER = x;
        this.SHUFFLED_OPTIONS = shuffle(randomLetters(Globals.URDU_ALPHABETS,this.RANDOM_SELECTED_LETTER));
        //playSelectedLetter(this.RANDOM_SELECTED_LETTER.sound_name);
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
                            LastResult : '',
                            lifeCount : 4,
                            totalLifeCount : 4,
                            scoreCount : 0,
                            modalVisible: false,
                            infoModelVisible: false,
                            resultModelVisible: false,
                            isLoading:true,
                         };
          this.modelImage = 'correct';

          }

          // _handleAppStateChange = (nextAppState) => {
          //   if(nextAppState =='background'){
          //       getData();
          //   }
          // }

          //models methods to show/hide game over models
          openModal = (modelType) => {
              if(modelType == 1){
                this.setState({infoModelVisible: true});
                //Globals.LISTEN_FLAG = 1;   //temporary comented out
              }else{
                this.setState({modalVisible: true});
              }
           }

           closeModal = (modelType) => {
             if (modelType == 1) {
               this.setState({infoModelVisible: false});
                playSelectedLetter(this.RANDOM_SELECTED_LETTER.sound_name);
             }else if (modelType == 2) {
                this.setState({resultModelVisible: false});
             } else{
               this.setState({modalVisible: false});
              }
           }



        navigate(routName){
        this.props.navigator.push({
             name:  routNamer
                })
            }

    async onPressButton(chosenLetter,correctLetter,optionsPresented) {
        //alert(correctLetter.name+"You tapped the button!"+chosenLetter);
        this.modelImage = 'correct';
        let isCorrect = 0;
        if(chosenLetter == correctLetter.name){
            this.setState({resultModelVisible: true});
            isCorrect = 1;
            // this.state.LastResult = true;
            await trackFilteredLetters(correctLetter).then((result) => {
              console.log('TRACKING IS DONE');
            })
            // this.RANDOM_SELECTED_LETTER = getRandomLetter();
             await getRandomLetter().then(async x => {
              this.RANDOM_SELECTED_LETTER = x;
              this.SHUFFLED_OPTIONS = shuffle(randomLetters(Globals.URDU_ALPHABETS,this.RANDOM_SELECTED_LETTER));

              //setTimeout(() => {this.closeModal(2)}, 1000)
              //this.setState({ scoreCount: this.state.scoreCount+=Globals.SCORE_POINTS });
                await getCycleCount().then(x=>{
                    console.log('CYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY');
                  this.setState({
                   cycleCount: x,
                   LastResult: true,
                   scoreCount: this.state.scoreCount+=Globals.SCORE_POINTS,
                   //resultModelVisible: false
                 });
                   playSelectedLetter('correct_sound');
                   setTimeout(() => {this.closeModal(2)}, 1000)
                }).catch((error) => console.warn("fetch error:", error))
            });

        }else{
                this.modelImage = 'wrong';
                //this.setState({resultModelVisible: true});
                //lost life
                //this.state.LastResult = false;
                this.setState({ lifeCount: --this.state.lifeCount,
                                LastResult: false,
                                resultModelVisible: true });

            if(this.state.lifeCount <= 0){
                playSelectedLetter('result');
                this.openModal();
            }else{
                playSelectedLetter('wrong_sound');
                setTimeout(() => {
                  this.closeModal(2);
                  this.repeatSound();
                }, 1000)

                //setTimeout(() => {this.repeatSound()}, 1000)  // comented out if testing is ok remove this line

            }
            //console.log("<<<<<<<<<<<<<<<<<<<wrong Answer>>>>>>>>>>>>>>>>"+this.state.lifeCount);
        }

        if (!this.state.cycleCount) { //if cycleCount is empty
          this.state.cycleCount = 0;
        }
        console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||'+this.state.cycleCount);
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
    let  msgstring =  'Listen to the letter sound carefully and select the appropriate letter.';
    if (this.state.isLoading) {
      return <View><Text>Loading...</Text></View>;
    }

    var optionsPresented = [];
    var randomSelectedLetter = this.RANDOM_SELECTED_LETTER;
    //var randLetters =  shuffle(randomLetters(Globals.URDU_ALPHABETS,randomSelectedLetter));
    var randLetters =  this.SHUFFLED_OPTIONS
    //gather options available for selection
    Object.keys(randLetters).map((key,index) => {
            optionsPresented.push(randLetters[key].name);
    })
    var optionsString = optionsPresented.join('|');
    console.log(`OPTION PRESENTED`+optionsString);
    // console.log(JSON.stringify(randLetters));

    // play new sound if last option was correctResultModel
    if(this.state.LastResult && !this.state.resultModelVisible){
                console.log('i am in render');
                playSelectedLetter(randomSelectedLetter.sound_name);
                //setTimeout(() => {playSelectedLetter(randomSelectedLetter.sound_name)}, 1600)

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
                           if(this.state.LastResult === false && randLetters[key].name == randomSelectedLetter.name){
                           return (<TouchableOpacity key={index} delay={2000} letterName={randLetters[key].name} onPress={this.onPressButton.bind(this,randLetters[key].name,randomSelectedLetter,optionsString)} >
                                        <View animation="bounce" iterationCount="infinite" style={{margin:2,borderRadius:12,flex:1,width: screenWidth, backgroundColor: randomColor,alignItems:'center',justifyContent:'center'}} key={index}>
                                            <Image
                                                 style={{width: 160, height: 160,resizeMode: 'contain'}}
                                                source={getLetterImage(randLetters[key].name)} />
                                            </View>
                                  </TouchableOpacity>)
                                }else{
                                  return (<TouchableOpacity key={index} letterName={randLetters[key].name} onPress={this.onPressButton.bind(this,randLetters[key].name,randomSelectedLetter,optionsString)} >
                                               <View style={{margin:2,borderRadius:12,flex:1,width: screenWidth, backgroundColor: randomColor,alignItems:'center',justifyContent:'center'}} key={index}>
                                                   <Image
                                                        style={{width: 160, height: 160,resizeMode: 'contain'}}
                                                       source={getLetterImage(randLetters[key].name)} />
                                                   </View>
                                         </TouchableOpacity>)
                                }
                        }
                    )}
                    <ResultModel modalVisible= {this.state.resultModelVisible} closeModal = {this.closeModal} params = {2} msgString = {msgstring}  modelImage = {this.modelImage}/>
                    <CardModel modalVisible= {this.state.infoModelVisible} closeModal = {this.closeModal} params = {1} msgString = {msgstring}  modelImage = "listen_carefully"/>
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
