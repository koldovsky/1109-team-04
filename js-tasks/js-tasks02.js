// "Convert a string to an array" https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

//Roman Slipak
const stringToArray = (string) => string.split(" ");

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

// "Smallest value of an array" https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

//Roman Slipak
function min(arr, toReturn) {
  const minNumber = Math.min(...arr);
  return toReturn === "value" ? minNumber : arr.indexOf(minNumber);
}

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
