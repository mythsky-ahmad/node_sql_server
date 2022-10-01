const express = require('express');
const app = express();
var favicon = require('serve-favicon')
const router = express.Router();
var path = require('path')
var testRouter = require('./routes/web');
var bodyParser = require('body-parser')
const db = require('./db');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.static(__dirname + '/public'));
app.use('/', testRouter);
app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
});


app.listen(5000, () => {
    console.log("server listining on 500 ");
    db.authenticate ();
    console.log("database connicted !!!!")
})

