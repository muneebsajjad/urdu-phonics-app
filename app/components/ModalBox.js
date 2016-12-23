import React, { Component } from 'react';
import {
   Modal,
   Text,
   TouchableHighlight,
   View,
   StyleSheet,
   Image
} from 'react-native';

export default ModalBox = (props) => {
   return (
      <View style = {styles.container}>

         <Modal
            animationType = {"fade"}
            transparent = {true}
            visible = {props.modalVisible}
            onRequestClose = {() => {alert("Modal has been closed.")}}
            >
            <View style = {styles.modal}>
               <TouchableHighlight onPress = {props.closeModal}>
                 <Image resizeMode={Image.resizeMode.center} style={{flex:1,width:360,opacity:0.9,zIndex:999999999,resizeMode: 'contain'}} source={require('../../app/images/result.png')} />
               </TouchableHighlight>
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
      opacity:0.7
   }
});