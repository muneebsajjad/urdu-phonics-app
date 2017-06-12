import React, { Component } from 'react';
import { View, Text, Navigator,TouchableHighlight } from 'react-native';

module.exports = {
  G_MODEL_VISIBILITY: 0,
  VOLUME_FLAG: 0,
  LISTEN_FLAG: 0,
  G_SOUND_INSTANCE: "",
  STORE_KEY: 'a56z0fzrNpl^2',
  BASE_URL: 'http://104.198.94.126:3000',
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
                        "matching":"N/A",
                        "slide_index":0

                      },{
                        "name": "be",
                        "sound_name": "bay",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":1

                      },{
                        "name": "pe",
                        "sound_name": "pay",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":2

                      },{
                        "name": "te",
                          "sound_name": "tey",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":3

                      },{
                        "name": "taa",
                        "sound_name": "tay",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":4

                      },
                      {
                        "name": "se",
                        "sound_name": "se",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":5

                      },
                      {
                        "name": "jim",
                        "sound_name": "jim",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":6

                      },
                      {
                        "name": "chim",
                        "sound_name": "chim",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":7

                      },
                      {
                        "name": "bariha",
                        "sound_name": "bariha",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":8

                      },
                      {
                        "name": "kha",
                        "sound_name": "kha",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":9

                      },
                      {
                        "name": "dal",
                        "sound_name": "dal",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":10

                      },
                      {
                        "name": "dall",
                        "sound_name": "dall",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":11

                      },
                      {
                        "name": "zal",
                        "sound_name": "zal",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":12

                      },
                      {
                        "name": "re",
                        "sound_name": "re",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":13

                      },
                      {
                        "name": "rre",
                        "sound_name": "rre",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":14

                      },
                      {
                        "name": "ze",
                        "sound_name": "ze",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":15

                      },
                      {
                        "name": "zhe",
                        "sound_name": "zhe",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":16

                      },
                      {
                        "name": "sin",
                        "sound_name": "sin",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":17

                      },
                      {
                        "name": "shin",
                        "sound_name": "shin",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":18

                      },
                      {
                        "name": "swad",
                        "sound_name": "swad",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":19

                      },
                      {
                        "name": "zwad",
                        "sound_name": "zwad",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":20

                      },
                      {
                        "name": "toey",
                        "sound_name": "toey",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":21

                      },
                      {
                        "name": "zoey",
                        "sound_name": "zoey",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":22

                      },
                      {
                        "name": "ain",
                        "sound_name": "ain",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":23

                      },
                      {
                        "name": "ghain",
                        "sound_name": "ghain",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":24

                      },
                      {
                        "name": "fe",
                        "sound_name": "fe",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":25

                      },
                      {
                        "name": "qaf",
                        "sound_name": "qaf",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":26

                      },
                      {
                        "name": "kaf",
                        "sound_name": "kaf",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":27

                      },
                      {
                        "name": "gaf",
                        "sound_name": "gaf",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":28

                      },
                      {
                        "name": "lam",
                        "sound_name": "lam",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":29

                      },
                      {
                        "name": "mim",
                        "sound_name": "mim",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":30

                      },
                      {
                        "name": "nun",
                        "sound_name": "nun",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":31

                      },
                      {
                        "name": "chotihe",
                        "sound_name": "bariha",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":32

                      },
                      {
                        "name": "wao",
                        "sound_name": "wao",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":33

                      },
                      {
                        "name": "chotiye",
                        "sound_name": "chotiye",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":34

                      },
                      {
                        "name": "bariye",
                        "sound_name": "chotiye",
                        "img_other":{
                            img1:"N/A"
                        },
                        "matching":"N/A",
                        "slide_index":35

                      }
                    ],
};




//AppRegistry.registerComponent('UrduLearn', () => LandingPage);
