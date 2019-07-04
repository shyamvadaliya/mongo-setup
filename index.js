const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

// connect mongDB
mongoose.connect('mongodb://localhost/test-dev', {
    useMongoClient: true,
});

// register available mongoose schema
require('./app/modules/common/model');

app.set('port', 1211);
app.set('views', `${__dirname}/app/views`);
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

// Body parser for regular Forms.
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
}));

// Body Parser for JSON
app.use(bodyParser.json({
    limit: '50mb',
}));

app.get('/', function(req, res) {
	res.render('index', {});
});

const server = http.createServer(app);
server.listen(app.get('port'), () => {
	console.log('start port', app.get('port'));
});

// Load dynamic modules
require('./app/modules/common/init').init(app);