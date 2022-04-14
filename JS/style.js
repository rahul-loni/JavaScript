//alert("Hello! I am an alert box!!");

// console.log( prompt ("What is your name "));


console.log("My Name is Rahul Kumar");
console.error("I Am An Error");
console.warn("I am Warm");
console.info("Rahul Kumar Hare ");



 //Variable 

 var A=6;
 //A=0  //Chenge Value Of A
 let B=7;
 const Z=10; // Can not Chenge bcz value is constant
 console.log(A);
 console.log(B);
 console.log(Z);


 //Operatores


 console.log(10+5);
 console.log(10-5);
 console.log(10*5);
 console.log(10/5);


 let x=10;
 console.log(x++);
 console.log(x++);
 console.log(--x);
 console.log(--x);


 //Data Types(String,number,null,Boolean,undifined,)

 let name="Rahul";
 let age=27;
 let isProgrammer=true;
 let noValue = null;
 let enAssigned;


 console.log(typeof name);
 console.log(typeof age);
 console.log(typeof isProgrammer);
 console.log(typeof noValue);
 console.log(typeof enAssigned);



//String Method


let firstName="Rahul";
let lastName="Kumar";
let language="Android Studio , WebDevelopment , Java";

console.log(firstName+lastName  +"My Language is " +language)
console.log(`My First Name is ${firstName} ${lastName} and My Language Like ${language}` )
console.log(language.substring(0,6))
console.log(language.substring(1,6))
console.log(language.split(",")[2])
console.log(language.replace("HTMl")[2])



//Arrays 
let framworks = ["Java ", "React" ,"Node Js"];
let database = new Array("DB2","SQL");

console.log(framworks)
database[0] ="Oracle";
console.log(database)

console.log(framworks.sort());
console.log(framworks.pop());
console.log(database);
database.shift();
console.log(database);
database.push("MySQL");
console.log(database);
console.log(Array.isArray(framworks));
console.log(framworks instanceof Array);



//Objects  

let employee ={
id:01,
fName:"Rahul ",
lName:"Kumar",
age:27,
contactNumber:9807140000,
doj:"10/03/20019",
adress:{
    city:"Chitwan",
    country:"Bharatpur",

},
skills:
    ["Java","Python","C#","C++"],
    Name: function () {
        return `${this.fName}${this.lName}`
    },

};
console.log(employee);
console.log(employee.id);
console.log(employee.fName);
console.log(employee.lName);
console.log(employee.adress);
console.log(employee.city);
console.log(employee.skills);


console.log(employee.Name())


console.log(this);


























