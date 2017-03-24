
// var text = prompt('Enter text to be encoded...');
var text = '';

	//	Removes spaces and puncuation
function toNormalize(text) {
	return text.replace(/\W/g,'');
}


	//	Converts to lowercase
function toLower(text) {
	return text.toLowerCase();
}

var text = toLower(toNormalize(text));

	//	Determines number of characters in the normalized string	
function toCount(text) {
	return text.length;
}

var charCount = toCount(text);

var squareNum = Math.ceil(Math.sqrt(charCount));


var column1 = [];	var column2 = [];	var column3 = [];
var column4 = [];	var column5 = [];	var column6 = [];
var column7 = [];	var column8 = [];	var column9 = [];
var column10 = [];	var column11 = [];	var column12 = [];
var column13 = [];	var column14 = [];	var column15 = [];
var column16 = [];	var column17 = [];	var column18 = [];
var column19 = [];	var column20 = [];	var column21 = [];

function splitString(text) {
	for (var i = 0; i < text.length; i++) {
		if (i % squareNum === 0) {
			column1.push(text[i]);
		} else if (i % squareNum === 1) {
			column2.push(text[i]);
		} else if (i % squareNum === 2) {
			column3.push(text[i]);
		} else if (i % squareNum === 3) {
			column4.push(text[i]);
		} else if (i % squareNum === 4) {
			column5.push(text[i]);
		} else if (i % squareNum === 5) {
			column6.push(text[i]);
		} else if (i % squareNum === 6) {
			column7.push(text[i]);
		} else if (i % squareNum === 7) {
			column8.push(text[i]);
		} else if (i % squareNum === 8) {
			column9.push(text[i]);
		} else if (i % squareNum === 9) {
			column10.push(text[i]);
		} else if (i % squareNum === 10) {
			column11.push(text[i]);
		} else if (i % squareNum === 11) {
			column12.push(text[i]);
		} else if (i % squareNum === 12) {
			column13.push(text[i]);
		} else if (i % squareNum === 13) {
			column14.push(text[i]);
		} else if (i % squareNum === 14) {
			column15.push(text[i]);
		} else if (i % squareNum === 15) {
			column16.push(text[i]);
		} else if (i % squareNum === 16) {
			column17.push(text[i]);
		} else if (i % squareNum === 17) {
			column18.push(text[i]);
		} else if (i % squareNum === 18) {
			column19.push(text[i]);
		} else if (i % squareNum === 19) {
			column20.push(text[i]);
		} else if (i % squareNum === 20) {
			column21.push(text[i]);
		}
	}
}

splitString(text);


console.log(toNormalize(column1.toString()) + ' ' + 
			toNormalize(column2.toString()) + ' ' + 
			toNormalize(column3.toString()) + ' ' +
			toNormalize(column4.toString()) + ' ' +
			toNormalize(column5.toString()) + ' ' +
			toNormalize(column6.toString()) + ' ' +
			toNormalize(column7.toString()) + ' ' +
			toNormalize(column8.toString()) + ' ' +
			toNormalize(column9.toString()) + ' ' +
			toNormalize(column10.toString()) + ' ' +
			toNormalize(column11.toString()) + ' ' +
			toNormalize(column12.toString()) + ' ' +
			toNormalize(column13.toString()) + ' ' +
			toNormalize(column14.toString()) + ' ' +
			toNormalize(column15.toString()) + ' ' +
			toNormalize(column16.toString()) + ' ' +
			toNormalize(column17.toString()) + ' ' +
			toNormalize(column18.toString()) + ' ' +
			toNormalize(column19.toString()) + ' ' +
			toNormalize(column20.toString()) + ' ' +
			toNormalize(column21.toString()));

module.exports.toNormalize = toNormalize;
module.exports.toLower = toLower;
module.exports.toCount = toCount;