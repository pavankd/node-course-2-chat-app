const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');

var port = process.env.PORT || 3000;

var app =express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

// io.on('connection',(socket)=>{
//   console.log('New user connected');
//
//   socket.emit('newEmail',{
//     from:'mike@example.com',
//     text:'what is going on',
//     createAt:123
//   });
//
//   socket.on('createEmail',(newEmail)=>{
//     console.log('createEmail',newEmail);
//   });
//
//   socket.on('disconnect',()=>{
//     console.log('User was Disconnected');
//   });
//
// });

io.on('connection',(socket)=>{
  console.log('New User Logged in');

  //emit the new message to client
  socket.emit('newMessage',{
    from:'pavank.d@gmail.com',
    text:'Hi, how r u vamsi',
    createAt: new Date()
  });

//receive the new message from user
  socket.on('createMessage',(newMessage)=>{
    console.log('CreateMessage',newMessage);
  });

  //user disconnected
  socket.on('disconnect',()=>{
    console.log('User was disconnected');
  })
});


server.listen(port,()=>{
  console.log(`Server is up on ${port}`);
})
