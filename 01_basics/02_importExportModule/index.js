// import {add, subtract, multiply} from "./math" //not working only used in react

const {add, subtract, multiply} = require("./math")


console.log("Hello, this is import and export tutorial")


console.log("Addition of 6 and 4 is: ",add(6,4))
console.log("Subtraction of 6 adn 4 is: ",subtract(6,4))
console.log("Multiplication of 6 adn 4 is: ",multiply(6,4))


//importing builtin modules
const fs = require('fs')
console.log(fs);
