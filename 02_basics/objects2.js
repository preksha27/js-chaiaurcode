//objects declaring constructors

const tinderUser = new Object()
tinderUser.id ="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularUser = {
    email:"prekshan@adob.com",
    fullName :{
        userName:{
            
                firstName:"Preksha",
                lastName:"Nimbagal"
        }
    }

}

console.log(regularUser.fullName.userName.lastName)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}
//const obj4 = Object.assign({},obj1,obj2,obj3) //object.assign copies source object to target object and returns the modified target object
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)

const users = [
    {
        id:1,
        email:"p@adobe.com"
    },
    {
        id:2,
        email:"k@microsoft.com"
    }
]
console.log(users[1].id)  // printout array's first element
console.log(Object.keys(tinderUser))   // get the keys of the object
console.log(Object.keys(users))
console.log(Object.entries(tinderUser))  // get the key value pairs of the object


console.log(tinderUser.hasOwnProperty('isLoggedIn')); // tocheck if a particular keys are present in a objectc
console.log(Object.values(users));

/////object de-structuring

const course = {
    courseName :" js in hindi",
    price :999,
    courseInstructor :"Preksha"
}
const {courseInstructor}= course // to use instead of course.couseInstructor
console.log(courseInstructor);
// if you want to rename any keys then or de- structure the object
const {courseInstructor : instructor} =course
console.log(instructor);