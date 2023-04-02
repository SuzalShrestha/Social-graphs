// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    let user={};
    user.id = this.currentID + 1;
    this.currentID++; //increment currentID
    user.name=name;
    this.users[user.id]=user; //add user to users
    this.follows[user.id]=new Set(); //follows is a set
    return user.id;
  }

  getUser(userID) {
    // Your code here
  }

  follow(userID1, userID2) {
    // Your code here
  }

  getFollows(userID) {
    // Your code here
  }

  getFollowers(userID) {
    // Your code here
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;