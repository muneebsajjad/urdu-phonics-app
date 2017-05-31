import React, { Component } from 'react';
import { View, Text, Navigator,TouchableHighlight } from 'react-native';

module.exports = {
  STORE_KEY: 'a56z0fzrNpl^2',
  BASE_URL: 'http://192.168.1.5:3000',
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
        "lightseagreen",
        "lightskyblue",
        "lightslategray",
        "lightyellow",

  ],
  TABLES: {
            GAME_DATA: 'GAME_DATA',
            LETTER_LOGS: 'LETTER_LOGS',
          },
  END_POINTS: [
                {API: 'get_sync_data',TABLE: 'GAME_DATA'},
                {API: 'get_letter_logs',TABLE: 'LETTER_LOGS'}
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
                          "sound_name": "tey",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },{
                        "name": "taa",
                        "sound_name": "tay",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "se",
                        "sound_name": "se",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "jim",
                        "sound_name": "jim",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "chim",
                        "sound_name": "chim",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "bariha",
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
                        "name": "dal",
                        "sound_name": "dal",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "dall",
                        "sound_name": "dall",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "zal",
                        "sound_name": "zal",
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
                        "name": "rre",
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
                        "name": "sin",
                        "sound_name": "sin",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "shin",
                        "sound_name": "shin",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "swad",
                        "sound_name": "swad",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "zwad",
                        "sound_name": "zwad",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "toey",
                        "sound_name": "toey",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "zoey",
                        "sound_name": "zoey",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "ain",
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
                        "name": "qaf",
                        "sound_name": "qaf",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "kaf",
                        "sound_name": "kaf",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "gaf",
                        "sound_name": "gaf",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "lam",
                        "sound_name": "lam",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "mim",
                        "sound_name": "mim",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "nun",
                        "sound_name": "nun",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "chotihe",
                        "sound_name": "bariha",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "wao",
                        "sound_name": "wao",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "chotiye",
                        "sound_name": "chotiye",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      },
                      {
                        "name": "bariye",
                        "sound_name": "chotiye",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A"

                      }
                    ],
};




//AppRegistry.registerComponent('UrduLearn', () => LandingPage);
