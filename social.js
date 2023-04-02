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
    let recommended = [];
    let visited = new Set();
    let queue = [userID];
    let currentDegree = 0;
    visited.add(userID);
    while (queue.length > 0 && currentDegree < degrees) {
      let current = queue.shift();
      let currentSet = this.getFollows(current);
      currentSet.forEach((user) => {
        if (!visited.has(user)) {
          visited.add(user);
          queue.push(user);
          recommended.push(user);
        }
      });
      currentDegree++;
    }
    while (queue.length > 0) {
      let current = queue.shift();
      let currentSet = this.getFollows(current);
      currentSet.forEach((user) => {
        if (!visited.has(user)) {
          visited.add(user);
          recommended.push(user);
        }
      });
    }

    return recommended.slice(1);
  }
}
// let socialNetwork = new SocialNetwork();

// let userID1 = socialNetwork.addUser("User 1");
// let userID2 = socialNetwork.addUser("User 2");
// let userID3 = socialNetwork.addUser("User 3");
// let userID4 = socialNetwork.addUser("User 4");
// let userID5 = socialNetwork.addUser("User 5");
// let userID6 = socialNetwork.addUser("User 6");

// socialNetwork.follow(1, 2);
// socialNetwork.follow(2, 3);
// socialNetwork.follow(3, 4);
// socialNetwork.follow(3, 5);
// socialNetwork.follow(4, 1);
// socialNetwork.follow(4, 2);
// socialNetwork.follow(5, 6);

//console.log(socialNetwork.getRecommendedFollows(1, 1))
//console.log(socialNetwork.getRecommendedFollows(1, 2))
//console.log(socialNetwork.getRecommendedFollows(1, 3))
//.to.have.members([3]);
//.to.have.members([3, 4, 5]);
//.to.have.members([3, 4, 5, 6]);

module.exports = SocialNetwork;
