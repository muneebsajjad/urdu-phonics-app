import React, { Component } from 'react'; 
import { View, Text, Navigator,TouchableHighlight } from 'react-native';

module.exports = {
  STORE_KEY: 'a56z0fzrNpl^2',
  BASE_URL: 'http://someurl.com',
  SCORE_POINTS: 10,    
  URDU_STRINGS:{
    'very_good':"شاباش",
    'correct_message':"اپ نی درست حرف کا انتخاب کیا"  
  },
  COLOR:[
        "lightblue",
        "lightcoral",
        "lightcyan",
        "lightgoldenrodyellow",
        "lightgray",
        "lightgreen",
        "lightgrey",
        "lightpink",
        "lightsalmon",
        "lightseagreen",
        "lightskyblue",
        "lightslategray",
        "lightslategrey",
        "lightsteelblue",
        "lightyellow",

  ],    
  URDU_ALPHABETS:  [
                      {
                        "name": "alif",
                        "sound_name": "alif",  
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },{
                        "name": "be",
                        "sound_name": "be",  
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },{
                        "name": "pe",
                        "sound_name": "pe",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },{
                        "name": "te",
                          "sound_name": "te",  
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },{
                        "name": "ṭe",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "s̱e",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "jīm",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "cīm",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "baṛīḥa",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "kha",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "dāl",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ḍāl",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ẕāl",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "re",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ṛe",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ze",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "zhe",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "sīn",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "shīn",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ṣwād",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ẓwād",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "t̤oʾe",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "z̤oʾe",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ʿain",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ghain",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "fe",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "qāf",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "kāf",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "gāf",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "lām",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "mīm",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "nūn",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "choṭīhe",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "wāʾo",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "choṭīye",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "baṛīye",
                        "sound_name": "tay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      }
                    ],
};




//AppRegistry.registerComponent('UrduLearn', () => LandingPage);