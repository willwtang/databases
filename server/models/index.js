var db = require('../db');
var Promise = require('bluebird');  
module.exports = {
  messages: {
    get: function (callback) {
      var mysqlQueryString = 'SELECT users.userName, messages.messageText, messages.messageSentTime, rooms.roomName FROM messages INNER JOIN users ON messages.userID_Users = users.userID INNER JOIN rooms ON messages.roomID_Rooms = rooms.roomID';
      var mysqlQueryString = 'SELECT messages.messageText FROM messages';
      db.connection.query({sql: mysqlQueryString, timeout: 40000}, function(err, result, field) {
        if (err) {
          callback(err);
        } else {
          console.log(result);
          callback(null, result);
        }
      });
    }, // a function which produces all the messages
    post: function (body, callback) {
      var userName = body.username;
      var message = body.message;
      var roomname = body.roomname;
      var roomIDInsert = 'INSERT IGNORE INTO rooms (roomName) VALUES ("' + roomname + '")';
      var getUserNameID = 'SELECT userID FROM users WHERE users.userName = "' + userName + '"';
      var getRoomID = 'SELECT roomID FROM rooms WHERE rooms.roomName = "' + roomname + '"';
      var messageInsert = 'INSERT INTO messages (messageText, roomID_Rooms, userID_Users) VALUES ("';
      db.connection.query({sql: roomIDInsert, timeout: 40000}, (err, result, field) => {
        db.connection.query({sql: getUserNameID, timeout: 40000}, (err, userID, field) => {
          db.connection.query({sql: getRoomID, timeout: 40000}, (err, roomID, field) => {
            messageInsert += message + '", ' + roomID[0].roomID + ', ' + userID[0].userID + ')';
            db.connection.query({sql: messageInsert, timeout: 40000}, (err, result, field) => {
              callback(err, result, field);
            });
          });
        });
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {},
    post: function (body, callback) {
      var userNameInsert = 'INSERT IGNORE INTO users (users.userName) VALUES ("' + body.username + '")';
      console.log(userNameInsert);
      db.connection.query({sql: userNameInsert, timeout: 40000}, (err, result) => {
        callback(err, result);
      });

    }
  }
};

