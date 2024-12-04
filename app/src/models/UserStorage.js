"use strict";

const fs = require("fs").promises;

class UserStorage {
  static getUsers(...fields) {
    //const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
    })
    .catch(console.error);
  }

  static save(userInfo) {
    //const users = this.#users;
    users.id.push(userInfo.id);
    users.password.push(userInfo.password);
    users.name.push(userInfo.name);
    return { success: true };
  }

  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
            const idx = users.id.indexOf(id); // => 0
            const usersKeys = Object.keys(users); // => [id, password, name]
            const userInfo = usersKeys.reduce((newUsers, info) => {
                newUsers[info] = users[info][idx];
                return newUsers; // => oksktmddjs, gudwns11, 이승언
    }, {});

      return userInfo;
  }
}

module.exports = UserStorage;
