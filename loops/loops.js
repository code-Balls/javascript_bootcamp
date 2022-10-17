//LOOPS
//WHILE LOOP
// while (condition) {
    
// }

// let i = 0

// while (i < 10) {
//     console.log(i);
//     // i = i + 1; 
//     // i++;
//     i += 2;
// }

//we can have a while loop that looks for a value in an array, like this:

let someArray = ['Mike', 'Antal', 'Marc', 'Emir', 'Louiza', 'Jacky'];

let  notFound = true;

while (notFound && someArray.length > 0) {
    if (someArray [0] === 'Louiza') {
        console.log('found her!');
        notFound = false;
    } else {
        someArray.shift();
    }
}

//EXERCISE 1
//1
// const maxValue = 100;
// //2
// const rnd = Math.floor ((Math.random () * maxValue) + 1)
// // console.log(rnd)
// //3
// let isCorrect = false
// let lives = 5
// //4
// let number = parseInt(prompt(`Enter the guessed number: lives-${lives}`))

// while (!isCorrect && lives > 0)  {
//      if (number === rnd) {
//         isCorrect = true;
//         console.log('Hurray, you guessed it right')
//      } else {
//         lives--;
//         if (lives === 0) {
//             console.log('Game Over')
//             console.log(`Your number is: ${rnd}`)
//          } else {
//             if (number > rnd) {
//                 console.log('your guess is high, go low')
//                 number = parseInt(prompt(`Enter the guessed number: lives-${lives}`))
//             } else {
//                 console.log('your guess is low, go high')
//                 number = parseInt(prompt(`Enter the guessed number: lives-${lives}`))
//             }
//          }
//        }
//     }



//do while loops
//in some cases, you really need the code block to be executed at least once. e.g if you need a valid user input, you need to ask at least once.

// let number 
// let counter = 0
// do {
//     number = prompt(`Enter a number between 0 and 100: Counter${counter++}`);
// } while (!(number >= 0 && number < 100)); 

//FOR LOOPS

// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }

// let arr = [];
// for (let i = 0; i < 100; i++) {
//     arr.push(i);
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 100; i = i + 2) {
//     arr.push(i);
    
// }

//NESTED LOOPS

// let arrOfArrays = []

// for (let i = 0;  i < 3; i++) {
//     arrOfArrays.push([]);
//     for (let j = 0;  j < 7; j++) {
//         arrOfArrays[i].push(j);
        
//     }
    
// }

// console.log(arrOfArrays)

//LOOPS AND ARRAYS

let names = ['Chantal', 'John', 'Maxime', 'Bobbi', 'Jair'];

for (let i = 0; i < names.length; i ++) {
    console.log(names[i]);
    
}

//EXERCISE 2
//1
let counter = 0;

do {
    console.log(counter)
    counter +=20;
    } while (counter <= 100 && counter < 150); {
   
}

//EXERCISE 2
//1
const myWork = [];

let stat = true;

for (let i = 1;  i < 11 ; i++) {
    myWork.push({name: 'Lesson' + i, status: (stat = stat !== true)});  
}
console.log(myWork)

