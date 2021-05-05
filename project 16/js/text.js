var arr = new Array('0', '1', '2', '3', '4');

function oddOrEven(index) {
    
     "use strict";
     
      var total = new Array(),
          sum=0,
          result;
      
    
       for (let i=0 ; i < arr.length ; i ++) {
        
            total [i]=prompt ('type element number' + (i + 1));
            sum + = total [i];
            
            if (total [i] == ' ') {
                total [i] = 0;
            }
    }
    
    if (sum%2 == 0) {
        result = 'even';
        
        else
        result = 'odd';
    }
return result;
}

document.getElementById("user").innerHTML= oddOrEven(index);

///// section No.2
function sum(x,y,z) {
    
     "use strict";
     
     x = Number(document.getElementById("chi").value);
     y = Number(document.getElementById("cow").value);
     z = Number(document.getElementById("pig").value);
     var s=(x*2) + (y*4) + (z*4);
     document.getElementById("result").innerHTML = s;
     
}

(function say() {
   "use strict";
   alert("fffff");
})();
///// section No.3


