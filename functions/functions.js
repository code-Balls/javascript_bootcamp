console.log('Welcome to functions')

// function sayHello() {
//     let you = prompt("What's your name")
//     console.log("Hello", you + "!")
// }
function sayHello2(name) {
    // let you = prompt("What's your name")
    console.log(`Hello again ${name}`)
}


// sayHello()
// sayHello2('Balls')

function addTwoNumbers(x=2, y=3) {
    console.log(x + y);
}
addTwoNumbers(5, 5, 7)

let addTwoNumbers2 = (x, y, z) => console.log(x + y + z);//Arrow function

addTwoNumbers2(5, 7, 5)

const arr = ['squirrel', 'alpaca', 'buddy'];
arr.forEach((item, index) => {
    let newName = `Mr. ${item}` //local variable
    console.log(`${index+1}. ${newName}`)
})

//SPREAD OPERATORS
let spread = ['so', 'much', 'fun'];
let message = ['javascript', 'is', ...spread, 'and', 'very', 'powerful'];

console.log(message)

//REST OPERATOR works with string
function addArr(x, ...y) {
    console.log(x + y);
}

addArr ('hi', 'there', 'How are you?')
addArr (3, 4, 6)

//RETURN KEYWORD
function addThreeNumbers(x, y, z) {
    return x + y + z;
}

const myAns = addThreeNumbers(5, 6, 7)
console.log(myAns)

let addThreeNumbers2 = (x, y, z) => x + y + z; //the arrow function is returning!

addThreeNumbers2 (5, 6, 7)