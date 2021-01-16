function  sum(x, y) {
    "use strict";
    x = Number(document.getElementById("fnum").value);
    y = Number(document.getElementById("snum").value);
    if (x==0 || y==0){
        document.getElementById("result").innerHTML = "enter number please";
    } else if (isNaN(x) || isNaN(y)) {
        alert("focus on what you write");
        document.getElementById("result").innerHTML = "sorry not a number";
    } else {
        document.getElementById("result").innerHTML = x + y;
    }
}


function typing() {
    "use strict";
    document.getElementById("text"). innerHTML = prompt("say something");
}

function date() {
    "use strict";
    var theDate= new Date;
    
    return theDate;
}

function st() {
    "use strict";
    var x = document.getElementById("count").value.length;
    document.getElementById("counter").innerHTML = x;
}
 /*var myColor = document.getElementById("color");
 
 myColor.onchange = function () {
    "use strict";

 onmouseenter = style.background.document.getElementById("colo").innerHTML  = myColor.value;
 
 }*/
 
 var ones = new Array ('', 'one' , 'two' , 'three' , 'four' , 'five' , 'six' , 'seven' , 'eight' , 'nine' , 'ten' , 'eleven' , 'twelve' , 'thirteen' , 'fourteen' , 'fifteen' , 'sixteen' , 'seventeen' , 'eighteen' , 'nineteen');
   
   function array(index) {
      
      "use strict";
      
       var users = new Array();
    
       for (let i=0 ; i < index ; i ++) {
        
            users [i]=prompt ('type element number' + (i + 1));
    }
    
        for (let i=0 ; i < users.length ; i ++) {
        
                    document.getElementById("user").innerHTML += '<div>' + 'name number ' + ones[i + 1] + ' is :' + users[i] +'</div>';
    }
    
   }