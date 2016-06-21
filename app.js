
var server = require('./server');

var port = process.env.PORT || 3010;
server().listen(port, function() {
    console.log("epl-ged - Server listen on port:", port);
});

