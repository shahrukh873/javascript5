// // Primitive and non primitive thier are two data type 

// const Id = Symbol('123')

// const diffrentId = Symbol('123')

// console.log(Id);

// console.log(diffrentId);

// console.log(Id==diffrentId); // This is not equal beause symbol stored the two diffrent value

// const  nabi = ["Mohammad" , "musa", "aadm"] ;

// Object are defind in the {} bracket or we can defind this oin variable in {}bracket .

// let letObject =
// {
//      name : "Shahrukh",
//      age : 22 , 

// }

// let myFunction = 
//  function()
//  {
//     console.log("Shahrukh")
//  }




 //  Thier are two types of memeory 

//  stack (primitive)

//  Heap (Non Primitive)

// **stack = isme me milti he hame copy** 

//**Heap = isme me milta he reference jis se ki hum  data change bi kar sakte he **

// let myName = "shahrukh" ;

// let lastName = myName ;

// console.log(lastName);

// lastName = "Mohammdad";

// console.log(myName);
// console.log(lastName) ;



//Here primitive data type is used so it use heap memory allocation


let userOne = // = laganan hota he object bana te time
{
   email : "shahrukh9982" , // , and ye bi
   password : '1234'
}

let userTwo = userOne ;

userTwo.email = "shahrukh9694";

console.log(userOne.email);
console.log(userTwo.email);