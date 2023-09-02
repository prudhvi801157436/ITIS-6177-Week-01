const express = require('express');

const app = express();
let port = 3000;
let host = 'localhost';

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, host, () => {
    console.log(`Server is running on ${host}:${port}`);
    console.log("Hello World!");
});