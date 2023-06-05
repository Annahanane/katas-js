 function evenOrOdd(number) {
     if (number % 2 == 0){
       return "Even"
     } else{
       return "Odd"
      };
  }  
 
 /////////Reversed Strings///////
 function solution(str){
    let arryStr = str.split("");
     let arry = arryStr.reverse();
     let str1 = arry.join("");
     return str1;
     
     
   }
 /////////// Remove First and Last Character//////// 
   function removeChar(str){
    return str.substring(1, str.length-1);
   }; 