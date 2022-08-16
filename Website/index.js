//ANCHOR create a funciton that takes an integer (mins) and converts it to seconds

// function convertMinsToSecs(mins) {
//     //convert mins to seconds by multiplying mins by 60
//     return mins * 60;
// }
//refactored into es6.
// const convert = mins => mins * 60;
// console.log(convert(5));

//ANCHOR create a function that takes an array of numbers and return the first value
// function returnFirstInt(arr){
//     return arr[0];
// }
// console.log(returnFirstInt([1,1,1,1]))

//ANCHOR create a function that takes an array of objects which will calculate the total price of all objects and return the price as a number
// const computer =[
// {Product: "Ram", Quantity: 5, Price: 1000},
// {Product: "GPU", Quantity: 1, Price: 1000000},
// {Product: "CPU", Quantity: 1, Price: 100000000}
// ] 

// function getTotalPrice(object){
//     let totalPrice = 0;
//     for (let i = 0; i < object.length; i ++){
//         totalPrice += object[i].Price * object[i].Quantity;
//     }
//     return totalPrice;
// }

// console.log(getTotalPrice(computer));

//ANCHOR create a funciton that takes an array and returns an array with the strings that have digits
// function filterArr(arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i ++){
//             if (arr[i].includes("1") || (arr[i].includes("2"))|| (arr[i].includes("3"))|| (arr[i].includes("4"))|| (arr[i].includes("5"))|| (arr[i].includes("6"))|| (arr[i].includes("7"))|| (arr[i].includes("8"))|| (arr[i].includes("9"))||  (arr[i].includes("0"))){
//                 newArr.push(arr[i]);
//             }
//     }
//     return newArr;
// }
// let mixed = ["1A", "abc", "c5", "Ali", "ab5bab1"]
// console.log(filterArr(mixed));


