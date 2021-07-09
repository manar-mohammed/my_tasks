//////////    (1)  ///////////

console.log("**** 1 ****");

////// way NO. (1)  ///////

var arr = new Array ();
arr[0] = 200;
arr[1] = "Ahmed";
arr[2] = "Hi";
arr[3] = true;
arr[4] = false;
arr[5] = "M";
arr[6] = "css";
arr[7] = "Hi";
console.log(arr);


//////// way NO. (2)  /////////

var arr = new Array (200, "Ahmed", "Hi", true, false, "M", "css", "Hi");
console.log(arr);


//////// way NO. (3)  /////////

var arr = [];
arr[0] = 200;
arr[1] = "Ahmed";
arr[2] = "Hi";
arr[3] = true;
arr[4] = false;
arr[5] = "M";
arr[6] = "css";
arr[7] = "Hi";
console.log(arr);


//////// way NO. (4)  /////////

var arr = [200, "Ahmed", "Hi", true, false, "M", "css", "Hi"];
console.log(arr);



///////////    (2)    //////////

console.log("**** 2 ****");

//////// way NO. (1)  /////////

if (Array.isArray (arr)){
    console.log("yes, this is an array");
}else{
    console.log("no, this isn't an array");
}

//////// way NO. (2)  /////////

var x = 200;
if (x.constructor === Array){
    console.log("yes, this is an array");
}else{
    console.log("no, this isn't an array");
}



///////////    (3)    //////////

console.log("**** 3 ****");
console.log("the length of the array is " , arr.length);
 
 
 ///////////    (4)    //////////

console.log("**** 4 ****");
console.log("the last index of element 'Hi' is ", arr.lastIndexOf("Hi"));
console.log(arr);


 ///////////    (5)    //////////

console.log("**** 5 ****");
console.log("the first  index of element 'Hi' is ", arr.indexOf("Hi"));
console.log(arr);


///////////    (6)    //////////

console.log("**** 6 ****");

////// way NO. (1)  ///////

console.log(arr.toString());

////// way NO. (2)  ///////

console.log(arr.join( " / " ));


///////////    (7)    //////////

console.log("**** 7 ****");

arr.splice(3,2); //remove 3,4
console.log(arr);

arr.shift();  //remove first item
console.log(arr);

arr.pop();   //remove last item
console.log(arr);


///////////    (8)    //////////

console.log("**** 8 ****");
var arr = [200, "Ahmed", "Hi", true, false, "M", "css", "Hi"];
arr.unshift("red");   // at the beginning
arr[2] = "green";     //at index 2
arr.push("blue");     //at the end
console.log(arr);


///////////    (9)    //////////

console.log("**** 9 ****");
var arr = [200, "Ahmed", "Hi", true, false, "M", "css", "Hi"];
console.log(arr.sort());     


///////////    (10)    //////////

console.log("**** 10 ****");
console.log(arr.reverse());


///////////    (11)    //////////

console.log("**** 11 ****");
var arr = [200, "Ahmed", "Hi", true, false, "M", "css", "Hi"];
var arr1= ["red", "green", "blue"];
var allArrays = arr.concat(arr1);
console.log(allArrays);