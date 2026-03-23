const currentYear = 2026;
let birthYear=2005
let age = currentYear - birthYear;
console.log("I am " + age + " years old."); 

function addNumbers(a, b) {
    function sum() {
        return a + b;
    }
    function subtract() {
        return a - b;
    }
    return sum()+ " " + subtract();
}
console.log(addNumbers(5, 10));

const greeting= function (name) {
    console.log("Hello, " + name + "!")};
    greeting("manoti");


    //arrow function

   // const calculation =(a, b) => {
       // console.log (a + b);
   // };
   // calculation(3, 7);
   // const subtract =(a, b) => {
       // console.log (a - b);
   // }
   // const multiply =(a, b) => {
       // console.log (a * b);
   // }
   // const divide =(a, b) => {
     //   console.log (a / b);
   // }
   // subtract(10, 5);
  //  multiply(4, 6);
   // divide(20, 4);
   // const add=(a, b) => a + b;
   // const subtract=(a, b) => a - b;
   // const multiply=(a, b) => a * b;
   // const divide=(a, b) => a / b;
   // console.log(add(3, 7) + " " +subtract(10, 5) + " " + multiply(4, 6) + " " + divide(20, 4));
const calculation = (a, b) => {
   const add = (a, b) => a + b;
   const subtract = (a, b) => a - b;
   const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    return add(a, b) + " " + subtract(a, b) + " " + multiply(a, b) + " " + divide(a, b);
};
console.log(calculation(3, 7));

users = [
    { name: "Manoti", age: 30 },
    { name: "samson", age: 25 },

];
const userNames = users.map(user => user.name);
console.log(userNames);
                


