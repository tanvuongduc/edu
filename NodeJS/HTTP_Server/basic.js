const express = require("express");
<<<<<<< Updated upstream
const app = express();

const Users = [
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

app.get("/hello", (req, res) => {
  res.end("hello");
});

app.get("/hello/:name", (req, res) => {
  console.log("aaaaaaaaaaaaaaaaaa", req.method, req.url);
  res.end(`hello ${req.params.name}`);
});

app.get("/users", (req, res) => {
  //   console.log("user", req.method, req.url);
  res.status(200).send(Users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  let id = Math.ceil(Math.random() * 1000);
  const newUser = {
    id,
    name: req.body.name,
    gender: req.body.gender,
    roleId: req.body.roleId,
  };
  Users.push(newUser);
  res.status(201).json(newUser);
});

// app.use(express.json());
// const users = [{ username: "admin", password: "123456" }];
// const all_tokens = {};
// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   for (const u of users) {
//     if (u.username === username && u.password === password) {
//       const token = Math.random().toFixed(6);
//       all_tokens[token] = u;
//       res.json({ ok: true, token: token });
//       return;
//     }
//   }
//   res.json({ ok: false });
// });

// app.get("/info/:token", (req, res) => {
//   const user = all_tokens[req.params.token];
//   res.json(user);
// });
=======
const { MongoClient } = require("mongodb");
const app = express();

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "BuildingManagerment"; // BuildingManagerment

// Use connect method to connect to the server
client
  .connect()
  .then(() => {
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const Users_Collection = db.collection("Users");
    const Devices_Collection = db.collection("Devices");
    const Roles_Collection = db.collection("Roles");
    const Tokens_Collection = db.collection("Tokens");

    // the following code examples can be pasted here...


    app.use(express.json())
    app.use(async(req, res, next) => {
      // console.log('Time:', Date.now())
      let token = req.headers.token;
      let _res = await Tokens_Collection.findOne({ token });

      if (!_res) return res.status(401).send();

      next()
    })
    app.get('/hello', (req, res) => {
        res.end('hello');
    });

    app.get("/users", (req, res) => {
      Users_Collection.find()
        .toArray()
        .then((_users) => {
          console.log("aaaaaaaaaaaaaaa", _users);
          res.status(200).send(_users);
        });
    });

    app.post("/users", async (req, res) => {
      // todo: checktoken
      // console.log('aaaaaaaaaaaaaaaaa', req.headers.token);
      let token = req.headers.token;
      let _res = await Tokens_Collection.findOne({ token });

      if (!_res) return res.status(401).send(true);

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
            return res.status(200).send();
        else return res.status(500).send("Internal server error");
      });

    app.patch("/users/:id", async (req, res) => {
      console.log(req.body);
      console.log("11111111111", req.params.id);
      let id = req.params.id;
      id = +id;
      console.log("33333333333333", id);
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      Users_Collection.findOne({ id: id }).then((userInst) => {
        userInst.name = req.body.name;
        userInst.gender = req.body.gender;
        userInst.roleId = req.body.roleId;
        Users_Collection.updateOne({ id }, { $set: userInst }).then((_res) => {
          console.log("22222222222222222", userInst);
          res.status(200).send();
        });
      });
    });

    app.put("/users/:id", async (req, res) => {
      console.log(req.body);
      console.log("11111111111", req.params.id);
      let id = req.params.id;
      id = +id;
      console.log("33333333333333", id);
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      Users_Collection.findOne({ id: id }).then((userInst) => {
        userInst.name = req.body.name || userInst.name;
        userInst.gender = req.body.gender || userInst.gender;
        userInst.roleId = req.body.roleId || userInst.roleId;
        Users_Collection.updateOne({ id }, { $set: userInst }).then((_res) => {
          console.log("22222222222222222", userInst);
          res.status(200).send();
        });
      });
    });

    app.delete("/users/:id", async (req, res) => {
      let id = req.params.id;
      id = +id;
      console.log("33333333333333", id);
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      Users_Collection.deleteOne({ id: id }).then((_res) => {
        console.log("22222222222222222", _res);
        if (_res.acknowledged) {
          if (_res.deletedCount == 1) {
            return res.status(200).send("Delete successfuly");
          }
          if (_res.deletedCount == 0) {
            return res.status(400).send("Cannot find the given id");
          }
        } else {
          return res.status(500).send("Internal server error");
        }
      });
    });

    app.post("/login", (req, res) => {
      console.log("11111111111111111111", req.body);
      const userName = req.body.userName;
      const password = req.body.password;
      Users_Collection.findOne({ userName }).then((userInst) => {
        console.log("aaaaaaaaaaaaaaaaaa", userInst);
        if (!userInst) return res.status(400).send("Username Not found");
        if (userInst.password != password)
          return res.status(400).send("Incorrent password");
        let token = randomString();
        Tokens_Collection.insertOne({ userId: userInst.id, token }).then(() => {
          return res.status(200).send({ token });
        });
      });
    });

    app.get("/hello/:name", (req, res) => {
      console.log("aaaaaaaaaaaaaaaaaa", req.method, req.url);
      res.end(`hello ${req.params.name}`);
    });

  })
  .catch((err) => {
    console.log("Connect to db got error: ", err);
  });

function randomString() {
  return Math.random().toString(360).substr(3, 6);
}
>>>>>>> Stashed changes

app.listen(3000);
