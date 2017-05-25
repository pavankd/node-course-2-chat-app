var socket = io();

// socket.on('connect',function(){
//   console.log('connected to server');
//
//   socket.emit('createEmail',{
//     to:'jen@example.com',
//     text:'Hey this is pavan.'
//   });
// });
// socket.on('disconnect',function(){
//   console.log('Disconnected from server');
// })
//
// socket.on('newEmail',function(email){
//   console.log('New Email',email);
// });

socket.on('connect',function(){
  console.log('connected to server');

  socket.emit('createMessage',{
    to:'pavank.d@gmail.com',
    text:'hi pava how r u'
  });
});
socket.on('disconnect',function(){
  console.log('Disconnected from server');
});
socket.on('newMessage',function(message){
  console.log('new Message',message);
})
