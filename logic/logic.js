console.log('Hello Logic')

var x = 10; // global variable
if(false) {
    //Code
    console.log('Buy black marker');
    let y = 20; //local variable
    console.log(y)
} else {
    //ALTERNATIVE CODE
    console.log('Buy any Color')
}

//EXERCISE 1
//1
let myVariable = true;
//2
console.log(myVariable)
//3
if (myVariable) {
    console.log('My variable is true')
}
//4
if (!myVariable) {
    console.log('My variable has been changed')
}

//5
if (myVariable) {
    console.log('My variable is true')
} else {
    console.log('My variable has been changed')
}

//ELSE-IF STATEMENT
const marker = 'red';
const markerLength = 'short'

if(marker === 'black' && markerLength === 'short') {
    console.log('Buy black and short marker')
}
else if ((marker === 'red' || marker === 'green') && markerLength ==="short")  {
    console.log('Buy red or green marker and short')
}
else {
    console.log('Buy any marker')
}

if(marker === 'black') {
    if(markerLength === 'short') {
        console.log('Buy black and short marker')
    } else {
        console.log('lets\'s manage the long one')
    }
}
   

//EXERCISE 2
//1
// const num = prompt('How old are you')
//2
// const age = Number(num)
//3
// let message;
//4
// if (age >= 21) {
//    message = 'Enter and Drink';
// } else if (age >= 19) { //5
//     message = 'Enter but dont drink';
// } else { //6
//     message = 'You\'re not allowed here, please go home';
// }

// //7
// console.log(message)


//CONDITIONAL TENARY OPERATORS
const gender = 'Male';

if(gender === 'Male') {
    console.log('He is a boy')
} else if(gender === female) {
    console.log('She is a girl')
} else {
    console.log('He or She is others')
}

gender === 'Male' ? console.log('He is a boy') : gender === 'Female' ? console.log('She is a girl') : console.log('He or She is others')
//LOGIC STATEMENT

//EXERCISE 3 
//1
const id = true
//2
const message = id ? 'You\'re allowed inside' : 'You\'re not allowed '
//3
console.log(message) 

//SWITCH STATEMENTS
const currentDay = 'Monday'

switch (currentDay) {
     case  'Monday' :
        console.log('I hate Mondays')
        break;
    case   'Tuesday' :
        console.log('Tuesdays is no class');
        break;
    case   'Wednesday' :
        console.log('I love Wednesdays')
        break;
    case   'Thursday' :
            console.log('This is super story')
            break;
     case   'Friday' :
            console.log('Thank God is Friday (TGIF)')
            break;
    case   'Saturday' :
            console.log('And on the 7th day, He rested')
            break;
    case   'Sunday' :
            console.log('See you all after service')
            break;
    default :
            console.log('Invalid day selected')
}

