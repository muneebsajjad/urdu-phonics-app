import React, { Component } from 'react';
import {Text,TouchableHighlight,TouchableOpacity,StyleSheet,Image } from 'react-native';
import Navigator from 'react-native-deprecated-custom-components';
import { createAnimatableComponent, View } from 'react-native-animatable';
import Modal from 'react-native-animated-modal'
import {getTheme} from 'react-native-material-kit';
const theme = getTheme();

export default class LandingPage extends Component {

    componentDidMount(){
      this._showModal()
    }

    constructor(props) {
      super(props);
      this.state = {
                      isModalVisible: false
                   };
                 }


    _showModal = () => this.setState({ isModalVisible: true })

    _hideModal = () => this.setState({ isModalVisible: false })


    navigate(routName){
        this.props.navigator.push({
             name:  routName
        })
    }
  render() {
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


            <Modal isVisible={this.state.isModalVisible}>
            <View style={theme.cardStyle}>
                  <Image source={{uri : '../../app/images/play_game.png'}} style={theme.cardImageStyle} />
                  <Text style={theme.cardTitleStyle}>Welcome</Text>
                  <Text style={theme.cardContentStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                  </Text>
                  <View style={theme.cardMenuStyle}><Text>yahoo</Text></View>
                  <Text style={theme.cardActionStyle}>My Action</Text>
                  </View>
            </Modal>

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
