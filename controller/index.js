
module.exports = function(app) {
	require("./testTemplateController.js")(app);
	require("./applicationController.js")(app);
};