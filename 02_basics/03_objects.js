// singlteton 

// objec literals

const mySym=Symbol("key1")

const JsUser = {
    name: "Avinash",
    "full name": "Avinash Chauhan",
    [mySym]: "mykey1",
    age: 15,
    location:"Jaipur",
    email: "avinash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
    
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
//console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);

JsUser.email = "avinash@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "avinash@mircrosoft.com"
// console.log(JsUser);



JsUser.greeting = function () {
    console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
};

// Call the functions correctly
JsUser.greeting();
JsUser.greetingTwo();


