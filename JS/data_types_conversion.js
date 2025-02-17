//new Number(1) or new Boolean(false) create objects!
//Number(1) - conversion, it's usefull

//string() for promotives
console.log('STRING CONVERSION FOR PROMITIVES');
let value = true;
let object = {name: "Leyla"}
console.log('value: ' + value);
console.log('typeof value: ', typeof value);
console.log('String(value): ', String(value));
console.log('typeof String(value): ', typeof String(value));
//string() for objects
console.log('STRING() FOR OBJECT');
console.log('object: ', object);
console.log('typeof object: ', typeof object);
console.log('String(object): ', String(object));
console.log('typeof String(object): ', typeof String(object));
//math conversion
console.log('MATH CONVERSION TO NUMBERS');
console.log('"1"/"2": ', "1"/"2");
console.log('"1"-"2": ', "1"-"2");
console.log('but "1"+"2": ', "1"+"2", " (it's concat for strings)");
console.log('"3"*"8": ', "3"*"8");
//explicit number conversion
console.log('EXPLICIT NUMBER CONVERSION');
let number = "123";
console.log('number string: ', number);
console.log('typeof number: ', typeof number);
console.log('Number(number): ', Number(number));
console.log('typeof Number(number): ', typeof Number(number));
console.log('Number("   123   "): ', Number("   123   "));
console.log('Number("123z"): ', Number("123z"));
console.log('Number(""): ', Number(""));
console.log('Number(true): ', Number(true));
console.log('Number(false): ', Number(false));
console.log('Number(null): ', Number(null));
console.log('Number(undefined): ', Number(undefined));
//explicit boolean conversion
console.log('EXPLICIT BOOLEAN CONVERSION');
console.log('Boolean(0): ', Boolean(0));
console.log('Boolean(null): ', Boolean(null));
console.log('Boolean(undefined): ', Boolean(undefined));
console.log('Boolean(""): ', Boolean(""));
console.log('Boolean("hello"): ', Boolean("hello"));
console.log('Boolean("false"): ', Boolean("false"));
console.log('Boolean("0"): ', Boolean("0"));
console.log('Boolean(" "): ', Boolean(" "));
console.log('Boolean([]): ', Boolean([]));
console.log('Boolean({}): ', Boolean({}));
console.log('Boolean(fn(){}): ', Boolean(function(){}));
//converse to false: '', 0, null. underfined, NaN, false

//== vs ===
console.log('== VS ===');
console.log('== works with type conversion');
console.log('=== works without type conversion');
console.log('2=="2": ', 2=="2");
console.log('2==="2": ', 2==="2");
console.log('"0"==false', "0"==false);

//strange examples
console.log('STRANGE EXAMPLES');
console.log("false == '': ", false == ''); //true
console.log('false == []: ', false == []); //true
console.log('false == {}: ', false == {}); //false
console.log("'' == 0: ", '' == 0); //true
console.log("'' == []: ", '' == []); //true
console.log("'' == {}: ", '' == {}); //false
console.log("0 == []: ", 0 == []); //true
console.log("0 == {}: ", 0 == {}); //false
console.log("0 == null: ", 0 == null); //false
console.log("undefined == null: ", undefined == null); //true
console.log("undefined === null: ", undefined === null); //false

function  counter(){
  var i=0;
  return function(){
    return ++i;
  }
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());

// console.log(x)
// var x = 1

// console.log(y)
// function y() {}

// console.log(z)
// let z = 1

// setTimeout(() => {
// 	console.log(2)
// })

// Promise.resolve().then(() => {
// 	console.log(1)
// })

// console.log(0)

// for(let i =0; true ; i++) {
// 	setTimeout( function() {
// 			console.log(i)
// 	})
// }