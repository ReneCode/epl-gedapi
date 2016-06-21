module.exports = function() {

//    var serveStatic = require('serve-static');
    var path = require('path');
    var routes = require('./routes');
	var cors = require('cors');

    var express = require('express');
    var app = express();

	app.use(cors());

    app.use(require('./logging'));
    routes(app);

//    app.use(serveStatic(path.join(__dirname, 'public')));

    var http = require('http');
    var server = http.createServer(app);

    return server;
}


