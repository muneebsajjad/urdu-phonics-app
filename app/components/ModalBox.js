import React, { Component } from 'react';
import {
   Modal,
   Text,
   TouchableHighlight,
   View,
   StyleSheet,
   Image,
   Navigator
} from 'react-native';

export default ModalBox = (props) => {
   return (
      <View style = {styles.container}>

         <Modal
            animationType = {"fade"}
            transparent = {true}
            visible = {props.modalVisible}
            onRequestClose = {() => {console.log("Modal has been closed.")}}
            >
            <View style = {styles.modal}>
              
                 <Image resizeMode={Image.resizeMode.center} style={{flex:1,width:360,opacity:0.9,zIndex:999999991,resizeMode: 'contain'}} source={require('../../app/images/result.png')} >
                  <View style={{justifyContent: 'center', alignItems: 'center',marginTop:320,}}>
                        <Text style={styles.final_score_count_text} >Score : {props.finalScore}</Text>
                    </View>                                                                         
                        <View style={styles.gameover_buttons}>
                             <View style={{flexDirection: 'row',justifyContent: 'space-between',width:150}}>
                                 <TouchableHighlight onPress={() => props.navigator.replace({name:  'PLayGame'})}> 
                                        <Image style={{width:50,height:50}} source={require('../../app/images/reload.png')} />
                                    </TouchableHighlight>
                                <TouchableHighlight onPress={() => props.navigator.resetTo({name:  'LandingPage'})}>                                                     
                                    <Image style={{width:50,height:50}} source={require('../../app/images/menu.png')} />
                                </TouchableHighlight>                                             
                            </View>    
                        </View>
                </Image>
            </View>
         </Modal>

      </View>
   );
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     // marginTop: 70
   },
   modal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      flexDirection: 'column',
      opacity:0.9
   },
     final_score_count_text:{
       fontWeight:'900',fontSize:19,textShadowOffset:{width: 1, height: 1},color:'white',textShadowColor:'black',
    },
    gameover_buttons:{
         flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:70,
    }
});