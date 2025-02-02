// const tinderUser = {} //singleton object
const tinderUser ={} //non-singleton object

tinderUser.id="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        usefullname: {
            firstname: "aviansh",
            lastname: "chauhan",
        }
    }
}
//console.log(regularUser.fullname.usefullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
const obj4 ={5: "a", 6: "b"}

//const obj3  =  {obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
//Spread Operator (...)   :- Expands elements of an iterable (array, object, or string) into individual elements.
// console.log(obj3);

const users = [
    {
        name: "Alice",
        age: 30,
        email: "alice@example.com"
    },
    {
        name: "Bob",
        age: 25,
        email: "bob@example.com"
    },
    {
        name: "Charlie",
        age: 28,
        email: "charlie@example.com"
    }
];
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('islogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Avinash"
}
const {courseInstructor: instructor} = course

console.log(instructor);

//  {
//     "name": "avinash",
//     "coursename": "js in hindi",
//     "price": "free"
//  }

[
    {},
    {},
    {}
]
