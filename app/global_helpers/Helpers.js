import React, { Component } from 'react'; 
import { View, Text, Navigator,TouchableHighlight } from 'react-native';
import { default as Sound } from 'react-native-sound';



export function randomLetters(data,selLetter){
    var tmpArray = [];
    var tmpLetters = data;
    
    //remove selected letter
    var toDelete = new Set([selLetter.name]);
    var tmpLetters = tmpLetters.filter(obj => !toDelete.has(obj.name));
    tmpArray.push(selLetter);
    
    var letter1 = tmpLetters[Math.floor(Math.random()*tmpLetters.length)];
     tmpArray.push(letter1);
    
    //deleting obj from the tmpLetters array
    var toDelete = new Set([letter1.name]);
    var tmpLetters = tmpLetters.filter(obj => !toDelete.has(obj.name));
    
    var letter2 = tmpLetters[Math.floor(Math.random()*tmpLetters.length)];
      tmpArray.push(letter2);
    
     //deleting obj from the tmpLetters array
    var toDelete = new Set([letter2.name]);
    var tmpLetters = tmpLetters.filter(obj => !toDelete.has(obj.name));
    
    var letter3 = tmpLetters[Math.floor(Math.random()*tmpLetters.length)];
      tmpArray.push(letter3);
    
     //deleting obj from the tmpLetters array
    var toDelete = new Set([letter3.name]);
    var tmpLetters = tmpLetters.filter(obj => !toDelete.has(obj.name));
    
    return tmpArray;
    
}

export function shuffle(obj){ 
    for(var j, x, i = obj.length; i; j = Math.floor(Math.random() * i), x = obj[--i], obj[i] = obj[j], obj[j] = x);
    return obj;
};

export function HelloChandu() {
    return 'abc';
}

 export function playSelectedLetter(data){        
        var letterSound = new Sound(data+'.mp3', Sound.MAIN_BUNDLE, (error) => {
              if (error) {                  
                console.log('failed to load the sound', error);
              } else { // loaded successfully
                  console.log("<<<<<<<<<<<<<<<<< "+letterSound.isLoaded());
                console.log('duration in seconds: ' + letterSound.getDuration() +
                    'number of channels: ' + letterSound.getNumberOfChannels());
                        // Play the sound with an onEnd callback        
                        letterSound.play((success) => {
                          if (success) {              
                            console.log('successfully finished playing'+'--->'+data);
                              letterSound.release();
                          } else {
                            console.log('playback failed due to audio decoding errors'+'--->'+data);

                          }
                        });
                  
                  
              }
            });
        
    }

export function getLetterImage(letter_name){
    switch (letter_name) {
            case "alif":
                return require('../../app/images/alif.png');
            case "be":
                return require('../../app/images/be.png');
            case "pe":
                return require('../../app/images/pe.png');                                                                 
            case "te":
                return require('../../app/images/te.png');                                                                     
            case "ṭe":
                return require('../../app/images/ṭe.png');                                                                                                                                          
            default:
                return require('../../app/images/be.png');
        }
    
}