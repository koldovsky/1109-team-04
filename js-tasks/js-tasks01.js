// Messi Goals https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals;

//Roman Slipak
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Make negative https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

const makeNegative = num => (num > 0) ? -num : num;

//Roman Slipak
function makeNegative(num) {
  return num > 0 ? num * (-1) : num;
}


// Game Move https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

const move = (position, roll) => roll * 2 + position;

//Roman Slipak
function move (position, roll) {
  return position + (roll * 2);
}


// Personalized Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

const greet = (name, owner) => (name === owner) ? 'Hello boss' : 'Hello guest';

//Roman Slipak
function greet (name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}


// Keep Hydrated https://www.codewars.com/kata/keep-hydrated-1/train/javascript

const litres = time => Math.floor(time * 0.5);

//Roman Slipak
function litres(time) {
  return Math.floor(time * 0.5);
}


// Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 === 1;

//Roman Slipak
function lovefunc(flower1, flower2){
  if (flower1 % 2 === 0 && flower2 % 2 !==0 || flower2 % 2 === 0 && flower1 % 2 !==0) {
    return true;
  }
  return false;
}

