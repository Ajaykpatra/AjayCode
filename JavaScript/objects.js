//singleton


//object literals

const jsUser = {
    name:"ajay",
    "full name":"ajay kumar",
    age:22,
    location:"Balasore",
    Gmail:"ajay@googole.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]

}

console.log(jsUser.Gmail);
console.log(jsUser["Gmail"]);


console.log(jsUser["full name"]);

//console.log(jsUser."full name");  //cann't run


jsUser.Gmail = "ajay@1234.com"

//console.log(jsUser);
Object.freeze(jsUser)
jsUser.Gmail ="adkjandjk@jhh.com"

console.log(jsUser);

