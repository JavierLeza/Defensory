const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');

const port = 3000;

const app = express();

//Set Static Folder
app.use(express.static(path.join(__dirname, 'dist')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(){
    console.log('Server started on port ' + port);
});