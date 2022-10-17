console.log('ARRAYS')

const myStudents = ['Miriam', 'Delight', 'Progress', 'Petra', 'Dappa', 'Tems', 'Caleb', 'Felix', 'Henry', 'Cruz', 'Paul', 'Fidelis', 'Camilus', 'Victory', 'Grace', 'Amas'];
console.log(myStudents);

var firstName = myStudents [0];
console.log(firstName);

let myName = myStudents [1];
console.log(myName);

var firstName = myStudents [6];
console.log(firstName);

myStudents [7] = 'Christian'
console.log(myStudents);

myStudents [6] = 'Temple'
console.log(myStudents)

let numOfStudents = myStudents.length
console.log(numOfStudents); 

//EXERCISE 1
//1
const shopList = ['Milk', 'Bread', 'Apples']
console.log(shopList);
//2
const list = shopList.length
console.log(list);
//3
shopList [1] = 'Bananas'
//4
console.log(shopList)


//ARRAY METHODS
//ADDING ELEMENTS
myStudents.push('Caleb'); //adding element to the last of the array
console.log(myStudents);

myStudents.unshift('Wilson'); //adding element to the start of an array
console.log(myStudents);

myStudents.shift(); //removes the first element in an array
console.log(myStudents);

myStudents.pop();//removes the last element in an array
console.log(myStudents);

myStudents.splice(11,1) //removes an element from an array
console.log(myStudents);

myStudents.splice(14, 1, 'Queen') //replaces an element
console.log(myStudents)

const petraIndex = myStudents.indexOf('Wilson')
console.log(petraIndex)

myStudents.push('Caleb');
console.log(myStudents)

const calIndex = myStudents.indexOf('Caleb');
console.log(calIndex);

const arr = ['Wilson', 'Daniel', 'Wilson', 'Joe', 'Raymond', 'Wilson']
const wilsonIndex = arr.filter((name) => name === 'Wilson')
console.log(wilsonIndex)


const sortedArr = myStudents.sort()
console.log(sortedArr)

myStudents.reverse()
console.log(myStudents)

//EXERCISE 2
//1
const sholis = [];
//2
// sholis.unshift('Bread')
// sholis.unshift('Milk')
// sholis.push('Apples')
sholis.push('Milk', 'Bread', 'Apples')
console.log(sholis)
//3
sholis.splice(1, 1, 'Bananas', 'Eggs')
console.log(sholis)
//4
// sholis.pop()
// console.log(sholis)
const lastItem = sholis.pop()
console.log(lastItem)
console.log(sholis)
//5
sholis.sort()
console.log(sholis)
//6
const milkIndex = sholis.indexOf('Milk')
console.log(milkIndex)
//7
// sholis.unshift('Carrots', 'Lettuce')
// console.log(sholis)
// sholis.unshift('Bananas')
// console.log(sholis)
// sholis.splice(3, 1,)
// console.log(sholis)
sholis.splice(1,0, 'Carrots', 'Lettuce')
console.log(sholis)

//8
const newList = ['Juice', 'Pop']
//9
const concatList1 = sholis.concat(newList)
console.log(concatList1)
const concatList2 = concatList1.concat(newList)
console.log(concatList2)

//10
const lastIndex = concatList2.length - 1
console.log(lastIndex)

//MULTIDIMENSIONAL ARRAY
const myArr = [
    [[1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4]],
    [[1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,'W',4]],
    [[1,2,3,4], [1,2,3,4], [1,'R',3,4], [1,2,3,4]],
];

console.log(myArr [1] [3] [2])
console.log(myArr [2] [2] [1])
console.log(myArr [0]);

//OBJECTS IN JS
const wilson = {
    firstName: 'Wilson',
    lastItem: 'Chinedu',
    age: 32,
    gender: 'Male',
    complexion: 'fair',
    height: '6.4',
    weight: '65'

};

const myHeight = wilson.height; //DOT NOTATION
console.log(myHeight)

const myweight = wilson['weight']
console.log(myweight)

wilson ['weight'] = '84';
console.log(wilson)

wilson ['lastName'] = 'Potter'
wilson.middleName = 'Chinedu'



const caleb = {
    firstName: 'Caleb',
    lastName: 'Benibo',
    age: 26,
    gender: 'Male',
    complexion: 'Caramel',
    height: '5.8',
    weight: '88'

};

//EXERCISE 4
//1
const myCar = {
    make: 'Lamborghini',
    model: 'Sesto Elemento',
    year: 2018,
    color: 'green',
    type: 'Saloon'

};
//2

var myColor = 'Color'
console.log(myColor)

myCar ['color'] = 'black'
console.log(myCar)

//3 
myColor = 'forsale'
console.log(myColor)

myCar [myColor] = false;
console.log(myCar)

//4
const make = myCar.make
const model = myCar ['forsale']
console.log(`Make: ${make}`)
console.log(`Model: ${model}`)

//5
const forSale = myCar ['forsale']
console.log(`Is car for sale?: ${forSale}`)

//WORKING WITH OBJECTS AND ARRAYS 
//OBJECTS IN OBJECTS
const student = {
    fullName: 'Peter Obi',
    jambReg: '40263264HB',
    matNum: 'u2014/5575001',
    bio: {
        age: '32',
        gender: 'M',
        dob: '12/2/1990',
        stateOfOrigin: 'Anambra',
        lga: 'Njikota',
        healthStatus: {
            bloodGroup: 'o+',
            genotype: 'AA',
            mantux: false,
        }

    },
     levels: ['LV100', 'LV200', 'LV300', 'LV400'],
     currentLevel: 'LV300',
     courses: [
        {
            'YR1': {
                sem1: ['MTH110.1', 'GES100.1', 'PHY101.1'],
                sem2: ['MTH114.2', 'GES104.2', 'PHY102.2'],
            },
        'YR2': {
                sem1: [],
                sem2: []
        }
        
        }
     ]

}

const myGenotype = student.bio['healthStatus'] ['genotype']
console.log(myGenotype)

console.log(student.currentLevel)

const ges104 = student.courses [0].YR1 ['sem2'] [1]
console.log(ges104)


//EXERCISE 5
//1
const people = {
     friends: []
}
//2
const one = {
    firstName: 'Chisom',
    'lastName': 'Ejah',
    'idValue': 'u2018/5535082'
}

const two = {
    firstName: 'Chucks',
    'lastName': 'Akorita',
    'idValue': 'u2018/5535082'
}

const three = {
    firstName: 'Ebuka',
    'lastName': 'Okoroji',
    'iValue': 'u2018/5535082'
}

//3
people.friends.push(one, two, three)
//4
console.log(people)

//OPERATORS
console.log('1' + '1')
console.log(1 + 1)
console.log(1 + '1')

const sum = 7 + 3;
const minus = 7 - 3;
const times = 7 * 3;
const divide = 7 / 3;
const rasie = 7 ** 3; //EXPONETIAL 
const modulus = 7 % 3;

//COMPARISON OPERATORS
console.log(7 > 3)
console.log(7 < 3)
console.log(7 >= 3)
console.log(7 <= 3)
console.log(7 === 3)
console.log(7 !== 3)


//LOGICAL OPERATORS
//AND, OR
const x = 10; const y = 20;

const myAnswer = 10 < 20 || 'Wilson' === 'wilson'
console.log(`My Answer: ${myAnswer}`)

const myAnswer2 = 10 < 20 && 'Wilson' === 'wilson'
console.log(`My Answer: ${myAnswer}`)



