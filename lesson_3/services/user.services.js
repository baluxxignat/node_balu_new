const fs = require('fs/promises');
const req = require('express/lib/request');
const {pathToDatabase} = require('../config/veriables');

module.exports = {
    readUsersFromDB: async () => {
        const readUsers = await fs.readFile(pathToDatabase, 'utf-8');
        return JSON.parse(readUsers);
    },

    writeUsersToDB: async (newUser) => {
        const readUsers = await fs.readFile(pathToDatabase, 'utf-8');
        users =  JSON.parse(readUsers);
        users.push(newUser)
        fs.writeFile(pathToDatabase, JSON.stringify(users));
    }
};
