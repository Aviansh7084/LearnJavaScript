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
//console.log(loginUserMessage("Avinash"));// overwrite sam value place into avinash

 function calsulateCartPrice(value1, value2, ...num1){
     return num1 
 }
 console.log(calsulateCartPrice(200,300,500,5300));
 
 const user = {
    username: "avinash",
    price: 199
 }
 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} abd price is ${anyobject.price}`);
    
 }
 //handleObject(user)
 handleObject({
    username: "sam",
    price: 399
 })

 const myNewArray = [200,400,100,600]
 function returnSecondValue(getArray){
    return getArray[3]
 }
 console.log(returnSecondValue(myNewArray));
 