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

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id); // => 0
        const usersKeys = Object.keys(users); // => [id, password, name]
        const userInfo = usersKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers; // => oksktmddjs, gudwns11, 이승언
        }, {});

        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.password.push(userInfo.password);
        users.name.push(userInfo.name);
        return {success:true};
    }
}

module.exports = UserStorage;