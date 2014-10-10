var testTemplateService = require("../service/testTemplateService.js");

module.exports = function(app) {
	app.get('/testTemplate', function(req, res) {
		res.render('testTemplate', {
			title : 'Express Mustache Test',
			data : testTemplateService.getTemplateDisplayData()
		});
	});
};