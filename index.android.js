/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  BackAndroid
} from 'react-native';

import LandingPage from './app/components/LandingPage';
import PlayGame from './app/components/PlayGame';
import LearnUrdu from './app/components/LearnUrdu';
import LetterDetail from './app/components/LetterDetail'
import Globals from './app/global_helpers/Globals';
/*import {insertData,getData} from './app/database/DAL';

var objX = {
  DEVICE_ID : 'FPABD8EF-62FC-4ECB-B2F5-92C9E79AC7F9',
  SOUND_PLAYED : 'aba',
  SOUND_SELECTED : 'apa',
  STATUS : 0,
  SCORE : 20,
  LIVES : 3
}
insertData(objX,'GAME_DATA');
getData();*/

class BootStrapApp extends Component {
    
  
    renderScene(route, navigator){
             
        if(route.name == 'LandingPage'){
            return <LandingPage navigator={navigator} /> 
        }else if(route.name == 'PLayGame'){
            return <PlayGame navigator={navigator}/> 
        }else if(route.name == 'LearnUrdu'){
            return <LearnUrdu navigator={navigator}/> 
        }else if(route.name == 'LetterDetail'){
            return <LetterDetail navigator={navigator} letterObj={route.letterObj}/> 
        }
    }
  render() {
    return (
        // <LandingPage />      
    <Navigator initialRoute={{name: 'LandingPage'}}
        renderScene={this.renderScene.bind(this)}
            
                 navigationBar={<Navigator.NavigationBar 
                    routeMapper={{ 
                                LeftButton: (route, navigator, index, navState) => 
                                 {
                                         if(index > 0) {
                                          return (
                                            <TouchableHighlight
                                                 underlayColor="transparent"
                                               onPress={() => { if (index > 0) { navigator.pop() } }}>
                                              <Text style={ styles.leftNavButtonText }>Back</Text>
                                            </TouchableHighlight>
                                        )}else { return null }
                                },
                    RightButton: (route, navigator, index, navState) => 
                                 { return (<Text></Text>
                                )},
                    Title: (route, navigator, index, navState) => 
                                 {   return (<Text style={ styles.title }>Learn Urdu</Text>
                                )},
                                }}
                        style={{backgroundColor: '#68c8ed'}}        
                />
            }
            
            configureScene={(route, routeStack) =>Navigator.SceneConfigs.FloatFromBottom}
    />
       
    );
  }
};

var styles = StyleSheet.create({
  mainContainer: {
  	flex: 4, 
    flexDirection: 'column', 
    marginTop:100
  },
  leftNavButtonText: {
  	fontSize: 16,
    marginLeft:13,
    marginTop:10,
      fontWeight: '500',
  },
  rightNavButtonText: {
  	fontSize: 18,
    marginRight:13,
    marginTop:2
  },
  nav: {
  	height: 50,
    backgroundColor: '#f5deb3'
  },
  title: {
    fontWeight: '500',
    fontFamily:'Lobster',  
  	marginTop:10,
    marginLeft:60,  
    fontSize:16,
    textAlignVertical: 'center' 
  },
  button: {
  	height:60, 
    marginBottom:10, 
    backgroundColor: '#efefef',
    justifyContent: 'center',
    textAlign: 'center'
  },
  buttonText: {
  	fontSize:18
  }
});

AppRegistry.registerComponent('UrduLearn', () => BootStrapApp);
