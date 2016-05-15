var mysql = require('mysql');
var Sequelize = require('sequelize');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
// exports.connection = mysql.createConnection(
//   {user: 'root',
//    password: '123',
//    database: 'chat'}
// );

exports.connection = new Sequelize('chat', 'root', '123');

// exports.connection.connect(function(err) {
//   console.log('connected');
// });

exports.Rooms = exports.connection.define('rooms', {
  roomID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  roomName: {
    type: Sequelize.STRING,
    unique: true
  }
});

exports.Users = exports.connection.define('users', {
  userID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  userName: {
    type: Sequelize.STRING,
    unique: true
  }
});

exports.Messages = exports.connection.define('messages', {
  messageID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  messageText: {
    type: Sequelize.STRING,
  },
  messageSentTime: {
    type: Sequelize.DATE
  },
  roomID_Rooms: {
    type: Sequelize.INTEGER,
    references: {
      model: exports.Rooms,
      key: 'roomID'
    }
  },
  userID_Users: {
    type: Sequelize.INTEGER,
    references: {
      model: exports.Users,
      key: 'userID'
    }
  }
});
exports.Users.sync()
  .then(() => exports.Rooms.sync())
  .then(() => exports.Messages.sync());
  // .then(() => {
  //   exports.Messages.belongsTo(exports.Users, {foreignKey: 'userID_Users', target:'userID'});
  //   exports.Messages.belongsTo(exports.Rooms, {foreignKey: 'roomID_Rooms', target:'roomID'});
  //   console.log('####################################################');
  // });
