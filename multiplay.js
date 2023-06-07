function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

/////////Reversed Strings///////
function solution(str) {
  let arryStr = str.split("");
  let arry = arryStr.reverse();
  let str1 = arry.join("");
  return str1;
}
/////////// Remove First and Last Character////////
function removeChar(str) {
  return str.substring(1, str.length - 1);
}

//    function removeChar(str) {
//     return str.slice(1, -1);
//   }

function squareSum(numbers) {
  let newNumbers = numbers * numbers;
  let sum = 0;
  sum += newNumbers;
  return sum;
}
squareSum([1, 2, 3]);

///////////Remove String Spaces//////////////
function noSpace(x) {
  return (str = x.replace(/\s/g, ""));
}

function noSpace(x) {
  return x.split(" ").join("");
}

const noSpace = (x) => x.replace(/ /g, "");

/////////////Grasshopper - Summation//////////
var summation = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
};

function summation(num) {
  return (num * (num + 1)) / 2;
}

//////////////////stringToNumber//////////
var stringToNumber = function(str){
  return parseInt(str);
}

const stringToNumber = str => Number(str)

///////////////Century From Year////////////

function century(year) {
  let yearThen = year / 100 ;
  return Math.ceil(yearThen); // trouver le ciecl d'une année
}

const century = year => Math.ceil(year/100)

/////////Abbreviate a Two Word Name////////
function abbrevName(name){
  let names = name.split(" ");
  let name1 = names[0].toUpperCase();
  let name2 = names[1].toUpperCase(); 
  let cilabe1 = name1[0];
  let cilabe2 = name2[0];
    
    return cilabe1 +'.' + cilabe2;
  
  }

  function abbrevName(name){

    const [firstName, lastName] = name.split(' ')
    const firstInitial = firstName.charAt(0).toUpperCase()
    const secondInitial = lastName.charAt(0).toUpperCase()
    return firstInitial + '.' + secondInitial

}
/////////// Basic Mathematical Operations//////////////
function basicOp(operation, value1, value2){

  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return "Invalid operation";
  }
}
function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2);
}
/////////l' heur en milliseconds////////
function past(h, m, s){
  var hours = h * 60 * 60 * 1000;
  var minutes = m * 60 * 1000;
  var seconds = s * 1000;
  
  return hours + minutes + seconds;
}

//////////Keep Hydrated!////////
// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor(time * 0.5);
}
 
function litres(time) {
  return parseInt(time/2);
}