//Chapter 5
// MATH EXPRESSIONS
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// let a = 3;
// let b = 5;
// let sum = a+b;
// document.write(`Sum of ${a} and ${b} is ${sum} `);
// console.log(`Sum of ${a} and ${b} is ${sum} `);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// subtraction

// let a = 10;
//  let b = 2;
//  let c = a-b;
//  document.write(`Subtraction of ${a} and ${b} is ${c} `);
// console.log(`subtraction of ${a} and ${b} is ${c} `);


//multiplication
// let a = 10;
//  let b = 2;
//  let c = a*b;
//  document.write(`multiplication of ${a} and ${b} is ${c} `);
// console.log(`multiplication of ${a} and ${b} is ${c} `);

//division
// let a = 20;
//   let b = 4;
//   let c = a/b;
//   document.write(`division of ${a} and ${b} is ${c} `);
// console.log(`division of ${a} and ${b} is ${c} `);

// modulus.
// let a = 20;
//    let b = 2;
//   let c = a % b;
//    document.write(`modulus of ${a} and ${b} is ${c} `);
//  console.log(`modulus of ${a} and ${b} is ${c} `);

// 3. Do the following using JS Mathematic Expressions
//a. Declare a variable.
//b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// a
//let myValue;

// b
// let myValaue = "Value after variable declaration is: ??";
// document.write(myVlaue);

// c
// let num = 20;

// d
// let newValue = "Initial value is : 5";
// document.write(newValue);

// e
// let newValue = 5;
// ++newValue;

// f
// let newValue = 5;
// ++newValue;
//  document.write(`Value after increment is:${newValue} `);

//  console.log(`Value after increment is:${newValue} `);

// g
// let newValue = 5;
// newValue = ++newValue + 7


// h
// let newValue = 5;
//  newValue = ++newValue + 7
// document.write(`Value after addition is:${newValue} `);
//  console.log(`Value after addition is:${newValue} `);

// i
// let newValue = 5;
//  newValue = ++newValue + 7;
//  --newValue;
//  j
// let newValue = 5;
//  newValue = ++newValue + 7;
//  --newValue;
//  document.write(`Value  after decrement is:${newValue} `);
//  console.log(`Value after decrementis:${newValue} `);

// k
//  let newValue = 5;
//   newValue = ++newValue + 7;
//   --newValue;
//   newValue = newValue / 3;



// L
// let newValue = 5;
// newValue = ++newValue + 7;
// --newValue;
// newValue = newValue % 3;
// document.write(`“The remainder is :${newValue}" `);
//    console.log(`“The remainder is :${newValue}" `);

// q4
// console.log( "Cost of one movie ticket is 600 PKR.");
//  let ticketPrice = 600;
//  let newcost =  ticketPrice*5;
// document.write(`Total cost of to buy 5 tickets to a movie is: ${newcost} PKR `);
// console.log(`Total cost of to buy 5 tickets to a movie is: ${newcost} PKR `);

//q5

//5. Write a script to display multiplication table of any
//number in your browser. E.g
// console.log("Table of 4");
// let num =4;
// for(let i=1; i <=10; i++){
//     let res = num*i
//     document.write(`${num} * ${i} = ${res} <br>`);
//    console.log(`${num} * ${i} = ${res}`);
// };

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

// let itmOneCost = 650;
// let costTwo = 100;
// let itmOneQuantity = 650*3;

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser;

// document.write(`<b>Marks Sheet<b/><br/> <br/>`);

// let marks = 980;
// let markget = 804;
// let percentage = markget/marks*100;

// document.write(`Total marks: ${marks} <br/> marks obtained: ${markget} <br/> percentage: ${percentage}`);

// console.log(`Total marks: ${marks}  marks obtained: ${markget}  percentage: ${percentage}`);

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// let num = 4;
// console.log((num+5 *10)/2) ;

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.
// document.write("Age Calculator <br/>");
// let thisYear =2016;
// let brthYear = 1992;
// let getAge = thisYear -  brthYear ;

// document.write(`current Year: ${ thisYear} <br/> Birth Year: ${brthYear} <br/> Your Age is: ${getAge}`);

// console.log(`current Year: ${ thisYear}  Birth Year: ${brthYear}  Your Age is: ${getAge}`);

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
// document.write("<b>Life Time Supply Calculator</b> <br> <br>");

// let favSnake = "Chocloate chip";
// let currentAge = 15;
// let estimateAge = 65;
// let perDaySnake = 3;
//  let snakeAmout = (estimateAge - currentAge)*3;
// //  Document.write("Favorite snake: ${favSnake}")
//  document.write(`Favorite snake: ${favSnake} <br> Current Age: ${currentAge} <br> Estimated Maximum age: ${estimateAge} <br> Amount of Snake per day: ${perDaySnake}<br> You will need ${snakeAmout} ${favSnake }  to last you until the ripe old age of ${estimateAge}`);


// End of Chapter 5





















