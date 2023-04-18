const http = require('http');

const server = http.createServer((req, res) => {
    // xử lý req (request), res (response) ở đây
    console.log(req.method, req.url);
    // res.setHeader('Content-Type', 'text/plan; charset=utf-8');
    if (req.url == '/hello') {
        res.end('hello');
    } else if (req.url == '/xin-chao') {
        res.end('xin-chao')
    } else {
        res.end('ok');
    }
});

server.listen(3000);

