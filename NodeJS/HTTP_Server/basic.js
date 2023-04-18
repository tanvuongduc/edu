const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

let users = [
    {
        id: 1,
        name: "tan",
        gender: true,
        roleId: 1,
    },
    {
        id: 2,
        name: "phuong",
        gender: false,
        roleId: 2,
    },
    {
        id: 3,
        name: "thanh",
        gender: true,
        roleId: 4,
    },
    {
        id: 4,
        name: "minh",
        gender: true,
        roleId: 5,
    },
];


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'BuildingManagerment';

// Use connect method to connect to the server
client.connect().then(() => {

    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const Users_Collection = db.collection('Users');
    const Roles_Collection = db.collection('Roles');

    // the following code examples can be pasted here...


    app.use(express.json())
    app.get('/hello', (req, res) => {
        res.end('hello');
    });

    app.get('/users', (req, res) => {
        res.status(200).send(users);
    })

    app.post('/users', async (req, res) => {
        console.log(req.body);
        let id = Math.ceil((Math.random()*1000))
        let user = {
            id,
            name: req.body.name,
            gender: req.body.gender,
            roleId: req.body.roleId,
        };
        const _users = await Users_Collection.insertOne(user);
        console.log('aaaaaaaaaaaaaaaaa', _users);
        res.status(200).send(users);
    })



    app.get('/hello/:name', (req, res) => {
        console.log('aaaaaaaaaaaaaaaaaa', req.method, req.url);
        res.end(`hello ${req.params.name}`);
    });

});
// app.use(express.json());
// const users = [
//     { username: "admin", password: "123456" }
// ];
// const all_tokens = {};
// app.post('/login', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     for (const u of users) {
//         if (u.username === username && u.password === password) {
//             const token = Math.random().toFixed(6);
//             all_tokens[token] = u;
//             res.json({ ok: true, token: token });
//             return;
//         }
//     }
//     res.json({ ok: false });
// });

// app.get('/info/:token', (req, res) => {
//     const user = all_tokens[req.params.token];
//     res.json(user);
// });

app.listen(3000);
