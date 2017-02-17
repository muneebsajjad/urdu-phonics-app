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
            case "s̱e":
                return require('../../app/images/s̱e.png');
            case "jīm":
                return require('../../app/images/jīm.png');
            case "cīm":
                return require('../../app/images/cīm.png');
            case "baṛīḥa":
                return require('../../app/images/baṛīḥa.png');
            case "kha":
                return require('../../app/images/kha.png');
            case "dāl":
                return require('../../app/images/dāl.png');
            case "ḍāl":
                return require('../../app/images/ḍāl.png');
            case "ẕāl":
                return require('../../app/images/ẕāl.png');
            case "re":
                return require('../../app/images/re.png');
            case "ṛe":
                return require('../../app/images/ṛe.png');
            case "ze":
                return require('../../app/images/ze.png');
            case "zhe":
                return require('../../app/images/zhe.png');
            case "sīn":
                return require('../../app/images/sīn.png');
            case "shīn":
                return require('../../app/images/shīn.png');
            case "ṣwād":
                return require('../../app/images/ṣwād.png');
            case "ẓwād":
                return require('../../app/images/ẓwād.png');
            case "t̤oʾe":
                return require('../../app/images/t̤oʾe.png');
            case "z̤oʾe":
                return require('../../app/images/z̤oʾe.png');
            case "ʿain":
                return require('../../app/images/ʿain.png');
            case "ghain":
                return require('../../app/images/ghain.png');
            case "fe":
                return require('../../app/images/fe.png');
            case "qāf":
                return require('../../app/images/qāf.png');
            case "kāf":
                return require('../../app/images/kāf.png');
            case "gāf":
                return require('../../app/images/gāf.png');
            case "lām":
                return require('../../app/images/lām.png');
            case "mīm":
                return require('../../app/images/mīm.png');
            case "nūn":
                return require('../../app/images/nūn.png');
            case "choṭīhe":
                return require('../../app/images/choṭīhe.png');
            case "wāʾo":
                return require('../../app/images/wāʾo.png');
            case "choṭīye":
                return require('../../app/images/choṭīye.png');
            case "baṛīye":
                return require('../../app/images/baṛīye.png');                                                                                                               
            default:
                return require('../../app/images/be.png');
        }
    
}