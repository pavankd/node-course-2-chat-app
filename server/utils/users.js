


class Users {
  constructor() {
    this.users =[];
  }

  addUser(id,name,room){
    var user = {id,name,room};
    this.users.push(user);
    return user;
  }

  removeUser(id){
    var user = this.getUser(id);

    if(user){
      this.users = this.users.filter((user)=>user.id !== id);
    }
    return user;
    //return user that was removed

  }

  getUser(id){
    return this.users.filter((user)=> user.id === id)[0];
  }
  getUserList(room){
    var users = this.users.filter((user)=>user.room === room);
    var namesArray = users.map((user)=>user.name);
    return namesArray;
  }
}

module.exports ={Users}


// class Person{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
//
//   getUserDescription(){
//     return `${this.name} is ${this.age} years old.`
//   }
// }
//
// var me = new Person('pavan',25);
// var dec = me.getUserDescription();
// console.log(dec);
