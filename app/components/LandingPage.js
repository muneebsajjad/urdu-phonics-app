import React, { Component } from 'react'; 
import { View, Text, Navigator,TouchableHighlight,TouchableOpacity,StyleSheet } from 'react-native';

export default class LandingPage extends Component {
    navigate(routName){
        this.props.navigator.push({
             name:  routName
        })
    }
  render() {
    return (
         <View style={{flex: 1,backgroundColor: 'aliceblue', flexDirection: 'row', justifyContent: 'center',alignItems: 'center'}}>
             <TouchableOpacity onPress={this.navigate.bind(this,'PLayGame')}>
                <View style={Landing_styles.play}><Text style={Landing_styles.play_text} >Play Game</Text></View>
             </TouchableOpacity>

            <TouchableOpacity onPress={this.navigate.bind(this,'LearnUrdu')}>
             <View  style={Landing_styles.learn} ><Text style={Landing_styles.learn_text}>Learn Urdu</Text></View>
            </TouchableOpacity>
         </View>
    );
  }
}

var Landing_styles = StyleSheet.create({
  learn: {
  	margin:5,width: 170, height: 170, backgroundColor: '#9E9E9E',alignItems:'center',justifyContent:'center',borderRadius:12 
  },
  play:{
    margin:5,width: 170, height: 170, backgroundColor: '#4CAF50',alignItems:'center',justifyContent:'center',borderRadius:12  
  },
  play_text:{
    fontWeight: '500',
      marginTop: 0,
    fontFamily:'Lobster',  
  	marginTop:4,
    fontSize:16,
    textAlignVertical:'center'  
  },    
  learn_text:{
    fontWeight: '500',
      marginTop: 0,
    fontFamily:'Lobster',  
  	marginTop:4,
    fontSize:16,
    textAlignVertical:'center'  
  },
    backgroundImage: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center' ,
    width: null,
    height: null,
    resizeMode: 'cover'
  }        
})

//AppRegistry.registerComponent('UrduLearn', () => LandingPage);