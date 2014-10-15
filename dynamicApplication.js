var app = require('express')();
var http = require('http').createServer(app);
var socketManager = require('socket.io')(http);
var exphbs  = require('express-handlebars');
var sessionManager  = require('session-manager').create({engine: 'memory'});

app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', exphbs());
app.use( require('body-parser').urlencoded());
app.sessionManager = sessionManager;
app.socketManager = socketManager;

var controller = require('./controller')(app);

http.listen(8080);
console.log('server running');