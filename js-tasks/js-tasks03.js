// "Find the smallest integer in the array" https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

// Vitalii Muzyka
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}
  
// "Geometry Basics: Circle Circumference in 2D" https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

// Vitalii Muzyka
const circleCircumference = (circle) => 2 * Math.PI * circle.radius;

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