var userService = require("../service/userService.js");

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('home');
	});

	app.get('/login', function(req, res) {
		res.render('home');
	});

	app.post('/login', function(req, res) {
		if (userService.isValidUser(req.body.username, req.body.password)) {
			session = app.sessionManager.getSession(req, res);
			session.set('username',req.body.username);
			res.redirect('/chat');
		}
 		else {
			res.redirect('/');
		}
	});
	
	app.get('/logout', function(req, res) {
		app.sessionManager.getSession(req, res,false).destroySession();
		res.redirect('/');
	});

	app.get('/chat', function(req, res) {
		var session = app.sessionManager.getSession(req, res,false);
		if(session === null) {
			res.redirect('/');
		}
		res.render('chat', {currentUser : session.get('username'),
			users : userService.getOtherUsers(session.get('username'))
		});
	});
};