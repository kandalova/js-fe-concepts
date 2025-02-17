let upperCase = function(sString){
  return sString.toUpperCase();
}

let x = 5, y = 2;
console.log('x=',x);
console.log('y=',y);
let s1 = "string1", s2 = "string2"; s3 = '3', s4 = '4';
console.log('s1 =', s1);
console.log('s2=', s2);
console.log('s3=', s3);
console.log('s4=', s4);
console.log(upperCase('unitary and binary operators'));
//unitary operator
console.log('-x: ', -x);
//binary operator
console.log(' y - x: ', y - x);
//basic operators
console.log(upperCase('basic operators: +, -, /, *, %, **'));
console.log('x % y = ', x % y,' (remainder of integer division)');
console.log('x ** y = ', x  ** y);
console.log('25 ** (1/2) = ', 25  ** (1/2));
//String concat with binary +
console.log(upperCase('String concat with binary +'));
console.log('s1 + s2 = ', s1 + s2);
console.log('s3 + x = ', s3 + x);
console.log('x + y + s3 = ', x + y + s3);
console.log(upperCase('Other arithmetic operators - only numbers'));
console.log('s3 - y  = ', s3 - y);
console.log('s3 / y  = ', s3 / y);
console.log(upperCase('unary + To number'));
console.log('+true = ', +true);
console.log('+"" = ', +"");
console.log('+"" = ', +"");
console.log('s3 + s4 = ', s3+s4);
console.log('+s3 + +s4 = ', +s3 + +s4);
//Assignment =
console.log(upperCase('Assignment ='));
let a = 1, b = 2;
console.log(`a = ${a}, b = ${b}`);
let c = 3 - (a = b + 1);
console.log(`let c = 3 - (a = b + 1);`);
console.log(`a = ${a}, c = ${c}`);
console.log(`a = b = c = 2 + 2`);
a = b = c = 2 + 2;
console.log(`a = ${a}, , b = ${b}, c = ${c}`);
//augmented assignment operators or compound assignment operators
console.log(upperCase('augmented assignment operators or \ncompound assignment operators'));
console.log(`a = ${a}`);
console.log(`a += 2, a = ${a += 2}`);
console.log(`a -= 1, a = ${a -= 1}`);
//increment and decrement
console.log(upperCase('increment and decrement'));
a++;
console.log(`a++, a = ${a}`);
a--;
console.log(`a--, a = ${a}`);
let d = 5;
let e = 5;
console.log(`d = 5`);
console.log(`e = 5`);
console.log(`++d = ${++d}`);
console.log(`e++ = ${e++}, after: e = ${e}`);
console.log(`2 * ++e = ${2 * ++e}`);
//operators ,
console.log(upperCase('operators ,'));
a = (1 + 2, 3 + 4);
console.log(`a = (1 + 2, 3 + 4) --> a = (3,7) --> a = 7 `);
console.log(`a = ${a} (last value)`);
console.log(`but`);
a = 1 + 2, 3 + 4
console.log(`a = 1 + 2, 3 + 4  --> a = 3,7 --> a = 3`);
console.log(`a = ${a}`);
//Exapmples
console.log(upperCase('Examples'));
console.log('"" + 1 + 0 = ', "" + 1 + 0);
console.log('"" - 1 + 0 = ', "" - 1 + 0);
console.log('true + false = ', true + false);
console.log('6 / "3" = ', 6 / "3");
console.log('"2" * "3" = ', "2" * "3");
console.log('4 + 5 + "px" = ', 4 + 5 + "px");
console.log('"$" + 4 + 5 = ', "$" + 4 + 5);
console.log('"4" - 2 = ', "4" - 2);
console.log('"4px" - 2 = ', "4px" - 2);
console.log('"  -9  " + 5 = ', "  -9  " + 5);
console.log('"  -9  " - 5 = ', "  -9  " - 5);
console.log('null + 1 = ', null + 1);
console.log('undefined + 1 = ', undefined + 1);
console.log('" \t \n" - 2 = ', " \t \n" - 2);