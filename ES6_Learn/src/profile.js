var firstName='Alex';
var lastName='unknow';
var year=20;

var pf={firstName,lastName,year}

function sayHi(){
	console.log('Hi! module say hi to you!~~~');
}

export {pf as personInfo,sayHi}