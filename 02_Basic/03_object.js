//Object

// Object.create(); // Skeleton

const one = {
    name : "shahrukh",
    age : 22,
    Location : "Bhilwara" ,
    email : "shahrukh@gmail.com"
}

console.log( one.Location);
console.log( one.age);

console.log(typeof one.Location);
console.log(typeof one.age);

//right approch to access

console.log(one["name"]);
console.log(one["age"]); // Beause age is string 

// make symbol and symbol as key of object 

const sy = Symbol("Key11");

const ob1 = 
{
    // sy : "KeyValue"//but its type is string

    [sy] : "keyValue"
}

console.log(ob1[sy]);

// change value in object

one.Location = "Potlan" ;
console.log(one["Location"]);


// freeze the value

Object.freeze(one) ;
one.Location = "bhilwara";

console.log(one);

// Function in js is normal as variable

// one.location2 = function()
// {
//     console.log("Hello to all");
// }

// console.log(one.location2());