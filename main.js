const express = require("express");

const app = express();


const port = 3000;
const host = "localhost";

const path = require('path');

app.use(express.static('kuvat'));
app.use('/includes',express.static('includes'));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'templates/index.html')));

app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));