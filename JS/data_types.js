//null, undefined, boolean, number, string, object, symbol(es6), bigInt
//all are primitive except object
//operator typeof

//number
console.log('NUMBER');
let infinity = 1/0;
let nan = "not number"-5;
let concatString = "not number"+5;
console.log('1/0: ', infinity);
console.log('"not number"-5: ', nan);
console.log('"not number"+5: ', concatString);
//bigInt
console.log('BIGINT');
const bigInt = 1234567890123456789012345678901234567890n;
console.log('bigInt: ', bigInt);
//string
console.log('STRING');
console.log("Double quotes string");
console.log('Single quotes string');
console.log(`Back quotes string with value '${5+5-128}'`);
console.log('This \'"a"\' is string too: ', '"a"');
console.log('This \'""\' is string too: ', '""');
//boolean
console.log('BOOLEAN');
let myAge=25;
let isOld=myAge>90;
console.log('Am i old? ', isOld);
//null - declared with value null
console.log('NULL');
let myMany=null;
console.log(`I have ${myMany} coins`);
console.log(`I got 5 coins and added it to my coins: I have ${myMany+5} coins`);
console.log(`I got '5' coins and added it to my coins: I have ${myMany+"5"} coins`);
//undefined - not declared or declared without value
console.log('UNDEFINED');
let declared;
console.log('Declared var: ', declared);
console.log('But not declared gives error');
//object
console.log('OBJECT');
console.log('Will talk about later');
//symbol
console.log('SYMBOL');
let s1 = Symbol("1");
let s2 = Symbol("1");
console.log('s1 = Symbol("1")');
console.log('s2 = Symbol("1")');
console.log('s2 === s1:', s1 === s2);//false
console.log('String(s1):', String(s1));
console.log('String(s1) === String(s1):', String(s1)===String(s2));//true
//typeof
console.log('TYPEOF');
console.log('typeof undefined: ', typeof undefined);// "undefined"
console.log('typeof 0: ', typeof 0); //number
console.log('typeof 10n: ', typeof 10n);// "bigint"
console.log('typeof true: ', typeof true);// "boolean"
console.log('typeof "foo": ', typeof "foo");// "string"
console.log('typeof Symbol("id"): ', typeof Symbol("id"));// "symbol"
console.log('typeof Math: ', typeof Math);// "object"
console.log('typeof null: ', typeof null);// "object"
console.log('typeof fn(){}: ', typeof function(){});// "function"
console.log('typeof null + 6: ', typeof null+6);
console.log('typeof(null+6): ', typeof(null+6));
console.log('typeof(NaN): ', typeof(NaN));
let a = new String(5);
console.log(a);//[String: '5']
console.log(typeof a);//object
console.log(a.toString());