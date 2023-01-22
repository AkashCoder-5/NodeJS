var Express = require('express');
var express = new Express();
express.get('/', (req, res) => {
    res.send('hello express');
    res.end();
});

express.listen(2000);
