import URL from './Constant/user.constant';
import router from './Routes/user.route';


const express = require('express');
const app = express();

app.use(express.json())



const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'User';


// Use connect method to connect to the server
const connectDB = async()=>{
     await client.connect();
}

connectDB();

console.log('Connected successfully to server');
const db = client.db(dbName);
const user_collection = db.collection('user');
const roles_collection = db.collection('Roles');


// the following code examples can be pasted here...

app.use(URL.USER_URL, router)



app.post(URL.USER_URL, async (req, res) => {
    console.log(req.body);
    let user = {
        id,
        name: req.body.name,
        gender: req.body.gender,
        roleId: req.body.roleId,
    };

    // const findResult = await user_collection.find({}).toArray();
    const findResult = await user_collection.insertOne(user);
    console.log(findResult);
    res.status(200).send(user1);
});


app.listen(3000);
