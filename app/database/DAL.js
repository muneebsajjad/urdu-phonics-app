var SQLite = require('react-native-sqlite-storage');
import {NetInfo} from 'react-native';
import Globals from '../../app/global_helpers/Globals';

function errorCB(err) {
  console.log("SQL Error: " + err);
}

function successCB() {
  console.log("SQL executed fine");
}

function openCB() {
  console.log("Database OPENED");
}

var db = SQLite.openDatabase("urdu_phonics.db", "1.0", "uphonics", 200000, openCB, errorCB);
db.transaction(populateDB, errorCB, successCB);

function populateDB(tx) {
     //tx.executeSql('DROP TABLE IF EXISTS GAME_DATA');
    //tx.executeSql('CREATE TABLE IF NOT EXISTS SCOREBOARD (ID INTEGER PRIMARY KEY AUTOINCREMENT,STUDENT_ID INT NOT NULL,SCORE INT NOT NULL)');
    // tx.executeSql('INSERT INTO SCOREBOARD (STUDENT_ID, SCORE) VALUES (90, 900)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS GAME_DATA (ID INTEGER PRIMARY KEY AUTOINCREMENT,SESSION_ID TEXT NOT NULL, DEVICE_ID TEXT NOT NULL,SOUND_PLAYED TEXT NOT NULL,SOUND_SELECTED TEXT NOT NULL,OPTIONS_PRESENTED TEXT NOT NULL,CYCLE_COUNT INT NOT NULL,STATUS INT NOT NULL,TIMESTAMP DEFAULT CURRENT_TIMESTAMP,SCORE INT NOT NULL,LIVES INT NOT NULL)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS LETTER_LOGS (ID INTEGER PRIMARY KEY AUTOINCREMENT,DEVICE_ID TEXT NOT NULL,SOUND_PLAYED TEXT NOT NULL,TIMESTAMP DEFAULT CURRENT_TIMESTAMP)');
}

export function insertData(data,table){
           db.transaction(function (tx) {
          var columns = new Array();
          var values = new Array();
          var valuesQuestionMark = new Array();
          for (var k in data) {
                if (data.hasOwnProperty(k)) {
                  columns.push(k);
                  values.push(data[k]);
                  valuesQuestionMark.push("?");
                }
            }
        var query = "INSERT INTO "+table+" ("+columns.join(',')+") VALUES("+valuesQuestionMark.join(',')+")";
        // console.log(query);

        tx.executeSql(query, values, function(tx, res) {
            console.log("insertId: " + res.insertId + " -- probably 1");
            console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
        },
        function(tx, error) {
             //alert('INSERT error: ' + error.message);
            console.log('INSERT error: ' + error.message);
        });
    }, function(error) {
        console.log('transaction error: ' + error.message);
    }, function() {
        console.log('transaction ok');
    });

}

export function getData() {
        Object.keys(Globals.END_POINTS).forEach(function (key) {
        let obj = Globals.END_POINTS[key];

        db.transaction((tx) => {
            tx.executeSql(`SELECT * FROM ${obj.TABLE}`, [], (tx, results) => {
            console.log("Query completed");

            // Get rows with Web SQL Database spec compliance.
            let len = results.rows.length;
            if (len > 0) {
                let gameLogs = new Array();
                console.log("Query completed>>>>>>>>>" + len);
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                    gameLogs.push(row);
                    //console.log(JSON.stringify(row))
                    // console.log(`ID: ${row.ID},DEVICE_ID: ${row.DEVICE_ID}, SOUND_PLAYED: ${row.SOUND_PLAYED}, SOUND_SELECTED: ${row.SOUND_SELECTED}, TIMESTAMP: ${row.TIMESTAMP}, STATUS: ${row.STATUS}, SCORE: ${row.SCORE}, LIVES: ${row.LIVES}`);
                }

                // NetInfo.fetch().done((reach) => {
                  // console.log('Initial: >>>>>>>>>>>>>>' + reach);
                  //   if (reach != 'NONE') { //check if network is on/off
                        //console.log('Initial: ' + reach);
                        NetInfo.isConnected.fetch().then(isConnected => {   //check if there is network conectivity
                          console.log('First, is ' + (isConnected ? 'online' : 'offline'));
                          //if (isConnected) {
                            fetch(`${Globals.BASE_URL}/users/${obj.API}`, {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(gameLogs)
                                }).then((response) => response.json())
                                .then((responseJson) => {
                                    console.log(JSON.stringify(responseJson.returnIds));
                                    db.transaction((tx) => {
                                        tx.executeSql(`DELETE FROM ${obj.TABLE} WHERE ID IN (${responseJson.returnIds})`, [], (tx, results) => {
                                            console.log("Records deleted successfully");
                                        })
                                    })
                                })
                                .catch((error) => {
                                    console.error(error);
                                });
                            // }else{
                            //     console.log(' Network is offline');
                            // }
                        }).catch(error => {
                          console.error("unable to resolve Network connectivity promise::"+error);
                        });
                //     }else{
                //         console.log('Network is offline');
                //     }
                // });
            } else {
                console.log('No data to sync');
            }
        });
    });

});
}
