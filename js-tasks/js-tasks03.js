// "Find the smallest integer in the array" https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

// Vitalii Muzyka
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//Roman Slipak
class SmallestIntegerFinder {
  findSmallestInt = (args) => Math.min(...args);
}

//Sviatoslav Nadorozhnyi
class SmallestIntegerFinder {
  findSmallestInt = args => Math.min(...args);
}

// "Geometry Basics: Circle Circumference in 2D" https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

// Vitalii Muzyka
const circleCircumference = (circle) => 2 * Math.PI * circle.radius;

//Sviatoslav Nadorozhnyi
const circleCircumference = circle => Math.PI * circle.radius * 2;

// "Training JS #12: loop statement --for..in and for..of" https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

// Vitalii Muzyka
function giveMeFive(obj){
  const arr = [];
  for (const key in obj) {
    if (key.length === 5) {
        arr.push(key);
    }
    if (obj[key].length === 5) {
        arr.push(obj[key]);
    }
  }
  return arr;
}

//Roman Slipak
function giveMeFive(obj){
  const fiveLengthKeyAndValueArray = [];
  for(const element in obj) {
    if(element.length === 5) fiveLengthKeyAndValueArray.push(element);
    if(typeof(obj[element]) === "string" && obj[element].length === 5) fiveLengthKeyAndValueArray.push(obj[element]);
  }
  return fiveLengthKeyAndValueArray;
}

//Sviatoslav Nadorozhnyi
function giveMeFive(obj){
  const parsedArray = []; 
  for (const key in obj) {
    if (key.length === 5) {
      parsedArray.push(key);
    }
    if (obj[key].length === 5) {
      parsedArray.push(obj[key]);
    }
  }
  return parsedArray;
}

// "Understanding closures - the basics" https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

// Vitalii Muzyka
function buildFun(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push((function (num) {
    return function () {
      return num;
    };
    })(i));
  }
  return res;
}

//Sviatoslav Nadorozhnyi
function buildFun(n){
	const res = []
	for (let i = 0; i <= n; i++){
		res.push(function(){
			return i
		});
	}
	return res
}

// "Fun with ES6 Classes #2 - Animals and Inheritance" https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

//Roman Slipak
class Shark extends Animal {
  constructor(name,age,status) {
    super(name,age,0,"shark",status);
  }
}

class Cat extends Animal {
  constructor(name,age,status) {
    super(name,age,4,"cat",status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name,age,status,master) {
    super(name,age,4,"dog",status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

// Vitalii Muzyka
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}
  
class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}
  
class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

//Sviatoslav Nadorozhnyi
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}
