// "Convert a string to an array" https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

//Roman Slipak
const stringToArray = (string) => string.split(" ");

//Sviatoslav Nadorozhnyi
const stringToArray = string => string.split(" ");

//Vitalii Muzyka
const stringToArray = string => string.split(" ");

// "DNA to RNA Conversion" https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

//Roman Slipak
function DNAtoRNA(dna) {
  const structure = dna.split("");
  for(let i = 0;i < structure.length;i++) {
    if(structure[i] === "T") {
      structure[i] = "U";
    }
  }
  return structure.join("");
}
//Daryna Riabova
function DNAtoRNA(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
   dna[i] === "T" ? rna += "U" : rna += dna[i];  
  } return rna;  
}
  
//Sviatoslav Nadorozhnyi
const DNAtoRNA = dna => dna.replace(/T/g, "U");

//Vitalii Muzyka
function DNAtoRNA(dna) {
  const rna = dna.split("");
  for (let i = 0; i < rna.length; i++) {
      if (rna[i] === "T") {
          rna[i] = "U";
      }
  }
  return rna.join("");
}

// "Find Maximum and Minimum" Values of a List https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

//Roman Slipak
const min = function(list){
    list.sort(compare);
    return list[0];
}

const max = function(list){
    list.sort(compare).reverse();
    return list[0];
}

const compare = (a,b) => a - b;

//Sviatoslav Nadorozhnyi
const min = list => Math.min(...list);
const max = list => Math.max(...list);

//Vitalii Muzyka
const min = function(list){
  list.sort((a, b) => a - b);
  return list[0];
}

const max = function(list){
  list.sort((a, b) => b - a);
  return list[0];
}

// "Smallest value of an array" https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

//Roman Slipak
function min(arr, toReturn) {
  const minNumber = Math.min(...arr);
  return toReturn === "value" ? minNumber : arr.indexOf(minNumber);
}

//Sviatoslav Nadorozhnyi
const min = (arr, toReturn) => toReturn === "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

//"A wolf in sheep's clothing" https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

//Roman Slipak
function warnTheSheep(queue) {
  let wolfPosition = 0;
  let countQueue = queue.length;
  for(let i = 0;i < queue.length;i++) {
    if(queue[i] === "wolf") {
     wolfPosition = countQueue;
    }
    countQueue--;
  }
  return wolfPosition === 1 ? "Pls go away and stop eating my sheep" : "Oi! Sheep number "+ (wolfPosition - 1) +"! You are about to be eaten by a wolf!"
}

//Daryna Riabova 
function warnTheSheep(queue) {
  if (queue[queue.length - 1] === 'wolf') {
    return "Pls go away and stop eating my sheep";
  }
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === 'wolf') {
       return `Oi! Sheep number ${queue.length - i - 1}! You are about to be eaten by a wolf!`;
    }
  }
}

//Sviatoslav Nadorozhnyi
function warnTheSheep(queue) {
  const reversedQueue = queue.reverse();
  if (reversedQueue[0] === "wolf") {
    return "Pls go away and stop eating my sheep";
  } 
  return `Oi! Sheep number ${reversedQueue.indexOf("wolf")}! You are about to be eaten by a wolf!`;
}

// "Beginner - Lost Without a Map" https://www.codewars.com/kata/beginner-lost-without-a-map

//Roman Slipak
function maps(x){
  const doubledXArray = [];
  for(let i = 0;i < x.length;i++){
    doubledXArray[i] = x[i] * 2;
  }
  return doubledXArray;
}
//Daryna Riabova 
function maps(x) {
  return x.map(n => n * 2);
}
//Sviatoslav Nadorozhnyi
function maps(x) {
  const result = x.map(value => value * 2);
  return result;
}

// "Find the first non-consecutive number" https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

//Roman Slipak
function firstNonConsecutive (arr) {
  for(let i = 0;i < arr.length - 1;i++) {
    if(arr[i + 1] - arr[i] !== 1) {
      return arr[i + 1];
    }
  }
  return null;
}

//Sviatoslav Nadorozhnyi
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      return arr[i + 1];
    }
  }
  return null;
}

// "You Can't Code Under Pressure #1" https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

//Roman Slipak
const doubleInteger = (i) => i * 2;

//Sviatoslav Nadorozhnyi
const doubleInteger = i => i * 2;

// "Century From Year" https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

//Roman Slipak
function century(year) {
  return Math.ceil(year / 100);
 }

//Sviatoslav Nadorozhnyi
const century = year => Math.ceil(year / 100);

// "Return Negative" https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

//Sviatoslav Nadorozhnyi
const makeNegative = num => (num > 0) ? -num : num;

// "Cockroach speed" https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript

//Sviatoslav Nadorozhnyi
const cockroachSpeed = s => Math.floor(s * 27.777777777778);

//Roman Slipak
const cockroachSpeed = (s) => Math.floor(s * 100000 / 3600);


// "Angle of triangle" https://www.codewars.com/kata/5a023c426975981341000014/train/javascript

//Sviatoslav Nadorozhnyi
const otherAngle = (a, b) => 180 - (a + b);

//Roman Slipak
const otherAngle = (a, b) => 180 - (a + b);

// "Twice as old" https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

//Sviatoslav Nadorozhnyi
const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - sonYearsOld * 2);

// "Return n-th even number" https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

//Sviatoslav Nadorozhnyi
const nthEven = n => n * 2 - 2;

// "What's the real floor" https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

//Sviatoslav Nadorozhnyi
const getRealFloor = n => n > 13 ? n - 2 : n > 0 ? n - 1 : n;

//Roman Slipak 
function getRealFloor(n) {
  if (n <= 0) {
    return n;
  } else if (n < 13) {
    return n - 1;
  } else {
    return n - 2;
  }
}

// "Clock" https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

//Sviatoslav Nadorozhnyi
const past = (h, m, s) => (h * 3600000) + (m * 60000) + (s * 1000);

//Roman Slipak
const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;

// "Is n divisible by x and y" https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

//Sviatoslav Nadorozhnyi
const isDivisible = (n, x, y) => Number.isInteger(n / x) && Number.isInteger(n / y);

//Roman Slipak 
const isDivisible = (n, x, y) => n % x + n % y === 0;
