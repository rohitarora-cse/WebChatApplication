var app = require('express')();
var http = require('http').createServer(app);
var socketManager = require('socket.io')(http);
var options = {root: __dirname};

app.get('/',function(req,res)
{
	res.sendFile('index.html',options);
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