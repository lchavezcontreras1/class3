
function sayHello(greeting, salutation){
    //keyword function with a name do declared
    // greeting is a parameter 'hi' is the argument
    // not limited to one parameter
    document.write(greeting.toUpperCase()+" "+salutation.toUpperCase);
    // + " " adds a space
}
function rollDie(sides){ //sides is the parameter
    let value = Math.floor(Math.random()*sides)+1;
    //6 is possible values with a minimum of one
    alert(value);
}
function drawCard(){
    let value = Math.floor(Math.random()*52)+1;
    //52 possibilities with a minimum of one
    alert(value);
}

//function making another function run

function generateLetter(){
    let num = Math.floor(Math.random()*26)+65;
    //26 possibilities with minimum of 65
    let letter = String.fromCharCode(num);
    //num is an argument
    //will give us a letter
    //problem two variables declared inside a function only usable within function
    return letter;
    // return output for variable letter
}
function generateAcronym(){
    let firstLetter = generateLetter();
    let secondLetter = generateLetter();
    let thirdLetter = generateLetter();
    let acronym = firstLetter + secondLetter + thirdLetter;
    alert(acronym);
}
//global will maintain its value until the page is reloaded in the browser
let globalVariable = 0; //global because it is not inside a function
function testIt(){
    let localVariable = 0;
    alert(++localVariable); //stays as one
    alert(++globalVariable); //keeps going up by one
}
let initial = 0;
function addOne(){
    return (++initial);
}
function results(){
    alert("You clicked"+" "+initial+" times");
}

