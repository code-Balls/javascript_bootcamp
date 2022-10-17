console.log('Hello built-in Methods')

//Array Methods 
//FOREACH METHOD

// let arr =['grapefruit', 4, 'hello', 5.6, true];

// function printStuff(element, index) {
//     console.log(`Printing stuff: ${element} on array position: ${index}`);
// }
// arr.forEach(printStuff);
// //OR
// arr.forEach((element, index) => {
//     console.log(`Best way of printing Element: ${element} `)
// })

//FILTER METHOD
// let arr = ['squirrel', 5, 'Tjed', new Date(), true ]
// function checkString(element, index) {
//     return typeof element === 'string'
// }

// let filterArr = arr.filter(checkString) //OR let filterArr = ((element, index) => typeof element === 'string)
// console.log(filterArr)

//EVERY METHOD(for every to return true, all the conditions must be true)
// let arr = ['squirrel', 5, 'Tjed', new Date(), true ]
// function checkString(element, index) {
//     return typeof element === 'string'
// }

// let filterArr = arr.every(checkString) //OR let filterArr = ((element, index) => typeof element === 'string)
// console.log(filterArr)


//Copywithin Method
// let arr =['grapefruit', 4, 'hello', 5.6, true];
// // arr.copyWithin(1, 3, 4);

// arr.copyWithin(0, 3, 5)
// console.log(arr);

//Map method
let arr = [1000, 2000, 3000, 4000];
let mapped_arr = arr.map(x => `$${x}`) //x represents the items at each point in time.
console.log(mapped_arr); 