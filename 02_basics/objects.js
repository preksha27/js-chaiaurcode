// singleton - made from constructor and it is when it is made from literals it will not be singleton

// object literals
// how to create object through constructor method -> Obejct.create(), from this singleton will be made

const mySym = Symbol("key1") // to use symbol in object it must always be declared

const jsUser = {
    name : "preksha",
    age:24,
    [mySym]:"myKey1",
    location:"banglore",
    email:"preksha@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsUser.name);
console.log(jsUser["email"]);//email or other key values is taken as string so put ""
console.log(typeof jsUser[mySym])

jsUser.email= "preksha@adobe.com" // to change the value of any key
console.log(jsUser["email"]);

Object.freeze(jsUser)// this will freeze to object so that no further changes can be made

jsUser.email= "preksha@microsoft.com"
console.log(jsUser["email"]);
console.log(jsUser);
