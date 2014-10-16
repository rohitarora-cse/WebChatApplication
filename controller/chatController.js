//var testTemplateService = require("../service/testTemplateService.js");
var HashMap = require('hashmap').HashMap;

module.exports = function(app) {
	var socketManager = app.socketManager;
	socketManager.userToSocketMap = new HashMap();
	
	socketManager.on('connection',function(socket)
			{
				console.log('user connected');
				socket.on('bindUserToSocket',function(msg){
					socketManager.userToSocketMap.set(msg, socket);
				});
				socket.on('message',function(msgObject){
					userSocket = socketManager.userToSocketMap.get(msgObject.forUser);
					if(userSocket != null)
						userSocket.emit('message',{fromUser : msgObject.fromUser, msg : msgObject.msg});
				});
				socket.on('disconnect',function(socket)
						{
					console.log('user disconnected');
				});
			});
};