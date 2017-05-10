import React, { Component } from 'react'; 
import { View, Text, Navigator,TouchableHighlight } from 'react-native';
import { default as Sound } from 'react-native-sound';
var gSoundInstance;


export function randomLetters(data,selLetter){
    var tmpArray = [];
    var tmpLetters = data;
    
    var matchingLetters = new Set(['ze','zwad','zoey','zal']); //create set of matching letters
    if (matchingLetters.has(selLetter.name)) { //check if letter exist in the set
        matchingLetters.delete(selLetter.name) //if letter exist remove it from set so that we do not accedentally remove it from whole set
        tmpLetters = tmpLetters.filter(obj => !matchingLetters.has(obj.name));
    }

    var matchingLetters = new Set(['bariha','chotihe']); //create set of matching letters
    if (matchingLetters.has(selLetter.name)) { //check if letter exist in the set
        matchingLetters.delete(selLetter.name) //if letter exist remove it from set so that we do not accedentally remove it from whole set
        tmpLetters = tmpLetters.filter(obj => !matchingLetters.has(obj.name));
    }

    var matchingLetters = new Set(['bariye','chotiye']); //create set of matching letters
    if (matchingLetters.has(selLetter.name)) { //check if letter exist in the set
        matchingLetters.delete(selLetter.name) //if letter exist remove it from set so that we do not accedentally remove it from whole set
        tmpLetters = tmpLetters.filter(obj => !matchingLetters.has(obj.name));
    }

    var matchingLetters = new Set(['qaf','kaf']); //create set of matching letters
    if (matchingLetters.has(selLetter.name)) { //check if letter exist in the set
        matchingLetters.delete(selLetter.name) //if letter exist remove it from set so that we do not accedentally remove it from whole set
        tmpLetters = tmpLetters.filter(obj => !matchingLetters.has(obj.name));
    }

    var matchingLetters = new Set(['te','toey']); //create set of matching letters
    if (matchingLetters.has(selLetter.name)) { //check if letter exist in the set
        matchingLetters.delete(selLetter.name) //if letter exist remove it from set so that we do not accedentally remove it from whole set
        tmpLetters = tmpLetters.filter(obj => !matchingLetters.has(obj.name));
    }

    var matchingLetters = new Set(['se','sin','swad']); //create set of matching letters
    if (matchingLetters.has(selLetter.name)) { //check if letter exist in the set
        matchingLetters.delete(selLetter.name) //if letter exist remove it from set so that we do not accedentally remove it from whole set
        tmpLetters = tmpLetters.filter(obj => !matchingLetters.has(obj.name));
    }

    //remove selected letter
    var toDelete = new Set([selLetter.name]);
        tmpLetters = tmpLetters.filter(obj => !toDelete.has(obj.name));
    tmpArray.push(selLetter);
    
    //matching set
    
    // console.log('>>>>>>@@>>>>>>>>>>'+JSON.stringify(tmpLetters))

    var letter1 = tmpLetters[Math.floor(Math.random()*tmpLetters.length)];
     tmpArray.push(letter1);
    
    //deleting obj from the tmpLetters array
    var toDelete = new Set([letter1.name]);
        tmpLetters = tmpLetters.filter(obj => !toDelete.has(obj.name));
    
    var letter2 = tmpLetters[Math.floor(Math.random()*tmpLetters.length)];
      tmpArray.push(letter2);
    
     //deleting obj from the tmpLetters array
    var toDelete = new Set([letter2.name]);
        tmpLetters = tmpLetters.filter(obj => !toDelete.has(obj.name));
    
    var letter3 = tmpLetters[Math.floor(Math.random()*tmpLetters.length)];
      tmpArray.push(letter3);
    
     //deleting obj from the tmpLetters array
    var toDelete = new Set([letter3.name]);
        tmpLetters = tmpLetters.filter(obj => !toDelete.has(obj.name));
    
    return tmpArray;
    
}

export function shuffle(obj){ 
    for(var j, x, i = obj.length; i; j = Math.floor(Math.random() * i), x = obj[--i], obj[i] = obj[j], obj[j] = x);
    return obj;
};



 export function playSelectedLetter(data){        
        var letterSound = new Sound(data+'.mp3', Sound.MAIN_BUNDLE, (error) => {
              if (error) {                  
                console.log('failed to load the sound', error);
              } else { // loaded successfully
                gSoundInstance = letterSound
                  console.log("<<<<<<<<<<<<<<<<< "+letterSound.isLoaded());
                console.log('duration in seconds: ' + letterSound.getDuration() +
                    'number of channels: ' + letterSound.getNumberOfChannels());
                        // Play the sound with an onEnd callback        
                        gSoundInstance.stop();
                        letterSound.setVolume(1)
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
            case "taa":
                return require('../../app/images/taa.png');   
            case "se":
                return require('../../app/images/se.png');
            case "jim":
                return require('../../app/images/jim.png');
            case "chim":
                return require('../../app/images/chim.png');
            case "bariha":
                return require('../../app/images/bariha.png');
            case "kha":
                return require('../../app/images/kha.png');
            case "dal":
                return require('../../app/images/dal.png');
            case "dall":
                return require('../../app/images/dall.png');
            case "zal":
                return require('../../app/images/zal.png');
            case "re":
                return require('../../app/images/re.png');
            case "rre":
                return require('../../app/images/rre.png');
            case "ze":
                return require('../../app/images/ze.png');
            case "zhe":
                return require('../../app/images/zhe.png');
            case "sin":
                return require('../../app/images/sin.png');
            case "shin":
                return require('../../app/images/shin.png');
            case "swad":
                return require('../../app/images/swad.png');
            case "zwad":
                return require('../../app/images/zwad.png');
            case "toey":
                return require('../../app/images/toey.png');
            case "zoey":
                return require('../../app/images/zoey.png');
            case "ain":
                return require('../../app/images/ain.png');
            case "ghain":
                return require('../../app/images/ghain.png');
            case "fe":
                return require('../../app/images/fe.png');
            case "qaf":
                return require('../../app/images/qaf.png');
            case "kaf":
                return require('../../app/images/kaf.png');
            case "gaf":
                return require('../../app/images/gaf.png');
            case "lam":
                return require('../../app/images/lam.png');
            case "mim":
                return require('../../app/images/mim.png');
            case "nun":
                return require('../../app/images/nun.png');
            case "chotihe":
                return require('../../app/images/chotihe.png');
            case "wao":
                return require('../../app/images/wao.png');
            case "chotiye":
                return require('../../app/images/chotiye.png');
            case "bariye":
                return require('../../app/images/bariye.png');                                                                                                               
            default:
                return require('../../app/images/be.png');
        }
    
}