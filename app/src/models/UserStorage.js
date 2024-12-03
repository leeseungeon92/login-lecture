"use strict";

class UserStorage {
    static #users = {
        id : ["oksktmddjs", "tmddjs11"],
        password : ["gudwns11", "0119962"],
        name : ["이승언", "나개발"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            } return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;