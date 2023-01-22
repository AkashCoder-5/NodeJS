const { ok } = require('assert');
const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/hello') {
        res.write('This is hello world');
        res.end();
    }

    if (req.url === '/json') {
        result = { firstName: 'pawan', lastName: 'kumar', middleName: 'vishwakarma' };
        res.writeHead(200)
        res.write(JSON.stringify(result));
        res.end();
    }

    res.statusCode = 404;
    res.end();
}).listen(3000);
