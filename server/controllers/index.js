var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, result) {
        if (!err) {
          res.responseText(result);
        }
        res.end();
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

// CREATE TABLE rooms (
//  roomID int NOT NULL AUTO_INCREMENT
//  ,roomName varchar(30)
//  ,PRIMARY KEY (roomID)
// );

// CREATE TABLE users (
//  userID int NOT NULL AUTO_INCREMENT
//  ,userName varchar(30)
//  ,PRIMARY KEY (userID)
// );

// CREATE TABLE messages (
//   messageID int NOT NULL AUTO_INCREMENT
//   ,messageText varchar(140)
//   ,messageSentTime TIMESTAMP
//   ,roomID_Rooms int
//   ,userID_Users int
//   ,FOREIGN KEY (roomID_Rooms) REFERENCES rooms(roomID)
//   ,FOREIGN KEY (userID_Users) REFERENCES users(userID)
//   ,PRIMARY KEY (messageID)
// );
