const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const app = express();
const util = require("./util")

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "BuildingManagerment";

client
  .connect()
  .then(() => {
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const usersCollection = db.collection("Users");
    const rolesCollection = db.collection("Roles");
    const devicesCollection = db.collection("Devices");
    const deviceStatusCollection = db.collection("DeviceStatuses");
    const deviceTypeCollection = db.collection("DeviceTypes");

    app.use(express.json());
    app.use(cors());
    // app.use(function (req, res, next) {
    //   res.headers.set("Access-Control-Allow-Origin", "*");
    //   res.headers.set("Access-Control-Allow-Headers", "");
    // });

    //User API
    app.get("/users", (req, res) => {
      usersCollection
        .find()
        .toArray()
        .then((_users) => {
          console.log("aaaaaaaaaaaaaaa", _users);
          res.status(200).send(_users);
        });
<<<<<<< HEAD
=======
    })

    app.get('/users/:id', (req, res) => {
        let id = req.params.id;
        id = +id;
        if (isNaN(id)) {
            return res.status(400).send("Id must be number");
        }
        Users_Collection.findOne({ id }).then(_user => {
            res.status(200).send(_user);
        });
    })

    app.post('/users', checkToken, async (req, res) => {
        // todo: checktoken
        // console.log('aaaaaaaaaaaaaaaaa', req.headers.token);


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
        Users_Collection.findOne({ name: userName }).then(userInst => {
            console.log('aaaaaaaaaaaaaaaaaa', userInst);
            if (!userInst) return res.status(400).send('Username Not found')
            if (userInst.password != password) return res.status(400).send('Incorrent password')
            let token = randomString();
            Tokens_Collection.insertOne({ userId: userInst.id, token }).then(() => {
                return res.status(200).send({ token });
            })
        })
>>>>>>> 7361ad2375bada2c0d5282f58a4e7272d9e090e9
    });

    app.get("/users/:id", (req, res) => {
      let id = req.params.id;
      id = +id;
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      usersCollection.findOne({ id }).then((_user) => {
        res.status(200).send(_user);
      });
    });

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
      const result = await usersCollection.insertOne(user);
      if (result.acknowledged) return res.status(200).send(true);
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
      usersCollection.findOne({ id: id }).then((userInst) => {
        userInst.name = req.body.name;
        userInst.gender = req.body.gender;
        userInst.roleId = req.body.roleId;
        usersCollection.updateOne({ id }, { $set: userInst }).then((_res) => {
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
      usersCollection.findOne({ id: id }).then((userInst) => {
        userInst.name = req.body.name || userInst.name;
        userInst.gender = req.body.gender || userInst.gender;
        userInst.roleId = req.body.roleId || userInst.roleId;
        usersCollection.updateOne({ id }, { $set: userInst }).then((_res) => {
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
      usersCollection.deleteOne({ id: id }).then((_res) => {
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

    //Roles
    app.get("/roles", (req, res) => {
      rolesCollection
        .find()
        .toArray()
        .then((_roles) => {
          setTimeout(() => {
            res.status(200).send(_roles);
          }, 5000);
        });
    });

    //DeviceStatuses
    app.get("/devicestatuses", (req, res) => {
      deviceStatusCollection
        .find()
        .toArray()
        .then((_deviceStatus) => {
          console.log("aaaaaaaaaaaaaaa", _deviceStatus);
          res.status(200).send(_deviceStatus);
        });
    });

    app.post("/devicestatuses", checkToken, async (req, res) => {
      // todo: checktoken
      // console.log('aaaaaaaaaaaaaaaaa', req.headers.token);

      console.log(req.body);
      let id = Math.ceil(Math.random() * 1000);
      let device = {
        id,
        name: req.body.name,
      };
      const result = await deviceStatusCollection.insertOne(device);
      if (result.acknowledged) return res.status(200).send(true);
      else return res.status(500).send("Internal server error");
    });

    app.delete("/devicestatuses/:id", async (req, res) => {
      let id = req.params.id;
      id = +id;
      console.log("33333333333333", id);
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      deviceStatusCollection.deleteOne({ id: id }).then((_res) => {
        console.log("22222222222222222", _res);
        if (_res.acknowledged) {
          if (_res.deletedCount == 1) {
            return res.status(200).send("Delete successfully");
          }
          if (_res.deletedCount == 0) {
            return res.status(400).send("Cannot find the given id");
          }
        } else {
          return res.status(500).send("Internal server error");
        }
      });
    });

    //DeviceTypes
    app.get("/devicetypes", (req, res) => {
      deviceTypeCollection
        .find()
        .toArray()
        .then((_deviceType) => {
          console.log("aaaaaaaaaaaaaaa", _deviceType);
          res.status(200).send(_deviceType);
        });
    });

    app.get("/devicetypes/:id", (req, res) => {
      let id = req.params.id;
      id = +id;
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      deviceTypeCollection.findOne({ id }).then((_deviceType) => {
        res.status(200).send(_deviceType);
      });
    });

    app.post("/devicetypes", checkToken, async (req, res) => {
      // todo: checktoken
      // console.log('aaaaaaaaaaaaaaaaa', req.headers.token);

      console.log(req.body);
      let statuses = req.body.statuses;
      if (statuses.length <= 0) {
        return res.status(400).send("Statuses must be selected");
      }

      if (util.hasDuplicates(statuses)) {
        return res.status(400).send("Statuses cannot be duplicate");
      }

      const _statuses = await deviceStatusCollection.find({
        id: {
          $in: statuses
        }
      }).toArray();
      if(statuses.length > _statuses.length) {
        return res.status(400).send("Status not existed");
      }


      let id = Math.ceil(Math.random() * 1000);
      let deviceType = {
        id,
        name: req.body.name,
        description: req.body.description,
        statuses: req.body.statuses,
      };
      const result = await deviceTypeCollection.insertOne(deviceType);
      if (result.acknowledged) return res.status(200).send(true);
      else return res.status(500).send("Internal server error");
    });

    app.patch("/devicetypes/:id", async (req, res) => {
      console.log(req.body);
      console.log("11111111111", req.params.id);
      let id = req.params.id;
      id = +id;
      console.log("33333333333333", id);
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      deviceTypeCollection.findOne({ id: id }).then((deviceTypeInst) => {
        deviceTypeInst.name = req.body.name;
        deviceTypeInst.description = req.body.description;
        deviceTypeCollection
          .updateOne({ id }, { $set: deviceTypeInst })
          .then((_res) => {
            console.log("22222222222222222", deviceTypeInst);
            res.status(200).send();
          });
      });
    });

    app.put("/devicetype/:id", async (req, res) => {
      console.log(req.body);
      console.log("11111111111", req.params.id);
      let id = req.params.id;
      id = +id;
      console.log("33333333333333", id);
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      deviceTypeCollection.findOne({ id: id }).then((deviceTypeInst) => {
        deviceTypeInst.name = req.body.name || deviceTypeInst.name;
        deviceTypeInst.description =
          req.body.description || deviceTypeInst.description;
        deviceTypeCollection
          .updateOne({ id }, { $set: deviceTypeInst })
          .then((_res) => {
            console.log("22222222222222222", deviceTypeInst);
            res.status(200).send();
          });
      });
    });

    app.delete("/devicetype/:id", async (req, res) => {
      let id = req.params.id;
      id = +id;
      console.log("33333333333333", id);
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      deviceTypeCollection.deleteOne({ id: id }).then((_res) => {
        console.log("22222222222222222", _res);
        if (_res.acknowledged) {
          if (_res.deletedCount == 1) {
            return res.status(200).send("Delete successfully");
          }
          if (_res.deletedCount == 0) {
            return res.status(400).send("Cannot find the given id");
          }
        } else {
          return res.status(500).send("Internal server error");
        }
      });
    });

    //Device
    app.get("/devices", (req, res) => {
      devicesCollection
        .find()
        .toArray()
        .then((_devices) => {
          console.log("aaaaaaaaaaaaaaa", _devices);
          res.status(200).send(_devices);
        });
    });

    app.get("/devices/:id", (req, res) => {
      let id = req.params.id;
      id = +id;
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      devicesCollection.findOne({ id }).then((_device) => {
        res.status(200).send(_device);
      });
    });

    app.post("/devices", checkToken, async (req, res) => {
      // todo: checktoken
      // console.log('aaaaaaaaaaaaaaaaa', req.headers.token);

      console.log(req.body);
      let id = Math.ceil(Math.random() * 1000);
      let device = {
        id,
        name: req.body.name,
        description: req.body.gender,
        deviceTypeId: req.body.deviceTypeId,
        deviceStatusId: req.body.deviceStatusId,
        deviceTyped: req.body.deviceTyped,
      };
      const result = await devicesCollection.insertOne(device);
      if (result.acknowledged) return res.status(200).send(true);
      else return res.status(500).send("Internal server error");
    });

    app.delete("/devices/:id", async (req, res) => {
      let id = req.params.id;
      id = +id;
      console.log("33333333333333", id);
      if (isNaN(id)) {
        return res.status(400).send("Id must be number");
      }
      devicesCollection.deleteOne({ id: id }).then((_res) => {
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
  })
  .catch((err) => {
    console.log("Connect to db got error: ", err);
  });

function checkToken(req, res, next) {
  next()
}

function randomString() {
<<<<<<< HEAD
  return Math.random().toString(360).substring(3, 6);
=======
    return Math.random().toString(36).substr(3, 6);
>>>>>>> 7361ad2375bada2c0d5282f58a4e7272d9e090e9
}

app.listen(3001);
