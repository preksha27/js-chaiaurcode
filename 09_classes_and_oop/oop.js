const user = {
    userName:"preksha",
    loginCount:8,
    signedIn:true,



    getUserDetails:function(){ //method
        //console.log(`${this.userName}`)
       // console.log("got user deatils from database")
    }

}

//console.log(user.getUserDetails())

// new is a constructor function
// helps in making new context

function User(userName,loginCount,isLoggedIn){
    this.userName=userName;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.userName}`);
    }



    return this
}

const userOne = new User("preksha",12,true)
const usertTwo = new User("sophia",8,false)
console.log(userOne)
console.log(usertTwo)
