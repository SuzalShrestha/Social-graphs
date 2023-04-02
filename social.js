// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    let user = {};
    user.id = this.currentID + 1;
    this.currentID++; //increment currentID
    user.name = name;
    this.users[user.id] = user; //add user to users
    this.follows[user.id] = new Set(); //follows is a set
    return user.id;
  }

  getUser(userID) {
    // Your code here
    if (this.users[userID]) return this.users[userID];
    return null;
  }

  follow(userID1, userID2) {
    // Your code here
    if (this.users[userID1] && this.users[userID2]) {
      this.follows[userID1].add(userID2);
      return true;
    }
    return false;
  }

  getFollows(userID) {
    // Your code here
    if (this.follows[userID]) return this.follows[userID];
  }

  getFollowers(userID) {
    // Your code here
    let followers = new Set();
    let keys = Object.keys(this.follows);
    for (let i = 0; i < keys.length; i++) {
      let set = this.follows[keys[i]];
      if (set.has(userID)) {
        followers.add(Number(keys[i]));
      }
    }
    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}
let socialNetwork = new SocialNetwork();
let userID1 = socialNetwork.addUser("User 1");
let userID2 = socialNetwork.addUser("User 2");
socialNetwork.follow(userID1, userID2);

console.log(socialNetwork.getFollowers(userID1).size); //0
console.log(socialNetwork.getFollowers(userID2).size); //1

console.log(socialNetwork.getFollowers(userID2));
module.exports = SocialNetwork;
