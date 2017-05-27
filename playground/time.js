var moment = require('moment');
// Jan 1st 1970 00:00:00


// var date = new Date();
// var month = ['Jan','Feb']
// console.log(date.getMonth());

// var date = moment();
// date.add(1,'years').subtract(9,'months')
// console.log(date.format('MMM Do YYYY'));


//10:35 am
//6:01 am

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var createdAt = 1234
var date = moment(createdAt);
console.log(date.format('h:mm a'));
