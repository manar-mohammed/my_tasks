/*var arr = new Array('0', '1', '2', '3', '4');

function oddOrEven(index) {
    
     "use strict";
     
      var total = new Array(),
          sum=0;
      
    
       for (let i=0 ; i < arr.length ; i ++) {
        
            total [i]=prompt ('type element number' + (i + 1));
            sum + = total [i];
            
            if (total [i] == ' ') {
                total [i] = 0;
            }
    }
    
    if (sum%2 == 0) {
       var result = 'even';
        
        else
        result = 'odd';
    }
return result;
}

document.getElementById("user").innerHTML= oddOrEven(index);
*/
///// section No.2
function sum(x,y,z) {
    
     "use strict";
     
     x = Number(document.getElementById("chi").value);
     y = Number(document.getElementById("cow").value);
     z = Number(document.getElementById("pig").value);

     document.getElementById("result").innerHTML = (x*2) + (y*4) + (z*4);
     
}

///// section No.3

function ave(x,y) {
   
   "use strict";
   
    x = Number(document.getElementById("age").value);
    y = Number(document.getElementById("house").value);
    
    document.getElementById("result2").innerHTML = x/y;
}


///// section No.4
 (function invoking() {
   
   "use strict";
   
   var testValue = 60;
   
   document.getElementById("result3").innerHTML = "the testValue is " + testValue + " set to 3 = " + testValue/3;
   
 })();

/*(function say() {
   "use strict";
   alert("fffff");
})();*/