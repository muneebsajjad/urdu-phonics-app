var SQLite = require('react-native-sqlite-storage');
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
    //tx.executeSql('DROP TABLE IF EXISTS SCOREBOARD');
    tx.executeSql('CREATE TABLE IF NOT EXISTS SCOREBOARD (ID INTEGER PRIMARY KEY AUTOINCREMENT,STUDENT_ID INT NOT NULL,SCORE INT NOT NULL)');
    // tx.executeSql('INSERT INTO SCOREBOARD (STUDENT_ID, SCORE) VALUES (90, 900)');
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
        console.log(query);

        tx.executeSql(query, values, function(tx, res) {
            console.log("insertId: " + res.insertId + " -- probably 1");
            console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
        },
        function(tx, error) {
             alert('INSERT error: ' + error.message);
            console.log('INSERT error: ' + error.message);
        });
    }, function(error) {
        console.log('transaction error: ' + error.message);
    }, function() {
        console.log('transaction ok');
    });
    
}