import React, { Component } from 'react';
import {
   Modal,
   Text,
   TouchableOpacity,
   View,
   StyleSheet,
   Image,
   Navigator,
   Dimensions
} from 'react-native';

export default ModalBox = (props) => {
   return (
      <View style = {styles.container}>

         <Modal
            animationType = {"fade"}
            transparent = {false}
            visible = {props.modalVisible}
            onRequestClose = {() => {props.navigator.replace({name:  'LandingPage'}); console.log("Modal has been closed.")}}
            >
            <View style = {styles.modal}>

                 <Image resizeMode={Image.resizeMode.center} style={{flex:1,width:Dimensions.get('window').width,opacity:1,zIndex:999999991,resizeMode: 'contain'}} source={require('../../app/images/result.png')} >
                  <View style={{flex:4.5,justifyContent: 'flex-end', alignItems: 'center'}}>
                        <Text style={styles.final_score_count_text} >Score : {props.finalScore}</Text>
                    </View>
                        <View style={styles.gameover_buttons}>
                             <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-around'}}>
                                 <TouchableOpacity onPress={() => props.navigator.replace({name:  'PLayGame'})}>
                                        <Image style={{marginLeft:90,width:50,height:50}} source={require('../../app/images/reload.png')} />
                                    </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigator.resetTo({name:  'LandingPage'})}>
                                    <Image style={{marginRight:90,width:50,height:50}} source={require('../../app/images/menu.png')} />
                                </TouchableOpacity>
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
        /* flexDirection: 'row',
        alignItems: 'center',*/
        marginTop:70,

        flex:2
    }
});
