const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'User';

// Use connect method to connect to the server
client.connect().then(() => {

    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const Users_Collection = db.collection('user');
    const Roles_Collection = db.collection('Roles');
    const Tokens_Collection = db.collection('Token');

    // the following code examples can be pasted here...

    app.use(express.json())

    // app.get('/hello', (req, res) => {
    //     res.end('hello');
    // });

    app.get('/users', (req, res) => {
        Users_Collection.find().toArray().then(_users => {
            console.log('aaaaaaaaaaaaaaa', _users);
            res.status(200).send(_users);
        });
    })

    app.post('/users', async (req, res) => {
        console.log("ââdsf", req.headers.token);
        let token = req.headers.token;
        Tokens_Collection.findOne({token}).then
        // console.log(req.body);
        // let id = Math.ceil((Math.random() * 1000))
        // let user = {
        //     id,
        //     name: req.body.name,
        //     gender: req.body.gender,
        //     roleId: req.body.roleId,
        //     username: req.body.username,
        //     password: req.body.password,
        // };
        // const result = await Users_Collection.insertOne(user);
        // console.log('aaaaaaaaaaaaaaaaa', result);
        // if (result.acknowledged)
        //     return res.status(200).send();
        // else return res.status(500).send("Internal server error");
    })

    app.patch('/users/:id', async (req, res) => {
        console.log(req.body);
        // console.log('11111111111', req.params.id)
        let id = req.params.id;
        id = +id;
        // console.log('33333333333333', id);
        if (isNaN(id)) {
            return res.status(400).send("Id must be number");
        }
        Users_Collection.findOne({ id: id }).then(userInst => {
            console.log('Old data',userInst);
            if (!userInst) {
                return res.status(404).send("User not found");
            }
            userInst.name = req.body.name || userInst.name;
            userInst.gender = req.body.gender || userInst.gender;
            userInst.roleId = req.body.roleId || userInst.roleId;
            Users_Collection.updateOne({ id }, { $set: userInst }).then(_res => {
                console.log('Success patch to', userInst);
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

    app.post("/login", async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        Users_Collection.findOne({username}).then(userInst => {
            console.log('22222222222222222', userInst);
            if(!userInst)   return res.status(400).send("Id must be number");
            if(userInst.password != password) return res.status(400).send("Password is incorrect");
            let token = randomString();
            Tokens_Collection.insertOne({ userId: userInst.id, token }).then(() => {
                return res.status(200).send({ token });
            })
            res.status(200).send();
        })
    })

}).catch(err => {
    console.log('Connect to db got error: ', err);
});

function randomString() {
    return Math.random().toString(36).substr(3, 6);
}

app.listen(3000);