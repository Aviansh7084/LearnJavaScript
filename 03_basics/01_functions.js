function sayMyName(){
    console.log("A");
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("S");
    console.log("H");
    
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result

    return number1 + number2
    
}
const result = addTwoNumbers(3,4)

console.log("Result:" , result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Avinash"));
console.log(loginUserMessage("Avinash"));// overwrite sam value place into avinash

 