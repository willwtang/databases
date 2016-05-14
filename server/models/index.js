var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var mysqlQueryString = 'SELECT users.userName, messages.messageText, messages.messageSentTime, rooms.roomName FROM messages INNER JOIN users ON messages.userID_Users = users.userID INNER JOIN rooms ON messages.roomID_Rooms = rooms.roomID';
      db.connection.query({sql: mysqlQueryString, timeout: 40000}, function(err, result, field) {
        if (err) {
          callback(err);
        } else {
          console.log('$$$$$$$', result);
          callback(null, result);
        }
      });
    }, // a function which produces all the messages
    post: function (json, callback) {
      var userName = json.userName;
      var message = json.message;
      var roomname = json.roomname;
      var userNameInsert = 'INSERT IGNORE '
      var roomIDInsert = 'INSERT IGNORE '
      var getUserNameID = ''
      var getRoomID = 'SELECT '
      var messageInsert = ''
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

