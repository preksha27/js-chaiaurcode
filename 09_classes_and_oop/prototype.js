// let myName ="preksha    "

// console.log(myName.length);


let myHeros = ["thor","spiderman"]

let heroPower ={
    thor:"hammer",
    spiderMan:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderMan}`)
    }
}

Object.prototype.hitesh=function(){
    console.log("hitesh is present in all objets");
}

Array.prototype.heyHitesh=function(){
    console.log("hitesh says hello");
}

//heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
//heroPower.heyHitesh()

// array -> obejct -> null

// prototype can be created in object which will get automatically created in array but it doesnot happen vice versa

//inheritance
const user ={
    name:"chai",
    email:"chai@google.com"
}
const Teacher ={
    makeVideo:true
}

const teachingSupport ={
    isAvialable : false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:teachingSupport
}
Teacher.__proto__=user

// modern suntax
Object.setPrototypeOf(teachingSupport,Teacher)

let anotheruserName = "chaiAurcode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}
anotheruserName.trueLength()
"preksha".trueLength()
"ok   ".trueLength()