var express = require('express');
var app = express();
var http = require('http').createServer(app);
var socketManager = require('socket.io')(http);
var options = {root: __dirname};
var bodyParser = require('body-parser');

app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', require('jade').__express);

//app.use( bodyParser.json());
app.use( bodyParser.urlencoded());

app.get('/',function(req,res)
{
	//res.sendFile('home.html',options);
	res.render('chat',{title : 'Home',message : 'Hurray !'});
});

app.post('/startChat',function(req,res)
{
	console.log(req.body.username);
	console.log(req.body.password);
	res.render('chat', {});
});

socketManager.on('connection',function(socket)
		{
			console.log('user connected');
			socket.on('message',function(msg){
				socketManager.emit('message', msg);
			});
			socket.on('disconnect',function(socket)
					{
				console.log('user disconnected');
			});
		});

http.listen(8080);
console.log('server running');