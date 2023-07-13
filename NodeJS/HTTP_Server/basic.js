const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const app = express();

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "admin";

// Use connect method to connect to the server
client
  .connect()
  .then(() => {
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const Users_Collection = db.collection("users");
    const Devices_Collection = db.collection("Devices");
    const Types_Collection = db.collection("DeviceTypes");
    const Status_Collection = db.collection("DeviceStatuses");
    const Roles_Collection = db.collection("Roles");
    const Tokens_Collection = db.collection("Tokens");

    // the following code examples can be pasted here...

    app.use(express.json());
    app.use(cors());
    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
    app.use((req, res, next) => {
      console.log("Time:", Date.now());
      // console.log('aaaaaaaaaaaaaaa', req.method);
      next();
    });

    ////GET

    app.get("/hello", checkToken, (req, res, next) => {
      res.end("hello");
    });

    app.get("/users", (req, res) => {
      Users_Collection.find()
        .toArray()
        .then((_users) => {
          console.log("aaaaaaaaaaaaaaa", _users);
          res.status(200).send(_users);
        });
    });

    app.get("/devices", (req, res) => {
      Devices_Collection.find()
        .toArray()
        .then((_devices) => {
          console.log("aaaaaaaaaaaaaaa", _devices);
          res.status(200).send(_devices);
        });
    });

    app.get("/deviceTypes", (req, res) => {
      Types_Collection.find()
        .toArray()
        .then((_types) => {
          console.log("aaaaaaaaaaaaaaa", _types);
          res.status(200).send(_types);
        });
    });

    app.get("/deviceStatus", (req, res) => {
      console.log(res.body);
      Status_Collection.find()
        .toArray()
        .then((_status) => {
          console.log("aaaaaaaaaaaaaaa", _status);
          res.status(200).send(_status);
        });
    });

    app.get("/users/:id", (req, res) => {
      let id = req.params.id;
      id = +id;
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      Users_Collection.findOne({ id }).then((_user) => {
        res.status(200).send(_user);
      });
    });

    app.get("/devices/:id", (req, res) => {
      let id = req.params.id;
      id = +id;
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      Devices_Collection.findOne({ id }).then((_devices) => {
        res.status(200).send(_devices);
      });
    });

    app.get("/deviceTypes/:id", (req, res) => {
      let id = req.params.id;
      id = +id;
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      Types_Collection.findOne({ id }).then((_types) => {
        res.status(200).send(_types);
      });
    });

    app.get("/deviceStatus/:id", (req, res) => {
      let id = req.params.id;
      id = +id;
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      Status_Collection.findOne({ id }).then((_status) => {
        res.status(200).send(_status);
      });
    });

    //// POST

    app.post("/users", checkToken, async (req, res) => {
      // todo: checktoken
      // console.log('aaaaaaaaaaaaaaaaa', req.headers.token);

      console.log(req.body);
      let id = Math.ceil(Math.random() * 1000);
      let user = {
        id,
        name: req.body.name,
        gender: req.body.gender,
        roleId: req.body.roleId,
        userName: req.body.userName,
        password: req.body.password,
      };
      const result = await Users_Collection.insertOne(user);
      if (result.acknowledged) return res.status(200).send(true);
      else return res.status(500).send("Internal server error");
    });

    app.post("/devices", checkToken, async (req, res) => {
      console.log(req.body);
      let id = Math.ceil(Math.random() * 1000);
      let device = {
        id,
        name: req.body.name,
        description: req.body.description,
        deviceType: req.body.deviceType,
        status: req.body.status,
        owner: req.body.owner,
        // userName: req.body.userName,
        // password: req.body.password,
      };
      const result = await Devices_Collection.insertOne(device);
      if (result.acknowledged) return res.status(200).send(true);
      else return res.status(500).send("Internal server error");
    });

    app.post("/deviceTypes", checkToken, async (req, res) => {
      console.log(req.body);
      let id = Math.ceil(Math.random() * 1000);
      let deviceType = {
        id,
        name: req.body.name,
        description: req.body.description,
      };

      const result = await Types_Collection.insertOne(deviceType);
      if (result.acknowledged) {
        return res.status(200).send(true);
      } else {
        return res.status(500).send("Internal server error");
      }
    });

    app.post("/deviceStatus", checkToken, async (req, res) => {
      console.log(req.body);
      let id = Math.ceil(Math.random() * 1000);
      let deviceStatus = {
        id,
        name: req.body.name,
      };

      const result = await Status_Collection.insertOne(deviceStatus);
      if (result.acknowledged) {
        return res.status(200).send(true);
      } else {
        return res.status(500).send("Internal server error");
      }
    });

    //// PATCH

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

    app.patch("/devices/:id", async (req, res) => {
      console.log(req.body);
      console.log("11111111111", req.params.id);
      let id = req.params.id;
      id = +id;
      console.log("33333333333333", id);
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      Devices_Collection.findOne({ id: id }).then((deviceInst) => {
        deviceInst.name = req.body.name;
        deviceInst.description = req.body.description;
        deviceInst.deviceType = req.body.deviceType;
        deviceInst.status = req.body.status;
        deviceInst.owner = req.body.owner;
        Devices_Collection.updateOne({ id }, { $set: deviceInst }).then(
          (_res) => {
            console.log("22222222222222222", deviceInst);
            res.status(200).send();
          }
        );
      });
    });

    ////PUT

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

    app.put("/devices/:id", async (req, res) => {
      console.log(req.body);
      console.log("11111111111", req.params.id);
      let id = req.params.id;
      id = +id;
      console.log("33333333333333", id);
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      Devices_Collection.findOne({ id: id }).then((deviceInst) => {
        deviceInst.name = req.body.name || deviceInst.name;
        deviceInst.description = req.body.description || deviceInst.description;
        deviceInst.deviceType = req.body.deviceType || deviceInst.deviceType;
        deviceInst.status = req.body.status || deviceInst.status;
        deviceInst.owner = req.body.owner || deviceInst.owner;
        Devices_Collection.updateOne({ id }, { $set: deviceInst }).then(
          (_res) => {
            console.log("22222222222222222", deviceInst);
            res.status(200).send();
          }
        );
      });
    });


    app.put("/deviceTypes/:id", checkToken, async (req, res) => {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).send("Id must be a number");
      }

      const { name, description, statuses } = req.body;

      // Find the device type by ID
      Types_Collection.findOne({ id })
        .then((deviceType) => {
          if (!deviceType) {
            return res.status(404).send("Device type not found");
          }

          // Update the device type fields if provided in the request body
          if (name) {
            deviceType.name = name;
          }
          if (description) {
            deviceType.description = description;
          }
          if (statuses) {
            deviceType.statuses = statuses;
          }

          // Update the device type in the database
          Types_Collection.updateOne({ id }, { $set: deviceType })
            .then(() => {
              res.status(200).send("Device type updated successfully");
            })
            .catch((error) => {
              console.error("Error updating device type:", error);
              res.status(500).send("Internal server error");
            });
        })
        .catch((error) => {
          console.error("Error finding device type:", error);
          res.status(500).send("Internal server error");
        });
    });

    ////DELETE

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

    app.delete("/devices/:id", async (req, res) => {
      let id = req.params.id;
      id = +id;
      console.log("33333333333333", id);
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      Devices_Collection.deleteOne({ id: id }).then((_res) => {
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

    app.delete("/deviceTypes/:id", async (req, res) => {
      let id = req.params.id;
      id = +id;
      console.log("33333333333333", id);
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      Types_Collection.deleteOne({ id: id }).then((_res) => {
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

    app.delete("/deviceStatus/:id", async (req, res) => {
      let id = req.params.id;
      id = +id;
      console.log("33333333333333", id);
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      Status_Collection.deleteOne({ id: id }).then((_res) => {
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

    async function checkToken(req, res, next) {
      let token = req.headers.token;
      let _res = await Tokens_Collection.findOne({ token });

      if (!_res) return res.status(401).send();
      next();
    }

    app.get("/roles", (req, res) => {
      Roles_Collection.find()
        .toArray()
        .then((_roles) => {
          setTimeout(() => {
            res.status(200).send(_roles);
          }, 5000);
        });
    });
  })
  .catch((err) => {
    console.log("Connect to db got error: ", err);
  });

function randomString() {
  return Math.random().toString(360).substr(3, 6);
}

app.listen(3001);
