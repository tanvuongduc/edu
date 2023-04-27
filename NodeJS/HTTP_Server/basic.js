// const express = require('express');
// const app = express();
// const mongodb = require("mongodb");

// app.use(express.json());
// const url = "mongodb://127.0.0.1:27017";
// const client = new mongodb.MongoClient(url);
// client.connect((err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
    
//     console.log('Kết nối thành công đến MongoDB!');
    
//     // tiếp tục thực hiện các lệnh truy vấn hoặc thao tác với database ở đây
//   });

// app.get('/api/user', (req,res) => {
//     const user = client.db("BuildingManager").collection("building").find().toArray();
//     res.status(200).send({ message: "Success", data: user });
// })

// app.get('/hello', (req, res) => {
//     res.end('hello');
// });

// app.get('/hello/:name', (req, res) => {
//     console.log('aaaaaaaaaaaaaaaaaa', req.method, req.url);
//     res.end(`hello ${req.params.name}`);
// });

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

// app.listen(3000);

const express = require("express");
const mongodb = require("mongodb");

async function main() {
  const app = express();
  app.use(express.json());
  const url = "mongodb://127.0.0.1:27017";
  const client = new mongodb.MongoClient(url);
  await client.connect();
  console.log("connected");

  app.get("/api/user", async (req, res) => {
    const user = await client.db("BuildingManager").collection("building").find().toArray();
    res.status(200).send({ message: "Success", data: user });
  });

  app.get("/api/user/:id", async (req, res) => {
    const id = +req.params.id;
    const user = await client
      .db("BuildingManager")
      .collection("building")
      .find({ id })
      .toArray();
    res.status(200).send({ message: "Success", data: user });
  });

  app.post("/api/user/", async (req, res) => {
    let id = Math.ceil((Math.random()) *10000);
    const add = {
        id,
        name: req.body.name,
        gender: req.body.gender,
        roleId: req.body.roleId
    };
    const newUser = await client.db("BuildingManager")
    .collection("building")
    .insertOne( add );
    res.status(200).send({ message: "Success", data: newUser });
  });

  app.put("/api/user/:id", async (req, res) => {
    const updated = await client
      .db("BuildingManager")
      .collection("building")
      .findOneAndReplace({ id: +req.params.id }, req.body);
    res.status(200).send({ message: "Success" ,data: updated});
  });

  app.patch("/api/user/:id", async (req, res) => {
    const updated = await client
      .db("BuildingManager")
      .collection("building")
      .findOneAndUpdate({ id: +req.params.id }, { $set: req.body });
    res.status(200).send({ message: "Success",data: updated });
  });

  app.delete("/api/user/:name", async (req, res) => {
    const removed = await client
      .db("BuildingManager")
      .collection("building")
      .findOneAndDelete({ name: req.params.name });
    res.status(200).send({ message: "Success" });
  });
  app.listen(3001, "0.0.0.0", (arguments) => {
    console.log(arguments);
  });
  console.log("local server: http://localhost:3001");

  app.delete("/api/user/:id", async (req, res) => {
    console.log("11111111111111111", req.query);
    console.log("222222222222222", req.params);
    console.log("333333333333333", req.body);
    // let query = req.query;
    // let data = getClinicInfo(query.field);
    const removed = await client
      .db("BuildingManager")
      .collection("building")
      .findOneAndDelete({ id: +req.params.id });
    console.log("aaaaaaaaaaaaaaaaaaaa", removed);
    res.status(200).send({ message: "Success" });
  });
  app.listen(3001);
  console.log("local server: http://localhost:3001");
}

main();
