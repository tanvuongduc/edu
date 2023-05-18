const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'BuildingManagerment';

// Use connect method to connect to the server
client.connect().then(() => {

    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const Users_Collection = db.collection('Users');
    const Roles_Collection = db.collection('Roles');
    const Tokens_Collection = db.collection('Tokens');

    // the following code examples can be pasted here...


    app.use(express.json())
    app.use((req, res, next) => {
        console.log('Time:', Date.now())
        // console.log('aaaaaaaaaaaaaaa', req.method);
        if (req.method == 'GET') {
            res.status(400).send('Method not supported');
            return;
        }
        next();
    })

    // app.use('/user/:id', function (req, res, next) {
    //     console.log('Request URL:', req.originalUrl)
    //     next()
    //   }, function (req, res, next) {
    //     console.log('Request Type:', req.method)
    //     next()
    // })
    app.use( async function (req, res, next) {
        console.log('Time:', Date.now());

        let token = req.headers.token;
        let _res = await Tokens_Collection.findOne({ token })

        if (!_res) return res.status(401).send();
        next()
    })
      

    app.get('/users', (req, res) => {
        Users_Collection.find().toArray().then(_users => {
            console.log('aaaaaaaaaaaaaaa', _users);
            res.status(200).send(_users);
        });
    })

    app.post('/users', async (req, res) => {
        // todo: checktoken
        // console.log('aaaaaaaaaaaaaaaaa', req.headers.token);
        let token = req.headers.token;
        let _res = await Tokens_Collection.findOne({ token })

        if (!_res) return res.status(401).send();

        console.log(req.body);
        let id = Math.ceil((Math.random() * 1000))
        let user = {
            id,
            name: req.body.name,
            gender: req.body.gender,
            roleId: req.body.roleId,
            userName: req.body.userName,
            password: req.body.password,
        };
        const result = await Users_Collection.insertOne(user);
        if (result.acknowledged)
            return res.status(200).send(true);
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
                if (_res.deletedCount == 0) {
                    return res.status(400).send('Cannot find the given id');
                }
            } else {
                return res.status(500).send("Internal server error");
            }

        })
    })


    app.post('/login', (req, res) => {
        console.log('11111111111111111111', req.body);
        const userName = req.body.userName;
        const password = req.body.password;
        Users_Collection.findOne({ userName }).then(userInst => {
            console.log('aaaaaaaaaaaaaaaaaa', userInst);
            if (!userInst) return res.status(400).send('Username Not found')
            if (userInst.password != password) return res.status(400).send('Incorrent password')
            let token = randomString();
            Tokens_Collection.insertOne({ userId: userInst.id, token }).then(() => {
                return res.status(200).send({ token });
            })
        })
    });



    app.get('/hello/:name', (req, res) => {
        console.log('aaaaaaaaaaaaaaaaaa', req.method, req.url);
        res.end(`hello ${req.params.name}`);
    });

    function checkToken()

}).catch(err => {
    console.log('Connect to db got error: ', err);
});

function randomString() {
    return Math.random().toString(360).substr(3, 6);
}

app.listen(3000);
