import React, { Component } from 'react';
import { Text,TouchableHighlight,TouchableOpacity,StyleSheet,Image } from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
import Globals from '../../app/global_helpers/Globals';
import {CardModel} from '../../app/components/ModelsType';
import { createAnimatableComponent, View } from 'react-native-animatable';
import { AdMobBanner, AdMobInterstitial, PublisherBanner,AdMobRewarded } from 'react-native-admob'


export default class LandingPage extends Component {

    componentDidMount(){
      if (!Globals.VOLUME_FLAG) {
          this._showModal()
      }

    }

    constructor(props) {
      super(props);
      this.state = {
                      isModalVisible: false
                   };
                 }


    _showModal = () => {
                        this.setState({ isModalVisible: true });
                        Globals.VOLUME_FLAG = 1;
                        Globals.G_MODEL_VISIBILITY = 1;
                      }

    _hideModal = () => {
              this.setState({ isModalVisible: false })
              Globals.G_MODEL_VISIBILITY = 0;
            }


    navigate(routName){
        this.props.navigator.push({
             name:  routName
        })
    }
  render() {
    let  msgstring =  'Please turn up the volume, to listen Letter sounds.';
    return (
        <Image source={require('../../app/images/bg.png')} style={Landing_styles.container}>
         <View animation="fadeInDown"  style={Landing_styles.main_container}>
             <TouchableOpacity onPress={this.navigate.bind(this,'PLayGame')}>
                <Image source={require('../../app/images/play_game.png')} style={Landing_styles.play} />
                <Text style={Landing_styles.play_text} >Play Game</Text>
             </TouchableOpacity>

            <TouchableOpacity onPress={this.navigate.bind(this,'LearnUrdu')}>
             <Image source={require('../../app/images/learn_urdu.png')} style={Landing_styles.learn} />
             <Text style={Landing_styles.learn_text}>Learn Urdu</Text>
            </TouchableOpacity>
            <CardModel modalVisible= {this.state.isModalVisible} closeModal = {this._hideModal} msgString = {msgstring}  modelImage = "volume_up"/>
         </View>
        </Image>


    );
  }
}

var Landing_styles = StyleSheet.create({
    learn: {
        margin: 5,
        width: 170,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center'
    },
    play: {
        margin: 5,
        width: 170,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center'
    },
    play_text: {
        fontWeight: '500',
        marginTop: 0,
        fontFamily: 'Lobster',
        marginTop: 4,
        fontSize: 16,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    learn_text: {
        fontWeight: '500',
        marginTop: 0,
        fontFamily: 'Lobster',
        marginTop: 4,
        fontSize: 16,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    backgroundImage: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    main_container: {
        flex: 1,
        //backgroundColor: 'gainsboro',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
})


//AppRegistry.registerComponent('UrduLearn', () => LandingPage);
