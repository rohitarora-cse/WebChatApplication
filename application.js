var app = require('express')();
var http = require('http').createServer(app);

app.get('/',function(req,res)
{
	res.send('Hello World\n');
});
http.listen(8080);
console.log('server running');