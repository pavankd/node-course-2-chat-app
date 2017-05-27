const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname,'../public');

var port = process.env.PORT || 3000;

var app =express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('New User Logged in');
  socket.emit('newMessage',generateMessage('Admin',"Welcome to the chat app"));

  socket.broadcast.emit('newMessage',generateMessage('Admin','New User joined'))

  socket.on('createMessage',(message,callback)=>{
    console.log('CreateMessage',message);
    io.emit('newMessage',generateMessage(message.from,message.text));
    callback('this is from the server');

    // socket.broadcast.emit('newMessage',{
    //     from:message.from,
    //     text:message.text,
    //     createdAt:new Date().getTime()
    // })
  });

  //user disconnected
  socket.on('disconnect',()=>{
    console.log('User was disconnected');
  })
});


server.listen(port,()=>{
  console.log(`Server is up on ${port}`);
})
