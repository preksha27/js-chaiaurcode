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
console.log(users[1].id)
console.log(Object.keys(tinderUser))
console.log(Object.keys(users))
console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty('isLoggedIn'));