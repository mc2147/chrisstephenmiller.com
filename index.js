const express = require('express')
const app = express();

const morgan = require('morgan')
app.use(morgan('dev'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/index', (req,res,next) => {
    res.sendFile('index.html', {root: __dirname})
})

app.get('/music', (req,res,next) => {
    res.sendFile('music.html', {root: __dirname})
})

app.listen(3000, function () {
    console.log('Server is listening on port 3000!');
});