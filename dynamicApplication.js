var app = require('express')();
var http = require('http').createServer(app);
var socketManager = require('socket.io')(http);
var exphbs  = require('express-handlebars');
var exphbs  = require('express-handlebars');

app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', exphbs());
app.use( require('body-parser').urlencoded());

var controller = require('./controller')(app);

http.listen(8080);
console.log('server running');