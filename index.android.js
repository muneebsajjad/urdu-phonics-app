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
  TouchableHighlight,
  BackAndroid,
  AppState,
  Alert
} from 'react-native';
import LandingPage from './app/components/LandingPage';
import PlayGame from './app/components/PlayGame';
import LearnUrdu from './app/components/LearnUrdu';
import LetterDetail from './app/components/LetterDetail'
import Globals from './app/global_helpers/Globals';
import {insertData,getData} from './app/database/DAL';
import {syncUserLog} from './app/services/sync';
import BackgroundJob from "react-native-background-job";
import SplashScreen from 'react-native-splash-screen'
import NavigationExperimental from 'react-native-deprecated-custom-components';

var _navigator;
syncUserLog();

class BootStrapApp extends Component {


      componentDidMount() {
        SplashScreen.hide();
        AppState.addEventListener('change', this._handleAppStateChange);
         BackAndroid.addEventListener('hardwareBackPress', function() {
                      if (_navigator.getCurrentRoutes().length === 1  ) {
                           return false;
                        }
                        // to stop any playing sound
                        if (Globals.G_SOUND_INSTANCE){
                            Globals.G_SOUND_INSTANCE.stop().release();
                            Globals.G_SOUND_INSTANCE = "";
                        }
                        _navigator.pop();
                        return true;
          });
         }
     componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
      }



    _handleAppStateChange = (nextAppState) => {
            if(nextAppState =='background'){
              console.log(`CALLED FROM HERE`);
                getData();
            }
          }
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
    <NavigationExperimental.Navigator initialRoute={{name: 'LandingPage'}}
        renderScene={this.renderScene.bind(this)}

                 navigationBar={<NavigationExperimental.Navigator.NavigationBar
                    routeMapper={{
                                LeftButton: (route, navigator, index, navState) =>
                                 {
                                  _navigator = navigator;
                                         if(index > 0) {
                                          return (
                                            <TouchableHighlight
                                                 underlayColor="transparent"
                                               onPress={() => { if (index > 0) {
                                                  navigator.pop()
                                                  // to stop any playing sound
                                                  if (Globals.G_SOUND_INSTANCE){
                                                      Globals.G_SOUND_INSTANCE.stop().release();
                                                      Globals.G_SOUND_INSTANCE = "";
                                                  }
                                                } }}>
                                              <Text style={ styles.leftNavButtonText }>Back</Text>
                                            </TouchableHighlight>
                                        )}else { return null }
                                },
                    RightButton: (route, navigator, index, navState) =>
                                 { return (<Text></Text>
                                )},
                    Title: (route, navigator, index, navState) =>
                                 {   return (<Text >Learn Urdu</Text>
                                )},
                                }}
                        // style={{backgroundColor: '#68c8ed'}}
                        style = {styles.navigationBar}
                         navigationStyles={NavigationExperimental.Navigator.NavigationBar.StylesIOS}
                />
            }

            configureScene={(route, routeStack) =>NavigationExperimental.Navigator.SceneConfigs.PushFromRight}
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
    marginLeft:13,
  },
  rightNavButtonText: {
  	fontSize: 18,
    marginRight:13,
    marginTop:2
  },
  navigationBar: {
     backgroundColor: '#C6C8CA',
     borderBottomWidth:1,
     borderBottomColor: '#979797',
     height:55
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
