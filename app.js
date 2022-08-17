// var arr = [6, 89, 3,45]

// function findLargest (arr){
//     let largest = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > largest){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// console.log(findLargest(arr));

//ENSURE the the quotes are single or double, each method must match.
// const reverseString = (str) => str.split('').reverse().join('');
// console.log(reverseString("Bruh"));

//ANCHOR find the smallest number in an array
//es5
const list = [1,2,3,4,5,6,7,8,9,10];
// function findMin(arr){
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(findMin(list));
//es6 uses an arrow function to heavily slim down the code and uses a spread operator in the Math.min function.
const findMin = (arr) => Math.min(...arr);
console.log(findMin(list));