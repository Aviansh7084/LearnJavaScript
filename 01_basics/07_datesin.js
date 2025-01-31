// Dates


let myDate =  new Date()
// console.log(myDate.toDateString());

// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
//console.log(typeof myDate);


// let myCreatedate = new Date(2024, 8, 13)
// let myCreatedate = new Date(2024, 8, 13, 5, 3)
 let myCreatedate = new Date("01-14-2024")
console.log(myCreatedate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate);
console.log(newDate.getDay);
console.log(newDate.getMonth);

//`${newDate.getDay()} and the time`
 
newDate.toLocaleDateString('default', {
    weekday: "long",
})



