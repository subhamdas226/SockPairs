
const prompt = require('prompt-sync')({sigint: true}); // used to take users input
const logicpairs = require('./logicPairs');


const n = prompt('Enter the integer n, the number of socks represented in ar :');
let line = prompt('Enter the n numbers separated by space : '); // line = 4 10 20 30 40 10 4

let num = line.split(' ');              // num =  ["10", "20", "30", "40"]
let arrayOfNumbers = num.map(Number);   // arrayOfNumbers =  [10, 20, 30, 40]
// console.log(line);
//  console.log(num);
// console.log(arrayOfNumbers);
console.log(`Array of socks :  ${arrayOfNumbers}`);
let pairs = logicpairs.sockPairs(n,arrayOfNumbers);
console.log("Pairs of socks : ",pairs);
