CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
 roomID int NOT NULL AUTO_INCREMENT
 ,roomName varchar(30)
 ,PRIMARY KEY (roomID)
 ,UNIQUE (roomName)
);

CREATE TABLE users (
 userID int NOT NULL AUTO_INCREMENT
 ,userName varchar(30)
 ,PRIMARY KEY (userID)
 ,UNIQUE (userName)
);

CREATE TABLE messages (
  messageID int NOT NULL AUTO_INCREMENT
  ,messageText varchar(140)
  ,messageSentTime TIMESTAMP
  ,roomID_Rooms int
  ,userID_Users int
  ,FOREIGN KEY (roomID_Rooms) REFERENCES rooms(roomID)
  ,FOREIGN KEY (userID_Users) REFERENCES users(userID)
  ,PRIMARY KEY (messageID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < /Users/student/Desktop/2016-04-databases/server/schema.sql
 *  to create the database and the tables.*/

