const promiseOne = new Promise((resolve,reject)=>{ //create promise
    //do async tasks 
    //db calls,crytography,network calls
    setTimeout(()=>{
        console.log("async task is complete")
        resolve()
    },1000)
})
 promiseOne.then(()=>{
    console.log("promise consumed")
 })  //consume the promise


 new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log("async task 2") 
       resolve()
    },1000)
 }).then(()=>{
    console.log("async 2 resolved")
 })

 const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({userName:"chai",email:"chai@example.com"})
    },1000)
 }).then((user)=>{
    console.log(user)
 })// passing data(objects)

 const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({userName:"Preksha",psswd:"123@2"})
        }else{
            reject("ERROR:SOMETHING WENT WRONG")
        }
    },1000)
 })

promiseFour.then((user)=>{
console.log(user);
return user.userName
 }).then((userName)=>{
    console.log(userName)
 }).catch((error)=>{
    console.log(error)
 }).finally(()=>console.log("The promise is either resolved or rejected"))

 const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({userName:"js",psswd:"123@2"})
        }else{
            reject("ERROR:WENT WRONG")
        }
    },1000)
 })

 async function consomePromiseFive(){
try {
    const response = await promiseFive
console.log(response);
} catch (error) {
    console.log(error)
}
 }
 consomePromiseFive()

//  async function getAllUsers(){
//     try {
       
//            const respone =await fetch("https://jsonplaceholder.typicode.com/users")
//            const data =await  respone.json()
//            console.log(data)
//     } catch (error) {
//        console.log("E:",error)
//     }
//     }
//     getAllUsers()

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))
    
 