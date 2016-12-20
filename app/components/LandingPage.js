import React, { Component } from 'react'; 
import { View, Text, Navigator,TouchableHighlight,TouchableOpacity,StyleSheet,Image } from 'react-native';

export default class LandingPage extends Component {
    navigate(routName){
        this.props.navigator.push({
             name:  routName
        })
    }
  render() {
    return (
         <View style={Landing_styles.main_container}>
             <TouchableOpacity onPress={this.navigate.bind(this,'PLayGame')}>
                <Image source={require('../../app/images/play_game.png')} style={Landing_styles.play} />
                <Text style={Landing_styles.play_text} >Play Game</Text>
             </TouchableOpacity>

            <TouchableOpacity onPress={this.navigate.bind(this,'LearnUrdu')}>
             <Image source={require('../../app/images/learn_urdu.png')} style={Landing_styles.learn} />
             <Text style={Landing_styles.learn_text}>Learn Urdu</Text>
            </TouchableOpacity>
         </View>
    );
  }
}

var Landing_styles = StyleSheet.create({
  learn: {
  	margin:5,width: 170, height: 170,alignItems:'center',justifyContent:'center'
  },
  play:{
    margin:5,width: 170, height: 170,alignItems:'center',justifyContent:'center'  
  },
  play_text:{
    fontWeight: '500',
      marginTop: 0,
    fontFamily:'Lobster',  
  	marginTop:4,
    fontSize:16,
    textAlignVertical:'center',
    textAlign:'center',
  },    
  learn_text:{
    fontWeight: '500',
      marginTop: 0,
    fontFamily:'Lobster',  
  	marginTop:4,
    fontSize:16,
    textAlignVertical:'center',
    textAlign:'center',
  },
    backgroundImage: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center' ,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
    main_container: {
   flex: 1,backgroundColor: 'gainsboro', flexDirection: 'row', justifyContent: 'center',alignItems: 'center'
  }          
})

//AppRegistry.registerComponent('UrduLearn', () => LandingPage);