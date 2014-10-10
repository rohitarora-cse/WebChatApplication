var HashMap = require('hashmap').HashMap;

var userMap = new HashMap();
userMap.set('rohit','1234');
userMap.set('aplesh','1234');
userMap.set('harish','1234');
/*{
	'rohit' : '1234',
	'aplesh' : '1234',
	'harish' : '1234',
	'mukesh' : '1234',
	'daljeet' : '1234'
};*/

exports.isValidUser = function(user, password) {
	//var savedPassword = userMap[user];
	var savedPassword = userMap.get(user);
	if (savedPassword === null){
		return false;
	}
	if (savedPassword !== password){
		return false;
	}
	return true;
};

exports.getOtherUsers = function(user) {
	var usernameArray = userMap.keys();
	usernameArray.splice(usernameArray.indexOf(user),1);
	return usernameArray;
};