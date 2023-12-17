// Messi Goals https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

//Sviatoslav Nadorozhnyi
const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals;

//Daryna Riabova 
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  const sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return sum;
}
//or
const goals = (a,b,c) => a + b + c;

//Roman Slipak
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Oleg Pavlish
function goals (laLiga, copaDelRey, championsLeague){
    return laLiga+copaDelRey+championsLeague;
}

// Make negative https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

//Sviatoslav Nadorozhnyi
const makeNegative = num => (num > 0) ? -num : num;

//Daryna Riabova 
function makeNegative(num) {
 return num <= 0 ? num : -num;
}

//Roman Slipak
function makeNegative(num) {
  return num > 0 ? num * (-1) : num;
}

//Oleg Pavlish
function makeNegative(num) {
  if (num>0){
    return num*(-1)}
  return num
}

// Game Move https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

//Sviatoslav Nadorozhnyi
const move = (position, roll) => roll * 2 + position;

//Daryna Riabova 
function move (position, roll) {
 return position + roll * 2;
}

//Roman Slipak
function move (position, roll) {
  return position + (roll * 2);
}

//Oleg Pavlish
function move (position, roll) {
  return position+roll*2;
}

// Personalized Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

//Sviatoslav Nadorozhnyi
const greet = (name, owner) => (name === owner) ? 'Hello boss' : 'Hello guest';

//Daryna Riabova 
function greet (name, owner) {
return name === owner ? 'Hello boss' : 	'Hello guest';
}

//Roman Slipak
function greet (name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

//Oleg Pavlish
function greet (name, owner) {
  if (name===owner){
    return 'Hello boss';
  }
  return 'Hello guest';
}

// Keep Hydrated https://www.codewars.com/kata/keep-hydrated-1/train/javascript

//Sviatoslav Nadorozhnyi
const litres = time => Math.floor(time * 0.5);

//Daryna Riabova 
function litres(time) {
  return Math.floor(time * 0.5);
}

//Roman Slipak
function litres(time) {
  return Math.floor(time * 0.5);
}

//Oleg Pavlish
function litres(time) {
  return Math.floor(time*0.5);
}

// Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

//Sviatoslav Nadorozhnyi
const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 === 1;

//Daryna Riabova
function lovefunc(flower1, flower2){
return (flower1 + flower2) % 2 === 1 ? true : false;
}

//Roman Slipak
function lovefunc(flower1, flower2){
  if (flower1 % 2 === 0 && flower2 % 2 !==0 || flower2 % 2 === 0 && flower1 % 2 !==0) {
    return true;
  }
  return false;
}

//Oleg Pavlish
function lovefunc(flower1, flower2){
  return (flower1+flower2)%2!==0;
}
