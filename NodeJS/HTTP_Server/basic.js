const express = require("express");
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

app.listen(3000);
