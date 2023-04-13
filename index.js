//Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.
function sumofEvenNumbers(numbers) {
  let evenSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenSum += numbers[i];
    }
  }
  return evenSum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16];
const evenSum = sumofEvenNumbers(numbers);
console.log(evenSum);



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
