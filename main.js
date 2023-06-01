//Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.
function sumofEvenNumbers(numbers) {
  let evenSum = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenSum += numbers[i]
    }
  }
  return evenSum
}
const numbers = [1,2,3,4,5,6,7,8,9]
const evenSum = sumofEvenNumbers(numbers)
console.log(evenSum)



// Write a function that takes an array of numbers as input and returns the product of all the numbers in the array.
function productofArray(Number){
  let product=1
  for (let i = 0; i < Number.length; i++) {
    product*=Number[i]
  }
  return product
}
let num=[1,2,3,4,5,6,7,8,9]
var product=productofArray(num)
console.log(product)



// Write a function that takes an object as input and returns an array of all the keys in the object.
function objectkey(object){
  return Object.keys(object)
}
let myobj={
  name: "Ayan Mirza",
  father_name: "Javed Mirza",
  age: 17
}
console.log(objectkey(myobj))



// Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.
function cal_avg(Number){
  let sum=0
  for (let index = 0; index < Number.length; index++) {
    sum+=Number[index]
  }
  let average=sum/Number.length
  return average
}
let myarray=[1,2,3,4,5,6,7,8,9]
let myavg=cal_avg(myarray)
console.log(myavg)



// Write a function that takes a string as input and returns the number of vowels in the string.
function countVowels(str) {
    let vowels = "AEIOUaeiou"
    let count = 0
    for (let i = 0; i < str.length; i++) {
        for (let k = 0; k < vowels.length; k++) {
            if (str[i] == vowels[k]) {
                count++
            }
        }
    }
    return count;
}
let mystring = "Ayan Mirza"
let myvowels = countVowels(mystring)
console.log(mystring)
console.log(`Number of vowels in "${mystring}" = ` + myvowels)



// Write a function that takes an array of strings as input and returns the length of the longest string in the array.


function getLongestStr(arr) {
  let longestStr = {
    string: "",
    length: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestStr.length) {
      longestStr.string = arr[i];
      longestStr.length = arr[i].length;
    }
  }
  return longestStr;
}

let array = ["Ayan" , "Ahmed" , "Mustafa" ,"Salman"];
let longestString = getLongestStr(array);
console.log(`Longest string inside the array "${array}" is "${longestString.string} and its length is ${longestString.length}"`);


//  Write a function that takes an array of objects as input and returns an array of all the values for a specified key in each object.

let students = [
  {
    name: "Ayan Mirza",
    fatherName: "Muhammad Hafeez",
    email: "ayan@gmail.com",
    address: "Karachi, Pakistan",
  },
  {
    name: "Bilal Ahmed",
    fatherName: "Arshad",
    email: "bilal@gmail.com",
    address: "Karachi, Pakistan",
  },
  {
    name: "Abdul Moiz",
    fatherName: "Arshad",
    email: "moiz@gmail.com",
    address: "Karachi, Pakistan",
  },
];

function getSpecificKeyValues(arr, key) {
  const values = [];
  for (let i = 0; i < arr.length; i++) {
    values.push(arr[i][key]);
  }
  return values;
}
let specificKey = "email";
console.log(getSpecificKeyValues(students,specificKey));



// Write a function that takes an array of strings as input and returns an array of all the unique strings in the array.

const getUniqueStrings = (arr) => {
  return [new Set(arr)];
}

const Fruits = ["apple", "banana", "apple", "pear", "pear", "orange"];
const uniqueFruitArr = getUniqueStrings(Fruits);
console.log(uniqueFruitArr);
