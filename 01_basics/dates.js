// dates 
let myDate = new Date() // create an objeact Date() and myDate is the instance of the created object
console.log(myDate
);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreateDate = new Date("01-14-2024") // months will start from 0
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now() //for writing time stamp
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString({
    weekday:"long",
    
})
console.log(newDate);