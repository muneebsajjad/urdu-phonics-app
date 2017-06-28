import React, { Component } from 'react';
import {
   Text,
   TouchableOpacity,
   View,
   StyleSheet,
   Image,
   Navigator,
   Dimensions
} from 'react-native';
import Modal from 'react-native-animated-modal'
import {getTheme,MKButton,MKColor} from 'react-native-material-kit';
import { getModelsImages } from '../../app/global_helpers/Helpers'
const theme = getTheme();


export function CardModel(props){
   return (
     <Modal isVisible={props.modalVisible} backdropColor="black" animationIn="bounceIn" animationOut="bounceOut" >
     <View  style={theme.cardStyle} >
           <View style={model_styles.container}>
             <Image style={model_styles.canvas} resizeMode="contain"  source={getModelsImages(props.modelImage)} style={theme.cardImageStyle} />
           </View>

           <Text style={theme.cardContentStyle}>
              {props.msgString}
           </Text>


           <MKButton
                 style={theme.cardActionStyle}
                 backgroundColor={MKColor.Teal}
                 shadowRadius={2}
                 shadowOffset={{width:0, height:2}}
                 shadowOpacity={.7}
                 shadowColor="black"
                 onPress={() => {
                   if(props.params){
                      props.closeModal(props.params)
                   }else {
                     props.closeModal()
                   }

                   console.log('hi, raised button!');
                 }}
                 >
                 <Text pointerEvents="none"
                       style={{color: 'white', fontWeight: 'bold',textAlign: 'center'}}>
                 Got it
                 </Text>
                 </MKButton>

           </View>
     </Modal>
   );
}



export function ResultModel(props){
   return (
     <Modal isVisible={props.modalVisible} backdropColor="white" backdropOpacity={0.4} animationIn="bounceIn" animationInTiming={1} animationOutTiming={1} >

           <View style={{alignItems:'center'}}>
             <Image  source={getModelsImages(props.modelImage)} style={theme.cardImageStyle} />
           </View>

     </Modal>
   );
}


var model_styles = StyleSheet.create({
  container: {
    alignItems: 'center',position: 'relative'
  },
  canvas: {
  position: 'absolute',top: 0,left: 0,bottom: 0,right: 0
  },
});
