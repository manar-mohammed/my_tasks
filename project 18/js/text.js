////////// (1)  //////////

var myString = "This is a string";
var array = myString.split(" ");

console.log("***** (1) *****");
console.log(array);


////////// (2)  //////////

var myChar = myString.charCodeAt(3);
console.log("***** (2) *****");
console.log(myChar);


////////// (3)  //////////

var upperCase = myString.toUpperCase();
console.log("***** (3) *****");
console.log(upperCase);


////////// (4)  //////////

////// way NO.1 ///////
var mySlice = myString.slice(10);
////// way NO.2 ///////
var mySubstr = myString.substr(10,6);
////// way NO.3 ///////
var mySubstring = myString.substring(10,16);

console.log("***** (4) *****");
console.log("by slice : " + mySlice);
console.log("by Substr : " + mySubstr);
console.log("by Substring : " + mySubstring);


////////// (5)  //////////

var myNewSting = myString.replace("a string","my string");

console.log("***** (5) *****");
console.log(myNewSting);


////////// (6)  //////////

var var1 = myString.charAt(3);

console.log("***** (6) *****");
console.log(var1);


////////// (7)  /////////

var x = "108 $";
var y = parseInt(x);

console.log("***** (7) *****");
console.log(y);



////////// (8)  /////////

var z = Math.max(12,25,30,50,80,65,70);

console.log("***** (8) *****");
console.log(z);


////////// (9)  /////////

console.log("***** (9) *****");

function evenNumber(num){
    "use strict";
    var n;
    for (n = 0; n <= num; n++) {
        if (n%2 == 0) {
            console.log(n);
        }
    }
    } 
evenNumber(20);



////////// (10)  /////////

console.log("***** (10) *****");
var newString = "     Hello World  ";

console.log(newString.trim());



