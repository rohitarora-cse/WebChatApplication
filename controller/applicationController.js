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
			res.render('chat', {
				users : userService.getOtherUsers(req.body.username)
			});
		}
 		else {
			res.redirect('/');
		}
	});
};