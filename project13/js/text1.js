var ones = new Array ('', 'one' , 'two' , 'three' , 'four' , 'five' , 'six' , 'seven' , 'eight' , 'nine' , 'ten' , 'eleven' , 'twelve' , 'thirteen' , 'fourteen' , 'fifteen' , 'sixteen' , 'seventeen' , 'eighteen' , 'nineteen');
   
   function makarr(ind) {
      
      "use strict";
      
       var users = new Array();
    
       for (let index=0 ; index < ind ; index ++) {
        
            users [index]=prompt ('type element number' + (index + 1));
    }
    
        for (let index=0 ; index < users.length ; index ++) {
        
                    document.getElementById("user").innerHTML + = '<div>' + ones[index + 1] + 'name is :' + users[index] +'</div>';
    }
    
   }
