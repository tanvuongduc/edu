const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.end('hello');
});

app.get('/hello/:name', (req, res) => {
    console.log('aaaaaaaaaaaaaaaaaa', req.method, req.url);
    res.end(`hello ${req.params.name}`);
});

app.use(express.json());
const users = [
    { username: "admin", password: "123456" }
];
const all_tokens = {};
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    for (const u of users) {
        if (u.username === username && u.password === password) {
            const token = Math.random().toFixed(6);
            all_tokens[token] = u;
            res.json({ ok: true, token: token });
            return;
        }
    }
    res.json({ ok: false });
});

app.get('/info/:token', (req, res) => {
    const user = all_tokens[req.params.token];
    res.json(user);
});

app.listen(3000);
