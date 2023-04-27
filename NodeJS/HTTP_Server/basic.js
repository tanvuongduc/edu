const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

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
        Users_Collection.find().toArray().then(_users => {
            console.log('aaaaaaaaaaaaaaa', _users);
            res.status(200).send(_users);
        });
    })

    app.post('/users', async (req, res) => {
        console.log(req.body);
        let id = Math.ceil((Math.random() * 1000))
        let user = {
            id,
            name: req.body.name,
            gender: req.body.gender,
            roleId: req.body.roleId,
        };
        const result = await Users_Collection.insertOne(user);
        console.log('aaaaaaaaaaaaaaaaa', result);
        if (result.acknowledged)
            return res.status(200).send();
        else return res.status(500).send("Internal server error");
    })

    app.patch('/users/:id', async (req, res) => {
        console.log(req.body);
        console.log('11111111111', req.params.id)
        let id = req.params.id;
        id = +id;
        console.log('33333333333333', id);
        if (isNaN(id)) {
            return res.status(400).send("Id must be number");
        }
        Users_Collection.findOne({ id: id }).then(userInst => {
            userInst.name = req.body.name;
            userInst.gender = req.body.gender;
            userInst.roleId = req.body.roleId;
            Users_Collection.updateOne({ id }, { $set: userInst }).then(_res => {
                console.log('22222222222222222', userInst);
                res.status(200).send();
            })
        })
    })

    app.put('/users/:id', async (req, res) => {
        console.log(req.body);
        console.log('11111111111', req.params.id)
        let id = req.params.id;
        id = +id;
        console.log('33333333333333', id);
        if (isNaN(id)) {
            return res.status(400).send("Id must be number");
        }
        Users_Collection.findOne({ id: id }).then(userInst => {
            userInst.name = req.body.name || userInst.name;
            userInst.gender = req.body.gender || userInst.gender;
            userInst.roleId = req.body.roleId || userInst.roleId;
            Users_Collection.updateOne({ id }, { $set: userInst }).then(_res => {
                console.log('22222222222222222', userInst);
                res.status(200).send();
            })
        })
    })

    app.delete('/users/:id', async (req, res) => {
        let id = req.params.id;
        id = +id;
        console.log('33333333333333', id);
        if (isNaN(id)) {
            return res.status(400).send("Id must be number");
        }
        Users_Collection.deleteOne({ id: id }).then(_res => {
            console.log('22222222222222222', _res);
            if (_res.acknowledged) {
                if (_res.deletedCount == 1) {
                    return res.status(200).send('Delete successfuly');
                }
                if(_res.deletedCount == 0) {
                    return res.status(400).send('Cannot find the given id');
                }
            } else {
                return res.status(500).send("Internal server error");
            }

        })
    })



    app.get('/hello/:name', (req, res) => {
        console.log('aaaaaaaaaaaaaaaaaa', req.method, req.url);
        res.end(`hello ${req.params.name}`);
    });

}).catch(err => {
    console.log('Connect to db got error: ', err);
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
