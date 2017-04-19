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
                        "sound_name": "bay",  
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },{
                        "name": "pe",
                        "sound_name": "pay",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },{
                        "name": "te",
                          "sound_name": "tay",  
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },{
                        "name": "ṭe",
                        "sound_name": "tey",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "s̱e",
                        "sound_name": "sin",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "jīm",
                        "sound_name": "jim",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "cīm",
                        "sound_name": "chim",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "baṛīḥa",
                        "sound_name": "bariha",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "kha",
                        "sound_name": "kha",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "dāl",
                        "sound_name": "dal",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ḍāl",
                        "sound_name": "dall",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ẕāl",
                        "sound_name": "ze",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "re",
                        "sound_name": "re",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ṛe",
                        "sound_name": "rre",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ze",
                        "sound_name": "ze",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "zhe",
                        "sound_name": "zhe",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "sīn",
                        "sound_name": "sin",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "shīn",
                        "sound_name": "shin",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ṣwād",
                        "sound_name": "sin",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ẓwād",
                        "sound_name": "ze",    
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
                        "sound_name": "ze",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ʿain",
                        "sound_name": "ain",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "ghain",
                        "sound_name": "ghain",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "fe",
                        "sound_name": "fe",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "qāf",
                        "sound_name": "qaf",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "kāf",
                        "sound_name": "kaf",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "gāf",
                        "sound_name": "gaf",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "lām",
                        "sound_name": "lam",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "mīm",
                        "sound_name": "mim",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "nūn",
                        "sound_name": "nun",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "choṭīhe",
                        "sound_name": "bariha",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "wāʾo",
                        "sound_name": "wao",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "choṭīye",
                        "sound_name": "chotiye",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      },
                      {
                        "name": "baṛīye",
                        "sound_name": "chotiye",    
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"  
                          
                      }
                    ],
};




//AppRegistry.registerComponent('UrduLearn', () => LandingPage);