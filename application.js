function timePass(){return null;}
function myFunction() {
    var testVariable,result;
testVariable = undefined;
	result = "";
    if(testVariable === null)
		result += " ===null ";
    if(testVariable == null)
		result += " ==null ";
		
    if(testVariable === undefined)
		result += " ===undefined ";
    if(testVariable == undefined)
		result += " ==undefined ";

    if(testVariable === 'undefined')
		result += " ===\'undefined\' ";
    if(testVariable == 'undefined')
		result += " ==\'undefined\' ";

    if(typeof testVariable === undefined)
		result += " typeof===undefined ";
    if(typeof testVariable == undefined)
		result += " typeof==undefined ";
		
   if(typeof testVariable === 'undefined')
		result += " typeof===\'undefined\' ";
    if(typeof testVariable == 'undefined')
		result += " typeof==\'undefined\' ";
    
    console.log(result);
    console.log(testVariable);
    console.log(typeof testVariable);
    
}

myFunction();
